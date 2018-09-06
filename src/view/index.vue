
<template>
  <div>
    <div class="index">
      <div class="touxiang" @click="()=>{this.$router.push({path:'information',query:{}})}">
        <img src="../../static/img/touxi.png" alt=""/></div>
      <div class="name">dsks</div>
      <!--<div>-->
        <!--<div class="jifen">-->
          <!--<p class="title">已使用积分</p>-->
          <!--<p class="shuzi">eddd</p>-->
        <!--</div>-->
        <!--<div class="jifen">-->
          <!--<p class="title">本月可用积分</p>-->
          <!--<p class="shuzi">443545</p>-->
        <!--</div>-->
      <!--</div>-->

    </div>
    <div class="we-title">我的工具</div>
    <div class="weui-grids">
      <div class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-yhj.png" alt="">
        </div>
        <p class="weui-grid__label">
          我的优惠券
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'integral-detail',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-jf.png" alt="">
        </div>
        <p class="weui-grid__label">
          积分明细
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'reportlist',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-dingdan.png" alt="">
        </div>
        <p class="weui-grid__label">
          我的订单
        </p>
      </div>
      <div class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-dch.png" alt="">
        </div>
        <p class="weui-grid__label">
          待出货
        </p>
      </div>
      <div class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-dfk.png" alt="">
        </div>
        <p class="weui-grid__label">
          待付款
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'brandprop',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-pingp.png" alt="">
        </div>
        <p class="weui-grid__label">
          品牌占比
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'integralprop',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-jfbl.png" alt="">
        </div>
        <p class="weui-grid__label">
          积分比例指导
        </p>
      </div>
      <div class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-xinyun.png" alt="">
        </div>
        <p class="weui-grid__label">
            幸运大抽奖
        </p>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style type="text/scss" lang="scss" scoped>
  .index{
    width:690px;
    height:380px;
    margin: 30px auto 0;
    background: url("../../static/img/heika.png");
    background-size: 100% 100%;
    display: flex;
    .touxiang{
      width: 150px;
      height: 150px;
      padding: 50px 40px;
      img{
        width: 100%;
      }
    }
    .name{
      width: 100px;
      height: 34px;
      padding: 100px 0;
      /*display:table-cell;*/
      vertical-align:middle;
      text-align: left;
      font-size: 34px;
      color: #333;
    }
    .jifen{
      width: 100%;
      display: flex;
      .jifn{
        width: 50%;
      }
    }

  }
  .we-title{
    text-align: left;
    color: #333333;
    font-size: 34px;
    width: 140px;
    padding: 30px;
  }
  .weui-grids {
    position: relative;
    overflow: hidden;
  }
  .weui-grid {
    position: relative;
    float: left;
    padding:25px;
    width: 33.33333333%;
    box-sizing: border-box;
  }
  .weui-grid__icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .weui-footer, .weui-grid__label {
    text-align: center;
    font-size: 24px;
  }
  .weui-grid__icon+.weui-grid__label {
    margin-top: 20px;
  }
</style>





