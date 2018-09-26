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
    height: 2.8125rem;
    background-color: #51aa38;
    display: flex;
    line-height: 2.8125rem;
    text-align: center;
    font-size: 0.9375rem;
    color: #fff;
    border-bottom: 0.03125rem solid #f2f2f2;
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
  .integral-fen:nth-child(even){
    background-color:#fff;
  }
  .integral-fen{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
    color: #333;
    height: 200px;
    .jifen{
      width: 30%;
      border-right: 1px solid #ccc;
      padding: 30px 20px;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      /*background-color: #fff;*/
      color: #51aa38;
    }
    .pinpai{
      width: 70%;
      padding: 30px 20px;
      font-size: 24px;
      text-align: left;
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
          var datas={}
          that.$fetch('jfps', datas)
            .then((response) => {
              var data = response.data;
              that.jfpslist=data;
            })
        },
      }
  }
</script>

