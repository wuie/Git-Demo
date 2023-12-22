<template>
    <div class="articleBox">
        <img width="200px" alt="文章图片" src="../wenzhang/pic/1.png">
        <h3 align="center">文章标题</h3>
        <button v-on:click="counter +=1">点赞：{{ counter}}</button> 
        <p>浏览量</p>
        <router-link to="article/science/xiangqing">文章详情</router-link>|
    </div>

</template>

<script>
export default{
    name:"articleBox",
    data(){
        return{
            counter:0
    }}
}
</script>

<style scoped>
articleBox{
    background-color: aqua;
    text-align: center;
    display:flex;
    height:300px;
    flex-shrink: 1;
}


</style>