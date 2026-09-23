// Rendered text contrast check on representative CTFd pages, including gradient stops.
// Complements screenshot review; canvas graphics are checked through their palette below.
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const base = process.env.CTFD_URL || 'http://localhost:8000';
(async () => {
  const browser = await chromium.launch({channel:'chrome',headless:true});
  const page = await browser.newPage({viewport:{width:1440,height:1000}});
  const failures = [];
  try {
    async function audit(path) {
      await page.goto(base + path);
      if (path === '/challenges') await page.locator('.open-challenge').first().waitFor();
      if (path === '/scoreboard') await page.locator('canvas').waitFor();
      const result = await page.evaluate(() => {
        const rgb = value => value.match(/[\d.]+/g)?.map(Number);
        const luminance = color => color.slice(0,3).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((sum,v,i) => sum + v * [.2126,.7152,.0722][i], 0);
        const ratio = (a,b) => { const x=luminance(a),y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
        function backgrounds(el) {
          for (let node=el; node; node=node.parentElement) {
            const style=getComputedStyle(node);
            const stops=style.backgroundImage.match(/rgba?\([^)]+\)/g);
            if (stops) return stops.map(rgb);
            const color=rgb(style.backgroundColor);
            if (color && (color.length===3 || color[3]===1)) return [color];
          }
          return [[255,255,255]];
        }
        const failed=[];
        let checked=0;
        for (const el of document.querySelectorAll('body *')) {
          const style=getComputedStyle(el), box=el.getBoundingClientRect();
          if (!box.width || !box.height || style.visibility==='hidden' || el.closest('[hidden]') || ['SCRIPT','STYLE','OPTION'].includes(el.tagName)) continue;
          const text=[...el.childNodes].filter(n => n.nodeType===3).map(n => n.textContent.trim()).join('').trim();
          const isInput=el.matches('input[type=submit],input[type=text],input[type=password]');
          if (!text && !isInput) continue;
          if (!el.checkVisibility({checkOpacity:true,checkVisibilityCSS:true})) continue;
          const color=rgb(style.color);
          const contrast=Math.min(...backgrounds(el).map(bg => ratio(color,bg)));
          const large=parseFloat(style.fontSize)>=24 || (parseFloat(style.fontSize)>=18.66 && Number(style.fontWeight)>=700);
          checked++;
          if (contrast < (large ? 3 : 4.5)) failed.push({text:(text||el.value||el.name).slice(0,70),ratio:Number(contrast.toFixed(2)),color:style.color});
        }
        const palette=(window.expressChartPalette||[]).map(hex => [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)));
        return {checked,failed,minimumChartContrast:Math.min(...palette.map(color=>ratio(color,[255,255,255])))};
      });
      console.log(path,JSON.stringify(result));
      failures.push(...result.failed.map(f => ({path,...f})));
      assert.ok(result.minimumChartContrast>=3,'chart palette contrast');
    }
    await audit('/login'); await audit('/register'); await audit('/reset_password');
    await page.goto(base+'/login');
    await page.locator('[name=name]').fill('player');
    await page.locator('[name=password]').fill('express-player-local');
    await page.locator('[type=submit]').click(); await page.waitForURL('**/challenges');
    for (const path of ['/challenges','/scoreboard','/users','/user','/settings','/notifications']) await audit(path);
    assert.deepEqual(failures,[]);
    console.log('PASS: rendered text and chart palette contrast');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
