import { init, use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent, DataZoomComponent, ToolboxComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([LineChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, DataZoomComponent, ToolboxComponent, CanvasRenderer]);
export { init };
