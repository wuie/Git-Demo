<template>
  <div class="home">
 <a>个人中心</a>
 <div class="private">
  <em>个人信息</em>
  <hr size="5px" width="1000px" color="blue">
    <table class="mytable" border="1">
      <tr>
        <td>头像</td>
        <td>姓名</td>
        <td>学院</td>
        <td>学号</td>
        <td>用户名</td>
        <td>电话</td>


      </tr>
      <tr>
        <td><img width="200px" alt="文章图片" src="./wenzhang/pic/1.png"></td>
        <td>张一</td>
        <td>信息学院</td>
        <td>20223512231</td>
        <td>zhangyi</td>
        <td>12334433221</td>

      </tr>
    </table>

 </div>
  </div>
</template>

<script>
//个人中心

export default {
  name: 'home',
 
}
</script>

<style>
.home{
  height: 3000px;
  background-color: beige;
}
.private{
  background-color: rgb(204, 248, 248);
}
.mytable{
  background-color: antiquewhite;
  height:100px;
  border:1px;
   width:1300px; 
   height:"20px";
 
}
</style>