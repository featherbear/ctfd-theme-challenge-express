<script>
  import { onMount } from 'svelte';
  import { palette } from './colors.js';
  let { title = 'Score over Time', series = [] } = $props();
  let element;
  let chart = $state.raw(null);
  let error = $state('');
  onMount(() => {
    let active = true;
    const observer = new ResizeObserver(() => chart?.resize());
    import('./chart.js').then(({ init }) => {
      if (!active) return;
      chart = init(element);
      observer.observe(element);
    }).catch(() => { if (active) error = 'The chart could not load. The scores are available in the table below.'; });
    return () => { active = false; observer.disconnect(); chart?.dispose(); };
  });
  $effect(() => {
    if (!chart) return;
    const ink = '#18202a';
    chart.setOption({
      backgroundColor: '#fff', color: palette,
      animation: !matchMedia('(prefers-reduced-motion: reduce)').matches,
      textStyle: { color: ink, fontFamily: 'Tahoma, sans-serif', fontSize: 12 },
      title: { text: title, left: 'center', textStyle: { color: ink, fontSize: 17 } },
      tooltip: { trigger: 'axis', confine: true, backgroundColor: '#fff', textStyle: { color: ink }, borderColor: '#697c92' },
      legend: { type: 'scroll', bottom: 0, textStyle: { color: ink } },
      toolbox: { feature: { saveAsImage: {} }, iconStyle: { borderColor: '#465365' } },
      grid: { top: 80, bottom: 55, left: 12, right: 18, containLabel: true },
      xAxis: { type: 'time', axisLabel: { color: ink }, axisLine: { lineStyle: { color: '#697c92' } } },
      yAxis: { type: 'value', axisLabel: { color: ink }, splitLine: { lineStyle: { color: '#d9e0e8' } } },
      dataZoom: [{ type: 'slider', top: 35, height: 20, textStyle: { color: ink }, borderColor: '#697c92', fillerColor: 'rgba(25,76,159,.15)' }],
      series: series.map((item, i) => ({ ...item, type: 'line', symbolSize: 7, lineStyle: { width: 3, type: i > 4 ? 'dashed' : 'solid' }, label: { color: ink } }))
    }, { notMerge: true });
  });
</script>
{#if error}<p role="status">{error}</p>{/if}
<div id="score-graph" bind:this={element} class="score-chart" role="img" aria-label={`${title}. Scores are also listed in the table below.`}></div>
