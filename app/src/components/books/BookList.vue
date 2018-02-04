<template>
    <div>
        
        <h2>Book</h2>
        <h2>Book</h2>
        <h2>Book</h2>
        <h2>Book</h2>
        
    </div>
</template>

<script>
    
    export default {
        mounted:function(){
            this.$store.commit("change",{bgColor:"rgb(139, 121, 14)",title:"Book"});
        }
        
    }
</script>

<style scoped>

</style>