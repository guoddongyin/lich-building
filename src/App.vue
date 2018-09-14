<template>
  <div id="app">
    <router-view :openid='openid'></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        url:'',//保存链接
        openid:'',//存opid
      }
    },
    watch: {},
    methods: {
      get_info(){
        var openid = 'oX-MQwYTvbFYQUsgAG79VEQKUC6U';
        if(this.$route.query.openId!='' && this.$route.query.openId!=null && this.$route.query.openId!=undefined  ){
          openid=this.$route.query.openId
        }
        var op_id=sessionStorage.getItem("openid");
        if(op_id!='' && op_id!=null && op_id!=undefined){
          openid=op_id
        }
        sessionStorage.setItem("openid",openid);
      },
      mounted() {
        this.get_info()
      },
    },
  }
</script>

<style>
#app {
  margin-top: 0;
}
</style>
