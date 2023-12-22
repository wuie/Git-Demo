<template>
    <div id="tab-bar">
      <slot></slot>
      </div>
  </template>
  
  <script>
  
  export default{
      name:"tabbar",
  }

  </script>
  
  <style scoped>
  #tab-bar{
      display:flex;
      background-color: rgb(127, 255, 212);
    }
   </style>