<template>
  <div>
    <mt-swipe class="wz-banner" :auto="3000" ref="mtSwipe"  :continuous="true" @change="handleChange">
      <mt-swipe-item class="slide1" v-for="item in bannerarr"><img :src="item.stick_img" alt=""/></mt-swipe-item>
    </mt-swipe>
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item :id="item.id" v-for="(item,index) in fenlei" :key="index">{{item.name}}</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="items.id" v-for="(items,index) in fenlei" :key="index">
        <div class="qm_box" v-for="item in articlelist" @click="go_deil(item.id)" v-if="items.id==item.class_id">
          <div class="qm_one_box">
            <div class="text_box">
              <p>{{item.title}}</p>
              <span class="textBOx">{{item.sub_title}}</span>
              <span class="times">{{item.updatetime}}</span>
            </div>
            <div class="img_box">
              <img :src=item.img alt="" />
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import { Navbar, TabItem ,Swipe, SwipeItem} from 'mint-ui';
  export default {
    name: "articledel",
    data() {
      return {
        value: '',
        articlelist:[],
        selected: '1',
        fenlei:'',
        check_index:0,	//根据轮播图显示下一页的按钮
        bannerarr:[]//置顶图
      };
    },
    methods: {
      handleChange(index) {
        this.check_index=index
      },
      //获取文章详情
      go_deil : function (id) {
        this.$router.push({path:'/articledel',query:{id:id}})
      },
      //获取文章列表信息
      getarticlelist:function () {
        var that=this;
        var bannerarr=[]
        var datas={}
        that.$fetch('article', datas)
          .then((response) => {
            var articlelist = response.data;
            articlelist.forEach(function(item,index){
              console.log(item)
              if(item.stick==1){
                bannerarr.push(item)
                console.log(bannerarr)
              }
            });
            that.articlelist = articlelist;
            that.bannerarr = bannerarr
          })
      },
      //获取分类
      getfenlei:function () {
        var that=this;
        var datas={}
        that.$fetch('articleclass', datas)
          .then((response) => {
            var fenlei = response.data;
            that.fenlei = fenlei;
          })
      },
    },
    mounted(){
      this.getarticlelist();
      this.getfenlei()
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .wz-banner{
    height: 320px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .qm_box{
    height: auto;
    overflow: hidden;
    padding: 40px 30px;
    border-bottom:1px solid #f2f2f2;
    background-color: #fff;
  }
  .qm_one_box{
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    display: flex;
  }
  .img_box{
    float: left;
    width: 150px;
    height: 130px;
    overflow: hidden;
  }
  .img_box img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .text_box{
    width: 78%;
    padding-right: 10px;
    float: left;
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
    color:#bfbfbf;
  }
  .text_box .textBOx{
    width: 100%;
    padding: 8px 0;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
     -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;
  }
  .text_box .times{
    position: absolute;
  }
</style>
