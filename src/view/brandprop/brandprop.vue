
<template>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
<div>
  <div id="charts" style="width:90%;height:280px;margin: auto">
    <div class="pintitle">TOP5品牌占比</div>
    <div id="main" :style="{width:'100%',height:'280px'}"></div>
  </div>
  <div class="line"></div>
  <div id="main2" style="width:90%;height:280px;margin: auto"></div>
</div>
</template>

<script>
  export default {
    name: 'Bank',
    data () {
      return {
      }
    },
    mounted() {
      /*ECharts图表*/
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
        series : [
          {
            type: 'pie',
            radius: '55%',
            data:[
              {value:62, name:'62%'},
              {value:16, name:'16%'},
              {value:13, name:'13%'},
              {value:6, name:'6%'},
              {value:3, name:'3%'},
            ],
          }
        ],
        color:['#199375', '#db8245','#3ffed0','#6d6d6d','#0b0b0c']
      })
      echarts.init(document.getElementById('main2')).setOption({
        xAxis: {
          type: 'category',
          data: ['小件', '芬驰', '大师', '得意', '金貂'],
          textStyle: {
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          data: [10,20, 30, 40, 50, 60,70]
        },
        series: [{
          data: [3, 6, 13, 16, 62],
          type: 'line',
          smooth: true
        }]
      });
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .pintitle{
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 34px;
    text-align: center;
    margin: 50px auto 20px;
  }
  .line{
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
  }
</style>
