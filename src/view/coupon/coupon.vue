
<template>
  <div class="couponlist">
    <p class="shuomin"><img src="../../../static/img/sysm.png" alt="" width="18px"/>使用说明</p>
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
</template>

<script>
	export default {
		name: "coupon",
        data(){
		    return{
                couponlist:[]
            }
        },
        mounted(){
		  this.getcardlist();
        },
        methods:{
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
        }
	}
</script>
<style lang="scss" type="text/scss" scoped>
  .couponlist{
    width: 90%;
    margin: 45px auto;
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
</style>
