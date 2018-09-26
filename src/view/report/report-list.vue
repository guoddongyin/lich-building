<template>
  <div>
    <div class="page-sear">
      <mt-search autofocus v-model="value" :result="filterResult" placeholder="搜索单据号"></mt-search>
    </div>
    <div class="integral-title">

      <div class="shijian"><input  placeholder="下单开始时间"/></div>
      <div class="shijian"><input  placeholder="下单结束时间"/></div>
      <div class="chaxun"><mt-button type="default">查询</mt-button></div>
    </div>
    <div class="integral-title">
      <div class="jifen">日期</div>
      <div class="jifen">单据号</div>
      <div class="jifen">金额</div>
    </div>
    <div class="nomes-content" v-if="reportlist.length==0&&statu">
      <div class="nomes">
        <img src='/static/img/nosj.png'></img>
      </div>
      <div class='zhu'>暂无订单信息</div>
    </div>
    <div class="integral-detail" v-for="item in reportlist" @click="go_deil(item.ids)">
      <div class="jifen">{{item.time}}</div>
      <div class="jifen">{{item.code}}</div>
      <div class="jifen">{{item.price}}</div>
    </div>
    <mt-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import { MessageBox , Toast } from 'mint-ui';
  export default {
    name: 'page-search',

    data() {
      return {
        value: '',
        defaultResult: [
          'Apple',
          'Banana',
        ],
        statu:false,
        reportlist:[],
        value4: null,
        visible4: false,
      };
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      //跳转详情页面
      go_deil : function (id) {
        this.$router.push({path:'/report-detail',query:{id:id}})
      },
      //获取订单信息
      getreportlist:function () {
        var that=this;
        var datas={
          // wxid:localStorage.getItem('token')
        }
        that.$fetch('orderinfo', datas)
          .then((response) => {
            that.statu = true;
            var reportlist = response.data;
            that.reportlist = reportlist;
          })
      },
      //修改日期
      handleChange(value) {
        var that=this;
        console.log(value)
        // var d = new Date(value);
        // var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        // this.personal.birthday = datetime
        // var datas={
        //   birthday:this.personal.birthday
        // }
        // that.$fetch('updateinfo', datas)
        //   .then((response) => {
        //   })
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }

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

<style lang="scss" type="text/scss" >
  @component-namespace page {
    @component msgbox {
      @descendent wrapper {
        padding: 0 20px;
        /*<!--position: absolute 50% * * *;-->*/
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
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
