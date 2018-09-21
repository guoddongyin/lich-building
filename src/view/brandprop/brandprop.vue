
<template>
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
          couponlist:''
      }
    },
    mounted() {
      this.getjftop5list();
    },
      methods:{
          getjftop5list:function () {
              var that=this;
              var datas={
              }
              that.$fetch('jftop5', datas)
                  .then((response) => {
                      var data = response.data;
                      that.couponlist=data;
                      var dataname=[];
                      var datavalue=[];
                      var dataradius=[]
                      for(var i in  that.couponlist){
                          dataname.push(that.couponlist[i].brand);
                          datavalue.push(that.couponlist[i].top5)
                          dataradius.push({
                              value:that.couponlist[i].top5,
                              name:that.couponlist[i].brand
                          })
                      }
                      that.seteachart_botom(dataname,datavalue);
                      that.seteachart_top(dataradius)
                  })
          },
          /*ECharts图表*/
          seteachart_top:function (dataradius) {
              echarts.init(document.getElementById('main')).setOption({
                  series : [
                      {
                          type: 'pie',
                          radius: '55%',
                          data:dataradius,
                      }
                  ],
                  color:['#199375', '#db8245','#3ffed0','#6d6d6d','#0b0b0c']
              });
          },
          seteachart_botom:function (dataname,datavalue) {
              echarts.init(document.getElementById('main2')).setOption({
                  xAxis: {
                      type: 'category',
                      data: dataname,
                      textStyle: {
                          fontSize: 10
                      }
                  },
                  yAxis: {
                      type: 'value'
                  },
                  series: [{
                      data: datavalue,
                      type: 'line',
                      smooth: true
                  }]
              });
          }
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
