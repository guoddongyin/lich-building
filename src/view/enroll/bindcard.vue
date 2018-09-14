<template>
  <div class="page-part">
    <mt-field label="手机号" placeholder="请输入手机号" v-model="tel" type="tel"></mt-field>
    <mt-field label="会员卡号" placeholder="请输入会员卡号" v-model="membercard" ></mt-field>
    <p class="zhuce" @click="gotouser">注册会员</p>
    <mt-button class="bangding" type="default" @click="getbindcard" size="large">绑定</mt-button>
  </div>
</template>
<script>
    export default {
        name: "coupon",
        data(){
            return{
                tel:'',
                membercard:''
            }
        },
        mounted(){

        },
        methods:{
            gotouser:function () {
                // this.$router.push({path:'/registercard'})
            },
            getbindcard:function () {
                var that=this;
                var datas={
                    tel:this.tel,
                    membercard:this.membercard,
                }
                that.$post('bindMembership', datas)
                    .then((response) => {
                        that.$router.push({path:'/index'})
                    })

            }
        }
    }
</script>
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
