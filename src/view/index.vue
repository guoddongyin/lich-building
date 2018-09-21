
<template>
  <div>
    <div :class="member.memberstatus==0?'index':oneinfo.MemberType=='零售客户'?'index1':'index2'" v-if="statu">
      <div class="touxiang" @click="()=>{this.$router.push({path:'/information',query:{}})}">
        <img :src="member.headimgurl" alt=""/></div>
      <div class="name">
        <div class="mingzi">{{member.nickname}}</div>
        <div class="bangdin" v-if="member.memberstatus!=1" @click="gotobangd">点击绑定会员卡</div>
        <div class="bangdin" v-else @click="()=>{this.$router.push({path:'/memberinfo',query:{}})}">{{oneinfo.MemberCard}}</div>
      </div>
      <div class="bangdin1" v-if="member.memberstatus==1">{{oneinfo.MemberType}}</div>
      <div class="jifenn">
        <div class="jifen">
          <p class="title">已使用积分</p>
          <p class="shuzi">{{oneinfo.SYJF==null?0:oneinfo.SYJF}}</p>
        </div>
        <div class="jifen">
          <p class="title">本月可用积分</p>
          <p class="shuzi">{{oneinfo.KYJF==null?0:oneinfo.KYJF}}</p>
        </div>
      </div>
    </div>
  <div :style="!statu ? 'padding-top: 170px' : ''" >
    <div class="we-title">我的工具</div>
    <div class="weui-grids">
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/coupon',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-yhj.png" alt="">
        </div>
        <p class="weui-grid__label">
          我的优惠券
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/integral-detail',query:{memberCard:oneinfo.MemberCard}})}" v-if="member.memberstatus!=0">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-jf.png" alt="">
        </div>
        <p class="weui-grid__label">
          积分明细
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/reportlist',query:{}})}" v-if="member.memberstatus!=0">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-dingdan.png" alt="">
        </div>
        <p class="weui-grid__label">
          我的订单
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/daichuhuo',query:{}})}" v-if="member.memberstatus!=0">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-dch.png" alt="">
        </div>
        <p class="weui-grid__label">
          待出货
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/daifukuan',query:{}})}" v-if="member.memberstatus!=0">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-dfk.png" alt="">
        </div>
        <p class="weui-grid__label">
          待付款
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/brandprop',query:{}})}" v-if="member.memberstatus!=0">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-pingp.png" alt="">
        </div>
        <p class="weui-grid__label">
          品牌占比
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/integralprop',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-jfbl.png" alt="">
        </div>
        <p class="weui-grid__label">
          积分比例指导
        </p>
      </div>
      <div class="weui-grid js_grid" @click="()=>{this.$router.push({path:'/articlelist',query:{}})}">
        <div class="weui-grid__icon">
          <img src="../../static/img/wenz.png" alt="">
        </div>
        <p class="weui-grid__label">
          推广文章
        </p>
      </div>
      <div class="weui-grid js_grid" @click="openConfirm" v-if="member.memberstatus!=0">
        <div class="weui-grid__icon">
          <img src="../../static/img/icon-xinyun.png" alt="">
        </div>
        <p class="weui-grid__label">
            幸运大抽奖
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import { MessageBox , Toast , Indicator } from 'mint-ui';
  export default {
    name: "index",
    data() {
      return {
        member:[],//会员信息
        oneinfo:[],//会员信息
        statu:false
      }
    },
    mounted(){
      this.getinfoList();
      this.getmemberList();
    },
    methods: {
        gotobangd:function () {
            this.$router.push({path:'/bindcard'})
        },
      //请求会员信息列表
      getinfoList() {
        var that=this;
        var datas={
        }
        that.$fetch('oneinfo', datas)
          .then((response) => {
            that.statu = true
            var oneinfo = response.data;
            if(oneinfo){
                that.oneinfo = oneinfo;
            }else {
                //
            }
            console.log(oneinfo)
          })
      },

      getmemberList() {
          var that=this;
          var datas={
          }
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
          that.$fetch('member', datas)
              .then((response) => {
                Indicator.close()
                  var member = response.data;
                  that.member = member;
              })
      },
      //提示正在开发中
      openConfirm : function () {
        Toast('该功能正在开发中!')
      }
  },
    created() {

    },
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .index{
    width:690px;
    height:380px;
    margin: auto;
    position: relative;
    background: url("../../static/img/puton.png");
    background-size: 100% 100%;
    .bangdin1{
      font-size: 24px;
      position: absolute;
      top: 40px;
      right: 40px;
      color: #333;
    }
    .touxiang{
      width: 150px;
      height: 150px;
      padding: 50px 40px;
      img{
        width: 100%;
        border-radius:50%
      }
    }
    .jifenn{
      position: absolute;
      bottom: 50px;
      left: 0;
      width: 100%;
      .jifen{
        width: 50%;
        text-align: center;
        float: left;
        .shuzi{
          color: #333;
          font-size: 34px;
        }
        .title{
          font-size: 22px;
          color: #333;
        }
        p{
          display: block;
        }
      }
    }
    .name{
      width: auto;
      text-align: left;
      position: absolute;
      top: 80px;
      left: 200px;
      color: #333;
    }
    .mingzi{
      font-size: 34px;
    }
    .bangdin{
      font-size: 24px;
      margin-top: 10px
    }
    .jifen{
      width: 100%;
      .jifn{
        width: 50%;
      }
    }

  }
  .index1{
     width:690px;
     height:380px;
     margin: auto;
     background: url("../../static/img/heika.png");
     background-size: 100% 100%;
     position: relative;
    .bangdin1{
      font-size: 24px;
      position: absolute;
      top: 40px;
      right: 40px;
      background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#eea76e), to(#ffdba9));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
     .touxiang{
       width: 150px;
       height: 150px;
       padding: 50px 40px;
       img{
         width: 100%;
         border-radius:50%
       }
     }
     .jifenn{
       position: absolute;
       bottom: 50px;
       left: 0;
       width: 100%;
       .jifen{
         width: 50%;
         text-align: center;
         float: left;
         .shuzi{
           background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#eea76e), to(#ffdba9));
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           font-size: 34px;
         }
         .title{
           font-size: 22px;
           background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#eea76e), to(#ffdba9));
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
         }
         p{
           display: block;
         }
       }
     }
     .name{
       width: auto;
       text-align: left;
       position: absolute;
       top: 80px;
       left: 200px;
       background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#eea76e), to(#ffdba9));
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
     }
    .mingzi{
      font-size: 34px;
    }
     .bangdin{
       font-size: 24px;
       margin-top: 10px
     }
     .jifen{
       width: 100%;
       .jifn{
         width: 50%;
       }
     }

   }
  .index2{
    width:690px;
    height:380px;
    margin: auto;
    position: relative;
    background: url("../../static/img/jinka.png");
    background-size: 100% 100%;
    .bangdin1{
      font-size: 24px;
      position: absolute;
      top: 40px;
      right: 40px;
      background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#4e3623), to(#69512e));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .touxiang{
      width: 150px;
      height: 150px;
      padding: 50px 40px;
      img{
        width: 100%;
        border-radius:50%
      }
    }
    .jifenn{
      position: absolute;
      bottom: 50px;
      left: 0;
      width: 100%;
      .jifen{
        width: 50%;
        text-align: center;
        float: left;
        .shuzi{
          background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#4e3623), to(#69512e));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 34px;
        }
        .title{
          font-size: 22px;
          background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#4e3623), to(#69512e));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p{
          display: block;
        }
      }
    }
    .name{
      width: auto;
      text-align: left;
      font-size: 34px;
      position: absolute;
      top: 80px;
      left: 200px;
      background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#4e3623), to(#69512e));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .mingzi{
      font-size: 34px;
    }
    .bangdin{
      font-size: 24px;
      margin-top: 10px
    }
    .jifen{
      width: 100%;
      .jifn{
        width: 50%;
      }
    }

  }
  .we-title{
    text-align: left;
    color: #333333;
    font-size: 34px;
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





