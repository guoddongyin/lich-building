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
      }
    },
    methods: {

    },
      watch: {
          $route(to) {
              var   token= this.$route.query.token;
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
</style>
