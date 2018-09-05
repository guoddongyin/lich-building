
<template>
  <div>
    <div class="index">
      <div class="touxiang"><img src="../../static/img/touxi.png" alt=""/></div>
      <div class="name">dsks</div>
      <div class="jifen">
        <div ></div>
        <div ></div>
      </div>
    </div>
    <div class="we-title">我的工具</div>
    <div class="weui-grids">
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_button.png" alt="">
        </div>
        <p class="weui-grid__label">
          Button
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_cell.png" alt="">
        </div>
        <p class="weui-grid__label">
          List
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_cell.png" alt="">
        </div>
        <p class="weui-grid__label">
          Form
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_cell.png" alt="">
        </div>
        <p class="weui-grid__label">
          Flex
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_toast.png" alt="">
        </div>
        <p class="weui-grid__label">
          Toast
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_dialog.png" alt="">
        </div>
        <p class="weui-grid__label">
          Dialog
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_progress.png" alt="">
        </div>
        <p class="weui-grid__label">
          Progress
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_msg.png" alt="">
        </div>
        <p class="weui-grid__label">
          Msg
        </p>
      </a>
      <a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
          <img src="images/icon_nav_article.png" alt="">
        </div>
        <p class="weui-grid__label">
          Article
        </p>
      </a>
    </div>
    <div class="we-grids">
      a
    </div>
  </div>
</template>

<script>

</script>
<style type="text/scss" lang="scss" scoped>
  .index{
    width:690px;
    height:380px;
    margin: auto;
    background: url("../../static/img/heika.png");
    /*background-size: 100% 100%;*/
    background-size: cover;
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

  }
  .we-title{
    text-align: left;
    color: #333333;
    font-size: 34px;
    width: 140px;
    padding: 30px 10px;
  }
  .weui-grids {
    position: relative;
    overflow: hidden;
  }
  .weui-grid {
    position: relative;
    float: left;
    padding: 20px 10px;
    width: 33.33333333%;
    box-sizing: border-box;
  }
  .weui-grid__icon {
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }
  .weui-footer, .weui-grid__label {
    text-align: center;
    font-size: 14px;
  }
  .weui-grid__icon+.weui-grid__label {
    margin-top: 5px;
  }
</style>
