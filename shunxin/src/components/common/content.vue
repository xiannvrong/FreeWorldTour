<template>
    <div class="contentWrap"> 
        <router-view class="contentview"></router-view>
        <!-- <Footer /> -->
    </div>
  </template>
  <script>
    // 底部
// import Footer from '../../components/common/footer/footer' 
export default { 
  data() {
    return {
      nowIndex: 0,
    }
  } 
}
</script>
<style scoped> 
  .contentWrap{ 
    min-height:100%; 
    width: 100%;
    position: absolute;
    left: 0;
    top: 0; 
  }
  .contentview{
    min-height: 100%; 
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
