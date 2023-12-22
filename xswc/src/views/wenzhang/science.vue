<template>
    <div class="science">
      <div class="ull"> 
            <div class="lii">
                <articleBox></articleBox>
            </div >
            <div class='lii'>
                <articleBox></articleBox>
            </div>
            <div class='lii'>
              <articleBox></articleBox>
            </div>
            <div class='lii'>
              <articleBox></articleBox>
            </div>
            <div class='lii'>
               <articleBox></articleBox>
            </div>
        </div>
    </div>
  </template>
  
  
  <script>
  //活动
  import articleBox from './articleBox.vue'
  export default {
      name: "science",
      components: { articleBox },
      data() {
          return {
          }
      }
  }
  </script>
    
  <style>
  .ull{
      width:1800px;
      height:1000px;
      background-color:rgb(219, 242, 232);
      display:flex;
      flex-flow:row wrap;
      align-content:flex-start;
     
  }
  .lii{
      box-sizing:border-box;
      background-color:rgb(222, 218, 252);
      flex:0 0 25%;
      height:300px;
      border:5px solid rgb(201, 201, 238);
  }
  </style>