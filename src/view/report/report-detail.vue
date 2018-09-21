<template>
  <div class="page-cell">
    <mt-cell title="下单时间">
      <span>{{reportdellist.CreateDate}}</span>
    </mt-cell>
    <mt-cell title="单据号">
      <span>{{reportdellist.Code}}</span>
    </mt-cell>
    <mt-cell title="金额" is-link>
      <span style="color: #eb4f4f">{{reportdellist.TrueAmount}}</span>
    </mt-cell>
    <mt-cell title="欠款">
      <span style="color: #eb4f4f">{{reportdellist.weifu}}</span>
    </mt-cell>
    <mt-cell title="下单人">
      <span>{{reportdellist.CreateUserName}}</span>
    </mt-cell>
    <mt-cell title="地址">
      <span>{{reportdellist.Address}}</span>
    </mt-cell>
    <mt-cell title="备注">
      <span>{{reportdellist.Comments==0?'无':reportdellist.Comments}}</span>
    </mt-cell>
    <mt-cell title="出货状态">
      <span>{{reportdellist.chuhuo_status}}</span>
    </mt-cell>
  </div>
</template>

<script>
  export default {
    // name: 'page-search',
    data() {
      return {
        reportdellist:[],
      };
    },
    mounted(){
      this.getreportdel();
    },
    methods: {
      //获取详情信息页面
      getreportdel : function () {
        var that=this;
        var ids = this.$route.query.id;
        var datas={
          wxid:localStorage.getItem('token'),
          ids:ids
        }
        that.$fetch('orderinfoDetail', datas)
          .then((response) => {
            var reportdellist = response.data;
            console.log(reportdellist)
            that.reportdellist = reportdellist;
          })
      },
    },

    computed: {
    }
  };
</script>
<style lang="scss" type="text/scss" scoped>

</style>
