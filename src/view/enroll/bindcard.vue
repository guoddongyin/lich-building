<template>
  <div class="page-part">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field label="会员卡号" placeholder="请输入会员卡号" ></mt-field>
    <p class="zhuce">注册会员</p>
    <mt-button class="bangding" type="default"  size="large">绑定</mt-button>
  </div>
</template>
<style lang="scss" type="text/scss" scoped>
  .page-part{
    width: 90%;
    margin: 80px auto;
    .zhuce{
      text-align: right;
      color: #808080;
      font-size: 28px;
      padding: 30px 0;
    }
    .bangding{
      color: #fff;
      background-color: #51aa38;
    }
  }
</style>
