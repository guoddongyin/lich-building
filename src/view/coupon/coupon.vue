<template>
  <div>
  <div>
  <div class="couponlist">
    <p class="shuomin" @click="shiyongsm">
      <img src="../../../static/img/sysm.png" alt="" width="18px"/>使用说明
    </p>
    <div class="coupons" :class="item.Status==1?'coupons':'coupons1'" v-for="item in couponlist">
      <div class="bianhao">编号：{{item.Code}}</div>
      <div class="price">
        <div class="jiage">{{item.Money}}</div>
        <div>
          <p>RMB</p>
          <P class="youhuij">优惠券</P>
          <P>{{item.Activity}}</P>
        </div>
      </div>
    </div>
  </div>
  <mt-button class="bangding" type="default"  size="large" @click="lingqu">领取优惠券</mt-button>
  </div>
  <!--mask-->
  <div class="mask" v-if="status">
    <div class="modal">
      <div>
        <div class="alert_popup-content">
          <div class="close" @click="close">×</div>
          <div class="title">
            <div>使用说明</div>
          </div>
          <ul class="alert_popup_ul">
            <li>
              <i></i>
              <div class="cont">
                1 参与项目经理会的会员或活动期间新办理VIP卡的会员，捆绑了微信会员端。
              </div>
            </li>
            <li>
              <i></i>
              <div class="cont">
                2 领劵之日起，消费1500元（不含电线）以上方可使用，赠送产品不单独配送，不分开配送
              </div>
            </li>
            <li>
              <i></i>
              <div class="cont">
                3 套餐七选一：
                A.大师怡美18L面漆1桶
                B.伟星线管80根+达瓦防水1组（2桶）
                C.顽固水性瓷砖背胶3桶
                D.保利线管100根+进口水管400元
                E.保利线管80根+顽固水性瓷砖背胶2桶
                F.达瓦防水1组（2桶）+顽固水性瓷砖背胶1桶
                G.伟星线管80根+进口水管400元
              </div>
            </li>
            <li>
              <i></i>
              <div class="cont">
                4 有效期，领劵3天后可使用，可使用后3月失效
              </div>
            </li>
            <li>
              <i></i>
              <div class="cont">
                5 本活动最终解释权归力诚建材所有
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { MessageBox , Toast } from 'mint-ui';
	export default {
		name: "coupon",
        data(){
		    return{
          couponlist:[],
          status: false
         }
        },
        mounted(){
		    this.getcardlist();
        },
        methods:{
          shiyongsm : function () {
            this.status=true
          },
          close : function () {
            this.status=false
          },
          lingqu : function() {
            console.log('111')
            var that=this;
            var datas={
              wxid:localStorage.getItem('token')
            }
            that.$fetch('coupo', datas)
              .then((response) => {
              })
          },
		    getcardlist:function () {
		        var that=this;
		        var datas={
            }
          that.$fetch('coupon', datas)
            .then((response) => {
              var data = response.data;
              that.couponlist=data
              console.log(data)
            })
          }
        },
	}
</script>
<style lang="scss" type="text/scss" scoped>
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }
  .modal{
    width: 80%;
    background-color: #fff;
    margin: 20% auto;
    border-radius: 15px;
  }
  .alert_popup-content {
    padding: 50px 25px;
  }
  .close{
    width: 40px;
    height: 40px;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    position: absolute;
    right: 90px;
    top: 160px;
  }
  .title{
    font-size: 40px;
    text-align: center;
    padding-bottom: 10px;
  }
  .alert_popup_ul{
    list-style: none;
  }
  .alert_popup_ul .cont{
    text-indent: 40px;
    line-height: 48px;
    font-size:28px ;
    display: inline;
  }
  i{
    width: 20px;
    height: 20px;
    background-color: #51aa38;
    display: inline-block;
    border-radius: 50%;
  }
  .couponlist{
    width: 90%;
    margin: 45px auto;
    padding-bottom: 100px;
    .coupons{
      width: 100%;
      height: 230px;
      background-image: url("../../../static/img/ljsy.png");
      background-size: 100% 100%;
      margin-top: 30px;
    }
    .coupons1{
      width: 100%;
      height: 230px;
      background-image: url("../../../static/img/yshiy.png");
      background-size: 100% 100%;
      margin-top: 30px;
    }
    .bianhao{
      height: 50px;
      padding-left: 50px;
      line-height: 50px;
      color: #fefefe;
      font-size: 24px;
    }
    .price{
      display: flex;
      align-items: center;
      height: 180px;
      margin-left: 50px;
      .jiage{
        font-size: 123px;
        color: #fefefe;
      }
      p{
        font-size: 24px;
        color: #fff;
        padding-left: 10px;
      }
      .youhuij{
        font-size: 46px;
        color: #fce541;
      }
    }
  }
  .shuomin{
    display: flex;
    align-items: center;
    justify-content:flex-end
  }
  .bangding{
    width: 100%;
    position: fixed;
    bottom: 0;
    color: #fff;
    background-color: #51aa38;
  }
</style>
