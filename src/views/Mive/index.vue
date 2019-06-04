<template>
    <div class="cinema">
       <Header title='喵喵的电影'></Header>
         <div class="content">
        
           <div class="menu_movie">
               
               <ul class="hot_switch">
                   <router-link  tag='li' class="city_name" to='/mive/city'>
                        <i class="iconfont icon-dingwei"></i>
                       定位
                   </router-link>
                   <router-link tag='li' to='/mive/isplaying'>正在热映</router-link>
                   <router-link tag='li' to='/mive/comingplay'>即将热映</router-link>
                   <router-link tag='li' to='/mive/search'>
                       <i class="iconfont icon-xiazai17 icon_search"></i>
                   </router-link>
               </ul>
               
           </div>
            <keep-alive>
                  <router-view/>
            </keep-alive>
             


         </div>
         
       <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/TabBar'
    export default {
        name: 'mive',
        components:{
          Header,
          Footer
        },
        data() {
            return {
                

            }
        },
        methods:{
            // location(){
            //     this.$router.push('/mive/city')
            // }
        }
    }
</script>

<style  scoped>
  .cinema .menu_movie{
      display: flex;
     
  }
  .cinema .menu_movie .city_name{
     display: flex;
     align-items: center;
  }
  .cinema .menu_movie .hot_switch{
      display: flex;
      justify-content: space-around;
      align-items: center;     
      list-style: none;
      width: 100%;
  }
  .cinema .menu_movie .hot_switch li{
        padding: .2rem .4rem;
  }
  .cinema .menu_movie .hot_switch li.router-link-active{
      position: relative;
  }
  .cinema .menu_movie .hot_switch li.router-link-active::after{
      position: absolute;
      content: '';
      width: 100%;
      left: 0px;
      bottom: 0px;
      height: 3px;
      background-color: #e54847;
  }
  .content{
      font-size:.4rem;
  }
  .icon_search{
      color: #e54847;
      font-size: .6rem;
  }
    
</style>
