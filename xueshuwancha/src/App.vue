
<template>
  <div id="app">
  <tab-bar>
    <tab-bar-item><div >公告</div></tab-bar-item>
    <tab-bar-item><div>个人中心</div></tab-bar-item>
    <tab-bar-item><div>活动</div></tab-bar-item>
    <tab-bar-item><div>精彩专栏</div></tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
  export default{
    name:'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>


<style>
@import "./assets/css/base.css";

</style>
