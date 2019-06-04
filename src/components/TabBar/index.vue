<template>
 
   <div class="footer">
       <ul>
           <router-link tag='li' to='/mive'>
               <i class="iconfont icon-weibiaoti-"></i>
               <p>电影</p>
           </router-link>
           <router-link tag="li" to='/cinema'>
               <i class="iconfont icon-74"></i>
               <p>影院</p>
           </router-link>
           <router-link tag="li" to='/mine'>
              <i class="iconfont icon-user"></i>
              <p>我的</p>
           </router-link>
       </ul>
   </div>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style  scoped>
     .footer{
         width: 100%;
         background-color: #f7f7f7;
         padding: .1rem .3rem;
         position:fixed;
         bottom: 0rem;
     }
     .footer ul{
         list-style-type: none;
         justify-content:space-around;
         justify-items: center;
         display: flex;
        text-align: center;

     }
     .footer{
          height: auto;
     }
    .footer ul li.router-link-active{
        color: #e54847;
    }
     
</style>