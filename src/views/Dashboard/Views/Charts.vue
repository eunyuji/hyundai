<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">24 Hours Performance</h4>
          <p class="category">Line Chart</p>
        </div>
        <div class="card-content">
          <div id="chartPerformance" class="ct-chart"></div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">NASDAQ: AAPL</h4>
          <p class="category">Line Chart with Points</p>
        </div>
        <div class="card-content">
          <div id="chartStock" class="ct-chart"></div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Views</h4>
          <p class="category">Bar Chart</p>
        </div>
        <div class="card-content">
          <div id="chartViews" class="ct-chart"></div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Activity</h4>
          <p class="category">Multiple Bars Chart</p>
        </div>
        <div class="card-content">
          <div id="chartActivity" class="ct-chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chartist from 'chartist';
export default {
  data() {
    return {
      $Chartist: null,
    };
  },
  methods: {
    initPerformanceChart() {
      const dataPerformance = {
        labels: [
          '6pm',
          '9pm',
          '11pm',
          '2am',
          '4am',
          '8am',
          '2pm',
          '5pm',
          '8pm',
          '11pm',
          '4am',
        ],
        series: [[1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]],
      };

      const optionsPerformance = {
        showPoint: false,
        lineSmooth: true,
        axisX: {
          showGrid: false,
          showLabel: true,
        },
        axisY: {
          offset: 40,
        },
        low: 0,
        high: 16,
        height: '250px',
      };

      Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance);
    },
    initActivityChart() {
      const data = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'Mai',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
        ],
      };

      const options = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false,
        },
        height: '250px',
      };

      const responsiveOptions = [
        [
          'screen and (max-width: 640px)',
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc(value) {
                return value[0];
              },
            },
          },
        ],
      ];

      Chartist.Bar('#chartActivity', data, options, responsiveOptions);
    },
    initStockChart() {
      const dataStock = {
        labels: ["'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15"],
        series: [
          [22.2, 34.9, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.5, 107.23],
        ],
      };
      const optionsStock = {
        lineSmooth: false,
        axisY: {
          offset: 40,
          labelInterpolationFnc(value) {
            return `$${value}`;
          },
        },
        low: 10,
        height: '250px',
        high: 110,
        classNames: {
          point: 'ct-point ct-green',
          line: 'ct-line ct-green',
        },
      };
      Chartist.Line('#chartStock', dataStock, optionsStock);
    },
    initViewsChart() {
      const dataViews = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'Mai',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
      };
      const optionsViews = {
        seriesBarDistance: 10,
        classNames: {
          bar: 'ct-bar',
        },
        axisX: {
          showGrid: false,
        },
        height: '250px',
      };
      const responsiveOptionsViews = [
        [
          'screen and (max-width: 640px)',
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc(value) {
                return value[0];
              },
            },
          },
        ],
      ];
      Chartist.Bar(
        '#chartViews',
        dataViews,
        optionsViews,
        responsiveOptionsViews
      );
    },
    initCharts() {
      this.initPerformanceChart();
      this.initStockChart();
      this.initViewsChart();
      this.initActivityChart();
    },
  },
  async mounted() {
    this.initCharts();
  },
};
</script>
<style></style>
