
<template>
  <div class="del_box">
    <div class="title">{{articledel.title}}</div>
    <div class="time">
      <span>{{articledel.updatetime}}</span>
      <!--<span>阅读量：{{articledel.title}}次</span>-->
    </div>
    <div class="qm_del_box" v-html="articledel.content">
      <!--{{articledel.content}}-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "articledel",
    data() {
      return {
        value: '',
        articledel:[],
      };
    },
    methods: {
      //获取文章列表信息
      getarticledel:function () {
        var that=this;
        var id = this.$route.query.id;
        var datas={
          id : id
        }
        that.$fetch('articleDetial', datas)
          .then((response) => {
            var articledel = response.data;
            that.articledel = articledel;
          })
      },

    },
    mounted(){
      this.getarticledel();
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .del_box{
    padding: 20px;
  }
  .qm_del_box{
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-top: 15px;
    font-size: 30px;
    img{
      width: 100%;
    }
  }
  .title{
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-top: 15px;
    font-size:38px;
  }
  .time{
    font-size: 26px;
    color:#808080;
    padding-top: 15px;
  }
  .time span:nth-child(2){
    margin-left: 15px;
  }
</style>
