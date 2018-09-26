<template>
  <div id="app">
    <router-view v-wechat-title="$route.name"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        url:'',//保存链接
        jssdklist:[]
      }
    },
    mounted(){
      //this.initShare();
    },
    methods: {

    },
    watch: {
      $route(to) {
        var  token= this.$route.query.token;
        if(token){
          localStorage.setItem('token',token)
        }
      }
    }
  }
</script>

<style>
#app {
  margin-top: 0;
}
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  max-width: 1200px;
  height: 100%;
  margin: auto;

}
</style>
