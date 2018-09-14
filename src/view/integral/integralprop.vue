<template>
  <div class="integral">
    <div class="integral-title">
      <div class="jifen">积分级别</div>
      <div class="pinpai">品牌</div>
    </div>
    <div class="integral-fen" v-for="(item,index) in jfpslist" :key="index">
      <div class="jifen">{{item.title}}</div>
      <div class="pinpai">{{item.content}}</div>
    </div>

  </div>
</template>
<style lang="scss" type="text/scss" scoped>
  .integral-title{
    width: 100%;
    height: 90px;
    background-color: #f2f2f2;
    display: flex;
    line-height: 90px;
    text-align: center;
    font-size: 30px;
    color: #333;
    .jifen{
      width: 30%;
      border-right: 1px solid #ccc;
      padding: 0px 20px;
    }
    .pinpai{
      width: 70%;
      padding: 0px 20px;
    }
  }
  .integral-fen{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
    color: #333;
    .jifen{
      width: 30%;
      border-right: 1px solid #ccc;
      padding: 30px 20px;
      font-size: 28px;
    }
    .pinpai{
      width: 70%;
      padding: 30px 20px;
      font-size: 24px;
    }
  }
</style>

<script>
  export default {
    name: "integralprop",
      data(){
        return{
              jfpslist:[]
          }
      },
      mounted(){
        this.getjfpslist();
      },
      methods:{
          getjfpslist:function () {
              var that=this;
              var datas={

              }
              that.$fetch('jfps', datas)
                  .then((response) => {
                      var data = response.data;
                      that.jfpslist=data;

                  })

          },
      }
  }
</script>

