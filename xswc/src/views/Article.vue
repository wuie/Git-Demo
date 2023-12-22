<template>
    <div class="article">
    <nav>
      <router-link to="article/science">科普活动</router-link>|
      <router-link to="article/moment">精彩瞬间</router-link>
      <p>请选择你想要查看的部分</p>
    </nav>
    <router-view/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  //精彩专栏
  export default {
    name: 'article',
   
  }
  </script>
  