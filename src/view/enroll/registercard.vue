<template>
  <div class="page-part">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field label="会员卡号" placeholder="请输入会员卡号" ></mt-field>
    <mt-field label="验证码" placeholder="输入验证码" style="padding-bottom: 30px">
      <span class="yanzheng">发送验证码</span>
    </mt-field>
    <mt-button class="bangding" type="default"  size="large">绑定</mt-button>
  </div>
</template>
<style lang="scss" type="text/scss" scoped>
  .page-part{
    width: 90%;
    margin: 80px auto;
    .bangding{
      color: #fff;
      background-color: #51aa38;
    }
    .yanzheng{
      display: block;
      width: 170px;
      height: 50px;
      background-color: #f2f2f2;
      font-size: 26px;
      line-height: 50px;
      text-align: center;
      color: #666;
      border-radius: 30px;
    }
  }
</style>
