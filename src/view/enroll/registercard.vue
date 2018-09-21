<template>
  <div class="page-part">
    <mt-field label="姓名" placeholder="请输入姓名"  v-model="remark"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
    <mt-field label="验证码" placeholder="输入验证码" v-model="yzm" style="margin-bottom: 30px">
      <span class="yanzheng" v-if="!isSend" @click="sendcode">发送验证码</span>
      <span class="yanzheng" v-if="isSend">{{ times }}秒后获取</span>
    </mt-field>
    <mt-button class="bangding" type="default"  size="large" @click="registeruser">注册</mt-button>
  </div>
</template>
<script>
  import { Indicator, Toast } from 'mint-ui';
  export default {
    name: "",
    data(){
      return{
        tel:'',   //电话号码
        remark:'',   //名字
        yzm:'',   //验证码
        times:60,   //倒计时
        isSend: false ,       //是否已发送短信
        code:''
      }
    },
    mounted(){

    },
    methods:{
      sendcode:function () {
        var that=this;
        var datas={
          tel:that.tel,
        }
        let pReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (that.tel === '') {
          Toast('请输入手机号')
        }else if(pReg.test(that.tel) === false){
          Toast('手机号不正确')
        } else {
          that.$post('sendyzm', datas)
            .then((response) => {
              console.log(response.data)
              var code = response.data.yzm ;
              console.log(code)
              that.code = code
              that.isSend = true;
              let interval = window.setInterval(function () {
                if ((that.times--) <= 1) {
                  that.times = 60;
                  that.isSend = false;
                  window.clearInterval(interval);
                }
              }, 1000);
            })
        }
      },
      registeruser:function () {
        var that=this;
        var datas={
          tel:that.tel,
          remark:that.remark,
          yzm:that.yzm
        }
        console.log(datas)
        if(that.tel == ''){
          Toast('电话号码不能为空')
        }else if(that.remark == ''){
          Toast('姓名不能为空')
        }else if( that.yzm == ''){
          Toast('验证码不能为空')
        }
        else if(that.yzm!=that.code){
          Toast('验证码不正确')
        }else{
          that.$post('register', datas)
            .then((response) => {
              that.$router.push({path:'/index'})
            })
        }
      }
    }
  }
</script>
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
