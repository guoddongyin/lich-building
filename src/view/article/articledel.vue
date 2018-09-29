
<template>
  <div class="del_box">
    <div class="title">{{articledel.title}}</div>
    <div class="time">
      <span class="auther" @click="go_deil">{{articledel.author}}</span>
      <span>
        {{articledel.updatetime}}</span>
      <span>
        阅读量：{{articledel.read_num}}次</span>
    </div>
    <div class="lichenimg"><img :src="articledel.img" alt=""/></div>
    <div class="zuozhe">
      <p>作者 | {{articledel.author}}</p>
      <p style="padding-top: 3px">介绍 | {{articledel.introduce==null?'无':articledel.introduce}}</p>
    </div>
    <div class="qm_del_box" v-html="articledel.content">
    </div>
  </div>
</template>

<script>
  import {  Toast } from 'mint-ui';
  export default {
    name: "articledel",
    data() {
      return {
        value: '',
        articledel:[],
      };
    },
    methods: {
      //
      go_deil : function () {
        this.$router.push({path:'/index',query:{}})
      },
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
            this.initShare(that)
          })
      },
      // 分享初始化
      initShare(tha) {
        let that=tha
        var datas = {
          openid:localStorage.getItem('token'),
          id:this.$route.query.id,
          url:window.location.href
        }
        console.log(datas)
        that.$fetch('shareInfo', datas)
          .then((response) => {
            var jssdklist = response.data.jssdk
            that.jssdklist = jssdklist
            wx.config({
              debug:false,
              appId: that.jssdklist.appId, // 必填，公众号的唯一标识
              timestamp: that.jssdklist.timestamp, // 必填，生成签名的时间戳
              nonceStr: that.jssdklist.nonceStr, // 必填，生成签名的随机串
              signature: that.jssdklist.signature,// 必填，签名，见附录1
              jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
            wx.ready(function () {
              //分享到朋友圈
              wx.onMenuShareTimeline({
                title: that.articledel.title, // 分享标题
                desc:that.articledel.sub_title,
                link: that.jssdklist.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: that.articledel.img, // 分享图标
                success: function () {
                  //Toast('分享成功')
                  // 用户点击了分享后执行的回调函数
                },
              });
              //分享到朋友圈
              wx.onMenuShareAppMessage({
                title: that.articledel.title, // 分享标题
                desc:that.articledel.sub_title,
                link: that.jssdklist.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: that.articledel.img, // 分享图标
                success: function () {
                  // 用户点击了分享后执行的回调函数
                },
              });
            })
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
  .auther{
    padding:10px 0;
    font-size: 30px;
    color: #0580f3;
  }
  .zuozhe{
    font-size: 30px;
    font-weight: 700;
    padding: 20px 0;
    color: #333333;
  }
  .lichenimg{
    height: 280px;
    img{
      width: 100%;
      height: 100%;
    }
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
    font-size: 30px;
    color:#808080;
    padding: 20px 0;
  }
  .time span:nth-child(3){
    /*margin-left: 30px;*/
    display: inline-block;
    float: right;
  }
</style>
