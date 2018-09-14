<template>
  <div class="page-cell" style="margin-top: 10px">
    <mt-cell title="头像">
      <div class="touxiang"><img :src="personal.headimgurl" alt="" width="100%" height="100%"/></div>
    </mt-cell>
    <mt-cell title="昵称" is-link>
      <span>{{ personal.nickname }}</span>
    </mt-cell>
    <mt-cell title="手机号">
      <span>{{ personal.tel==null?"未填写":personal.tel}}</span>
    </mt-cell>
    <mt-cell title="地区" is-link>
      <span>{{personal.province}}</span>
    </mt-cell>
    <mt-cell title="详细地址" is-link @click.native="openPrompt">
      <span>{{personal.address}}</span>
    </mt-cell>
    <mt-cell title="性别" is-link>
      <span>{{personal.sex==2?"女":"男"}}</span>
    </mt-cell>
    <mt-cell title="生日" is-link @click.native="open('picker4')">
      <span>{{personal.birthday}}</span>
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
      openConfirm() {
        MessageBox.confirm('是否确认解绑会员卡?', '提示');
      },
      openPrompt() {
        MessageBox.prompt(' ', '请输入详细地址').then(({ value }) => {
          if (value) {
            MessageBox.alert(`你的详细地址是 ${ value }`, '输入成功');
          }
        });
      },
      open(picker) {
        this.$refs[picker].open();
      },

      handleChange(value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    },
    filters: {
      text(s) {
        return s === '' || s === 'null' ? '未填写' : s
      },
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
  }
</style>
