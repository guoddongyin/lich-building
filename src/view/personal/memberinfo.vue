<template>
  <div>
    <div class="integral-title1">
      <div class="jifen">
        <p class="title">会员卡号</p>
        <p class="shuzi">{{oneinfo.MemberCard}}</p>
      </div>
    </div>
    <div>
      <mt-cell title="总积分">
        <span style="color: #eb4f4f">{{oneinfo.TotalJF}}</span>
      </mt-cell>
      <mt-cell title="本月可用积分">
        <span style="color: #eb4f4f">{{oneinfo.KYJF}}</span>
      </mt-cell>
      <mt-cell title="暂不可用积分">
        <span style="color: #eb4f4f">{{oneinfo.XYJF}}</span>
      </mt-cell>
      <mt-cell title="未付金额">
        <span style="color: #eb4f4f">{{oneinfo.weifu}}元</span>
      </mt-cell>
      <mt-cell title=待出货金额>
        <span style="color: #eb4f4f">{{oneinfo.weichuhuo}}元</span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-search',
    data() {
      return {
        value: '',
         oneinfo: '',
      };
    },
    mounted() {
       this.getinfoList();
    },
    methods: {
      //请求会员信息列表
      getinfoList() {
        var that=this;
        var datas={
        }
        that.$fetch('oneinfo', datas)
          .then((response) => {
            var oneinfo = response.data;
            if(oneinfo){
              that.oneinfo = oneinfo;

            }else {
              //
            }
            console.log(oneinfo)
          })
      },
    },
    computed: {
    }
  };
</script>

<style lang="scss" scoped>
  .page-search {
    height: 100%;
  }
  .nomes-content{
    width: 400px;
    height:400px;
    margin: auto;
    text-align: center;
  }
  .nomes{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    img{
      width: 100%;
      height: 100%;
      padding-top: 100px;
    }
    .zhu{
      text-align: center;
    }
  }
  .integral-title1 {
    width: 100%;
    height: 230px;
    background: url("../../../static/img/bjjg.png");
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 28px;
    color: #333;
    .jifen {
      width: 33.33333%;
      color: #fff;
      .title {
        font-size: 30px;
        padding-bottom: 10px;
      }
      .shuzi {
        font-size: 36px;
      }
    }
  }
  .we-title {
    text-align: left;
    color: #333333;
    font-size: 34px;
    width: 140px;
    padding: 30px;
  }

</style>
