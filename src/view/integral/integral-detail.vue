<template>
    <div>
        <div class="integral-title1">
            <div class="jifen">
                <p class="title">已使用积分</p>
                <p class="shuzi">{{useroneinfo.SYJF==null?0:useroneinfo.SYJF}}</p>
            </div>
            <div class="jifen">
                <p class="title">本月可用积分</p>
                <p class="shuzi">{{useroneinfo.KYJF==null?0:useroneinfo.KYJF}}</p>
            </div>
            <div class="jifen">
                <p class="title">总积分</p>
                <p class="shuzi">{{useroneinfo.TotalJF==null?0:useroneinfo.TotalJF}}</p>
            </div>
        </div>
        <div class="we-title">积分明细</div>
        <div>
          <div class="nomes-content" v-if="jflslist.length==0&&statu">
            <div class="nomes">
              <img src='../../../static/img/nosj.png'></img>
            </div>
            <div class='zhu'>暂无积分明细</div>
          </div>
          <mt-cell v-else :title="item.jftype" :label="item.createdate" v-for="(item,index) in jflslist"  :key="index" v-else>
            <span style="color: #eb4f4f">{{item.jf}}</span>
          </mt-cell>
          <!--<p v-show="loading" class="page-infinite-loading">-->
            <!--<mt-spinner type="fading-circle"></mt-spinner>-->
            <!--加载中...-->
          <!--</p>-->
        </div>
    </div>
</template>

<script>
  import { InfiniteScroll } from 'mint-ui';
    export default {
        name: 'page-search',
        data() {
            return {
                value: '',
                useroneinfo: '',
                jflslist:[],//积分数据列表
                statu:false,//
                // loading: false,
                // allLoaded: false,
                // wrapperHeight: 0
            };
        },
        mounted() {
          this.getuserinfo();
          this.getjflslist();
          // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
          for (let i = 1; i <= 20; i++) {
            this.jflslist.push(i);
          }
        },
        methods: {
          // loadMore() {
          //   this.loading = true;
          //   setTimeout(() => {
          //     let last = this.jflslist[this.jflslist.length - 1];
          //     for (let i = 1; i <= 10; i++) {
          //       this.jflslist.push(last + i);
          //     }
          //     this.loading = false;
          //   }, 2500);
          // },
            getuserinfo: function () {
              var that = this;
              var datas = {}
              that.$fetch('oneinfo', datas)
                .then((response) => {
                  that.statu = true
                  var data = response.data;
                  that.useroneinfo = data
                })
            },
            getjflslist:function () {
              var that = this;
              var memberCard = that.$route.query.memberCard;
              var datas = {
                memberCard:memberCard
              }
              that.$fetch('jfls', datas)
                .then((response) => {
                  var data = response.data ;
                  that.jflslist = data;
                  for(var i in that.jflslist){
                    if(parseFloat(that.jflslist[i].jf)>0){
                      that.jflslist[i].jf='+'+that.jflslist[i].jf
                    }
                  }
                })
            }
        },
        computed: {
        }
    };
</script>

<style lang="scss" scoped>
  @component-namespace page {
    @component infinite {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
      }

      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }

      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;

        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
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
        background: url("../../../static/img/neirong1_02.png");
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
              position: static;
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
      padding: 30px;
      background-color: #fff;
    }

</style>


