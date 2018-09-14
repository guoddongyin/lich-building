<template>
    <div class="startpage">
        <!--<img src="/static/img/startpage.png" alt="">-->
    </div>
</template>

<script>
    import global_  from '../../api/globalVariable';
    export default {
        name: "start-page",
        mounted(){
           var  urlink = window.localStorage.getItem('urlink');
            setTimeout(function () {
                window.location.href = global_.apiUrl+'login?router='+urlink;
            },3000)
        }
    }
</script>

<style scoped>
    .startpage{
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .startpage img{
        width: 100%;
        display: block;
        min-height: 100%;
    }

</style>