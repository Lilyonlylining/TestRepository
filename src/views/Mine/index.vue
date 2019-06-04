<template>
    <div class="cinema">
        <Header title='我的喵喵'></Header>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/TabBar'
    export default {
        name: '',
        components:{
          Header,
          Footer
        },                 
        data() {
            return {
                msg:'mine'
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>
