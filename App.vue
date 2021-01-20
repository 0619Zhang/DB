<template>
  <div id="app">
    <!-- 底部 -->
    <div class="footer">
      <myfooter></myfooter>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import footer from '@/components/foot/footer'
export default {
  components:{
    myfooter:footer
  }
}
</script>


<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.12rem;
  }
  a {
    text-decoration: none;
    color:#666;
  }
  li {
    list-style: none;
  }
  
</style>

