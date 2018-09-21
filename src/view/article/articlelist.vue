<template>
  <div>
    <div class="qm_box" v-for="item in articlelist" @click="go_deil(item.id)">
      <div class="qm_one_box">
        <div class="text_box">
          <p>{{item.title}}</p>
          <span class="textBOx">{{item.sub_title}}</span>
          <span class="times">{{item.updatetime}}</span>
        </div>
        <div class="img_box">
          <img src="../../../static/img/listBig_img.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "articledel",
    data() {
      return {
        value: '',
        articlelist:[],
      };
    },
    methods: {
      //获取文章详情
      go_deil : function (id) {
        this.$router.push({path:'/articledel',query:{id:id}})
      },
      //获取文章列表信息
      getarticlelist:function () {
        var that=this;
        var datas={}
        that.$fetch('article', datas)
          .then((response) => {
            var articlelist = response.data;
            // articlelist.forEach(function(item,index){
            // });
            that.articlelist = articlelist;
          })
      },

    },
    mounted(){
      this.getarticlelist();
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .qm_box{
    width: 98%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    border-bottom:1px solid #f2f2f2;
  }
  .qm_one_box{
    width: 100%;
    height:200px;
    padding: 10px 0;
    overflow: hidden;
    position: relative;
  }
  .img_box{
    float: left;
    width: 36%;
    height: 200px;
    overflow: hidden;
  }
  .img_box img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .text_box{
    width: 60%;
    float: right;
  }
  .text_box p{
    font-size:30px;
    color:#333;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .text_box span{
    display: inline-block;
    font-size: 26px;
    margin-top: .5rem;
    color:#bfbfbf;
  }
  .text_box .textBOx{
    width: 100%;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .text_box .times{
    position: absolute;
    bottom: 16px;
  }

</style>
