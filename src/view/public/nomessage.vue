
<template>
  <div class="nomes-content">
    <div class="nomes">
      <img src='../../../static/img/nosj.png'></img>
    </div>
    <div class='zhu'>暂无数据</div>
  </div>
</template>

<script>
	export default {
		name: "nomessage"
	}
</script>
<style lang="scss" type="text/scss" scoped>
  .nomes-content{
    width: 400px;
    height:400px;
    margin: auto;
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
</style>
