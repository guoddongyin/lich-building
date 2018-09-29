<template>
  <div class="page-cell">
    <mt-cell title="头像">
      <div class="touxiang"><img :src="personal.headimgurl" alt="" width="100%" height="100%"/></div>
    </mt-cell>
    <mt-cell title="昵称">
      <span>{{ personal.nickname }}</span>
    </mt-cell>
    <mt-cell title="手机号">
      <span>{{(personal.tel==0||personal.tel==null)?"未绑定":personal.tel}}</span>
    </mt-cell>
    <mt-cell title="地区" is-link>
      <span>{{personal.province}}</span>
    </mt-cell>
    <mt-cell title="详细地址" is-link @click.native="openPrompt">
      <span>{{(personal.address==null || personal.address==0)?"请输入详细地址":personal.address}}</span>
    </mt-cell>
    <mt-cell title="性别" is-link>
      <span>{{personal.sex==2?"女":"男"}}</span>
    </mt-cell>
    <mt-cell title="生日" is-link @click.native="open('picker4')">
      <span>{{(personal.birthday==null || personal.birthday==0)?'请输入生日':personal.birthday}}</span>
    </mt-cell>
    <mt-cell title="解绑会员卡" is-link @click.native="openConfirm">
      <span></span>
    </mt-cell>
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
    data(){
      return {
        value4: null,
        visible4: false,
        personal:[]//用户信息
      };
    },
    mounted(){
      this.getinformation();
      let that = this;
      // 添加返回事件监听
      window.addEventListener("popstate", function(e) {
        console.log(e)
        MessageBox.close(false);
      }, false);
    },
    methods: {
      //获取用户信息
      getinformation:function () {
        var that=this;
        var datas={
        }
        that.$fetch('member', datas)
          .then((response) => {
            var personal = response.data;
            that.personal = personal;
            console.log(personal)
          })
      },
      //解绑会员卡
      openConfirm() {
        console.log(111)
        var that=this;
         if(that.personal.memberstatus==1){
          MessageBox.confirm('', {
            message: '是否确认解绑会员卡?',
            title: '提示',
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {     //确认的回调
              console.log(111)
              var datas = {
                wxid:localStorage.getItem('token')
              }
              that.$fetch('nobind', datas)
                .then((response) => {
                  Toast({
                    message: '解绑成功',
                    position: 'center',
                    duration: 3000
                  });
                })
            }
          }).catch(err => {
            if (err == 'cancel') {     //取消的回调
              console.log(2);
            }
          });
        }
        else{
          MessageBox.alert('', {
            message: '您还未绑定会员卡',
            title: '提示',
          }).then(action => {
          });
        }
      },
      //修改地址
      openPrompt() {
        MessageBox.prompt(' ', '请输入详细地址').then(({ value }) => {
          var that=this;
          if (value) {
            that.personal.address = value
          }
            var datas={
              address:that.personal.address
            }
            that.$post('updateinfo', datas)
              .then((response) => {
              })
        });
      },
      open(picker) {
        this.$refs[picker].open();
      },
     //修改日期
      handleChange(value) {
        var that=this;
        console.log(value)
        var d = new Date(value);
        var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        this.personal.birthday = datetime
        var datas={
          birthday:this.personal.birthday
        }
        that.$fetch('updateinfo', datas)
          .then((response) => {
          })
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    },
    filters: {
    }
  };
</script>
<style type="text/scss">
  @component-namespace page {
    @component msgbox {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
  .touxiang{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    padding: 15px 0;
  }
</style>
