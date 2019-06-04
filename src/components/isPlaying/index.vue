<template>
    <div class="is_playing">
        <ul>
            <li v-for='item in nowPlayingList' :key='item.id' >
                
                    <div class="show_img">
                        <img :src='item.img | setWH(60.128)'>
                    </div>
                    <div class="movie_des">
                        <h2>{{item.nm}}</h2>
                        <div>观众评分：{{item.sc}}</div>
                        <div>主演：{{item.star}}</div>
                        <div>{{item.showInfo}}</div>
                        <div class="version_tag" v-show="item.version!=''">
                            <div class="lf">3D</div>
                            <div class="lr">IMAX</div>
                        </div>
                    </div>
                    <div class="opt">
                        <div class="right_buy">购买</div>
                    </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'isplaying',
        data() {
            return {
                nowPlayingList:[]
            }
        },
        mounted(){
            this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
               console.log(res);
               this.nowPlayingList = res.data.data.movieList;
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
</script>

<style  scoped>
     .is_playing{
        margin-top: .3rem;
        /* background-color: #fbedec; */
        overflow-y: scroll;
        height: 15rem;
     }
     
     .is_playing::-webkit-scrollbar {
       display: none;
     }
    .is_playing ul{
        list-style: none;
        
    }
    .is_playing li{
        position: relative;
    }
    .is_playing ul li{
        display: flex;
        align-items: center;
        padding: .3rem .2rem;
        justify-content: space-around;
    }
    .is_playing ul li:after{
        position:absolute;
        content: '';
        width: 375px;
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
    .right_buy{
        padding: .1rem .3rem;
        border-radius: 3px;
        background-color: #de1615;
        color: #ffffff;
        font-size: .35rem;
    }
    .version_tag{
        position: absolute;
        right: 0px;
        top: 0px;
        display: flex;
        border-radius:2px;
    }
    .version_tag .lf{
        padding: .1rem .2rem;
        background: #2196f3;
        color: #ffffff;
       
    }
    .version_tag .lr{
        padding: .1rem .1rem;
        border: 1px solid #2196f3;

    }
</style>