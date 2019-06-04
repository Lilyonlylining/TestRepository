<template>
    <div class="search">
        <div class="input_search"> <Input v-model="message" placeholder="搜索" suffix="ios-search"/></div>
       
        <div class="content">
                <ul>
                    <h2>电影/电视剧/综艺</h2>
                    <li v-for='item in movieList' :key='item.id' >
                        
                        <div class="show_img">
                            <img :src='item.img | setWH(60.128)'>
                        </div>
                        <div class="movie_des">
                            <h2>{{item.nm}}</h2>
                            <div>类型：{{item.cat}}</div>
                            <div>出自：{{item.fra}}</div>
                            <div>时间：{{item.frt}}</div>
                            
                        </div>
                       <div class="record">
                           {{item.sc}}
                       </div>
                        
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                message:'',
                movieList:[]
            }
        },
        watch:{
            message(newVal){
                var that = this;
                this.cancelRequest();
                this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                   cancelToken: new this.axios.CancelToken(function executor (c) {
                            that.source = c;
                    })
               }).then((res)=>{ 
                   var msg = res.data.msg;
                   var movies = res.data.data.movies;

                   if(msg&&movies){

                       this.movieList = res.data.data.movies.list;
                       console.log(this.movieList)
                   }else{
                       this.movieList = [];
                   }
                   
               }).catch((err)=>{
                //    console.log(err)
                    if(this.axios.isCancel(err)){
                        console.log('Request Cancel',err.msg);//如果请求被取消这里是返回的msg
                    }else{
                        console.log(err)
                    }
               })
            }
        },
        methods:{
            cancelRequest(){
                    // 第一次执行videoService.cancelRequest()时还未发送getVideoList请求，会报错，添加如下判断
                    if (typeof this.source === 'function') {
                    // 取消请求
                         this.source('终止请求')
                    }
            }

      }
    }
</script>

<style scoped>
    .search{
       
        background-color: #f1f1f1;
    }
    /* .content ul li{
        display:flex;
        
    } */
    .input_search{
        padding: .3rem .2rem;
    }
     .content ul{
        list-style: none;
        background-color: #fff;
        padding: .3rem .2rem;
    }
    .content ul>h2{
        color: #9e9c9c;
        font-size:.4rem;
    }
    .content li{
        position: relative;
    }
    .content ul li{
        display: flex;
        padding: .3rem .2rem;
        justify-content: space-around;
    }
    .content ul li:after{
        position:absolute;
        content: '';
        width:100%;
        height: 1px;
        background:#ddd;
        transform: scaleY(0.3);
        bottom: 0px;
        left: 0px;
        right: 0px
    }
    .movie_des{
        padding-left: .1rem;
        width: 6rem;
        position: relative;      
    }

    .movie_des div{
       /* font-size: .13rem; */
       white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: .08rem;
      background-color: #fff;
    }
    .movie_des h2{
        font-size: .4rem;
    }
    .record{
        color: #FFC107;
        font-weight: bold;
    }
    
    
</style>