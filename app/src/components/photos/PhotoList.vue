<template>
    <div>
        
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
      
    </div>
</template>

<script>
    
    export default {
        mounted:function(){
            this.$store.commit("change",{bgColor:"rgb(32, 200, 32)",title:"Photo"});
        }
        
    }
</script>

<style scoped>

</style>