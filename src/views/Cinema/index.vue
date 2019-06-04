<template>
    <div class="cinema">
        <Header title='喵喵的影院'></Header>
        <Footer></Footer>
    </div>
</template>

<script>
   import Header from '@/components/Header'
   import Footer from '@/components/TabBar'
    export default {
        name: 'cinema',
        components:{
          Header,
          Footer
        },
        data() {
            return {
                msg:'cinema'
            }
        }
    }
</script>

<style  scoped>
    
</style>
