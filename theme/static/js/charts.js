/* CTFd's supported chart-option hooks. Keep labels and series on a white surface. */
(() => {
  const ink = '#18202a';
  const palette = ['#194c9f','#8a2459','#25632a','#8a480c','#623e9d','#006473','#a12a20','#4c5872','#615600','#763c36'];
  window.expressChartPalette = palette;
  function series(index) {
    const color = palette[index % palette.length];
    return {
      itemStyle: {normal: {color}},
      lineStyle: {color, width: 3, type: index > 4 ? 'dashed' : 'solid'},
      label: {normal: {color: ink}},
      areaStyle: {normal: {color, opacity: 0.12}},
      symbolSize: 7,
    };
  }
  function options() {
    return {
      backgroundColor: '#ffffff',
      textStyle: {color: ink, fontFamily: 'Tahoma, Arial, sans-serif', fontSize: 12},
      title: {textStyle: {color: ink, fontSize: 16}},
      legend: {textStyle: {color: ink}, inactiveColor: '#596575', pageTextStyle: {color: ink}, pageIconColor: '#194c9f'},
      tooltip: {backgroundColor: '#ffffff', borderColor: '#697c92', textStyle: {color: ink}},
      toolbox: {iconStyle: {borderColor: '#465365'}},
      xAxis: [{axisLabel: {color: ink}}],
      yAxis: [{axisLabel: {color: ink}}],
      dataZoom: [{textStyle: {color: ink}, borderColor: '#697c92', fillerColor: 'rgba(25,76,159,0.18)'}],
    };
  }
  Object.defineProperty(window, 'scoreboardChartOptions', {configurable: true, get() {
    const root = document.querySelector('[x-data="ScoreboardDetail"]');
    const count = root && window.Alpine ? Object.keys(window.Alpine.$data(root).data || {}).length : 0;
    return {...options(), series: Array.from({length: count}, (_, index) => {
      const result = series(index);
      delete result.areaStyle;
      return result;
    })};
  }});
  Object.defineProperty(window, 'userScoreGraphChartOptions', {configurable: true, get() {
    const result = options();
    const root = document.querySelector('[x-data="UserGraphs"]');
    const graph = root && window.Alpine ? window.Alpine.$data(root) : null;
    if (graph?.solves && graph?.awards) {
      // CTFd's option merger cannot merge function-valued formatters into new objects.
      // Supply compact category labels in the same chronological order as its series.
      result.xAxis[0].data = [...graph.solves.data, ...graph.awards.data]
        .sort((a,b) => new Date(a.date) - new Date(b.date))
        .map(item => new Date(item.date).toLocaleString(undefined, {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}));
    }
    return {...result, series: [series(0)]};
  }});
})();
