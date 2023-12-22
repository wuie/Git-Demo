<template>
    <div class="tab-bar-item">
        <slot></slot>
    </div>
    </template>
    
    <script>
        export default{
            name: "TabBarItem",
        }
    </script>
    
    <style scoped>
     .tab-bar-item{
        top: 0;
        left: 0;
        right: 0;
        flex:1;
        text-align: center;
        height:49px;
        box-shadow: 0px 10px 10px rgb(60, 96, 60,.8);
      }
    </style>