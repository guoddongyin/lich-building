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
      <div class="jifen">日期</div>
      <div class="jifen">单据号</div>
      <div class="jifen">金额</div>
    </div>
    <div class="nomes-content" v-if="reportlist.length==0">
      <div class="nomes">
        <img src='../../../static/img/nosj.png'></img>
      </div>
      <div class='zhu'>暂无订单信息</div>
    </div>
    <div class="integral-detail" v-for="item in reportlist" v-else>
      <div class="jifen">{{item.time}}</div>
      <div class="jifen">{{item.code}}</div>
      <div class="jifen">{{item.price}}</div>
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
        ],
        reportlist:[],
        //time:''
      };
    },
    methods: {
      //获取用户信息
      getreportlist:function () {
        var that=this;
        var datas={

        }
        that.$fetch('orderinfo', datas)
          .then((response) => {
            var reportlist = response.data;
            console.log(reportlist)
            reportlist.forEach(function(item,index){
              console.log(item);

            });
            that.reportlist = reportlist;
          })
      },

    },
    mounted(){
      this.getreportlist();
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  };
</script>

<style lang="scss" scoped>
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
