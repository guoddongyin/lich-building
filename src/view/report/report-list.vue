<template>
  <div>
    <div class="page-sear">
      <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
    </div>
    <div class="integral-title">
      <div class="shijian"><input type="date" placeholder="下单起止时间"/></div>
      <div class="shijian"><input type="date" placeholder="下单结束时间"/></div>
      <div class="chaxun"><mt-button type="default">查询</mt-button></div>
    </div>
    <div class="integral-title">
      <div class="jifen">积分级别</div>
      <div class="jifen">品牌</div>
      <div class="jifen">品牌</div>
    </div>
    <div class="integral-detail">
      <div class="jifen">2018-08-01</div>
      <div class="jifen">AB2132134</div>
      <div class="jifen">1992元</div>
    </div>
    <div class="integral-detail">
      <div class="jifen">2018-08-01</div>
      <div class="jifen">AB2132134</div>
      <div class="jifen">1992元</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-search',

    data() {
      return {
        value: '',
        defaultResult: [
          'Apple',
          'Banana',

        ]
      };
    },

    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  };
</script>

<style lang="scss" scoped>
  .page-search {
    height: 100%;
  }
  .integral-title {
    width: 100%;
    height: 90px;
    background-color: #f2f2f2;
    display: flex;
    line-height: 90px;
    text-align: center;
    font-size: 28px;
    color: #333;
    .jifen {
      width: 33.33333%;
    }
    .shijian {
      width: 40%;
      input{
        width: 90%;
        height: 80px;
        background-color: #fff;
        border: 0;
        border-radius: 10px;
      }

    }
    .chaxun{
      width:20% ;
      button{
        height: 80px;
        background-color: #51aa38;
        color: #fff;
        text-align: right;
        font-size: 28px;
      }
    }
  }
  .integral-detail{
    background-color: #fff;
    width: 100%;
    display: flex;
    line-height: 90px;
    text-align: center;
    font-size: 28px;
    color: #333;
    .jifen{
      width: 33.33333%;
    }
  }
</style>
