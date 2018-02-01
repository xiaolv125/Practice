<template>
    <div>
        <h3>哈喽 艾瑞芭嘚！</h3>
        <router-link to='/subTest1/'>subTest1</router-link>
        <router-link to='/subTest2/'>subTest2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    h3{
        color: red;
    }
</style>