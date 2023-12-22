import router from './router';
import router from './assets/normalize.css'

<template>
  <div id="app">
    <nav>
      <router-link to="/">个人中心</router-link> |
      <router-link to="/about">活动</router-link>|
      <router-link to="/notice">公告</router-link>|
      <router-link to="/article">精彩专栏
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aliceblue;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10%;
}

nav a.router-link-exact-active {
  color: #336dd2;
}
</style> 
