<template>
    <div class="city">
        <!-- 城市定位 -->
        <div class="city_select">
            <p class="city_des">热门城市选择</p>  
            <ul>
               <li v-for='(item,index) in hotList' :key='index'>
                   {{item.nm}}
               </li>
            </ul>
        </div>

        <div class="city_sort" ref='city_sort'>
                <div class="" v-for='(item,index) in cityList' :key='index'>
                    <p class="city_des">{{item.index}}</p>  
                    <ul class="city_list">
                        <li v-for='(i,index) in item.list' :key='index'>{{i.nm}}</li>
                    </ul>
                </div>
        </div>

        <div class="placeholder"></div>

        <div class="city_index">
            <ul>
                <li v-for='(item,index) in cityList' :key='index' @touchstart='handleToIndex(index)'>
                    {{item.index}}
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'city',
        data() {
            return {
                hotList:[],
                cityList:[],
            }
        },
        mounted(){
            this.axios.get('/api/cityList').then((res)=>{
                 console.log(res);
                 var cities = res.data.data.cities;
                 this.formatCityList(cities)
            })
        },
        methods:{
            formatCityList(cities){
                var cityList = [];
                var hotList = [];

               for(var item of cities){
                //    console.log(item);
                   var firstLetter = item.py.substring(0,1).toUpperCase();
                   if(toCom(firstLetter)){
                       cityList.push({index:firstLetter,list:[{ nm:item.nm ,id:item.id}]});
                   }else{//累加到已有的index
                        //  console.log('false')
                         for(var i of cityList){
                             if(i.index === firstLetter){
                                 i.list.push({nm:item.nm,id:item.id})
                             }
                         }
                   }
               }

               //判断索引是否存在
               function toCom(firstLetter){//查看cityList里面是否含有已有的index,若有直接push,若没有则需要创建一个对象
                   for(var item of cityList){
                    //    console.log(cityList)
                       if(item.index === firstLetter){
                           return false;
                       }
                   }
                 return true;
               }

               cityList.sort((n1,n2)=>{
                   if(n1.index > n2.index){
                       return 1
                   }else if(n1.index < n2.index){
                       return -1
                   }else{
                       return 0
                   }
               })

               this.cityList = cityList;
              console.log(cityList)


              hotList = cities.filter((item)=>{ return item.isHot=== 1 })
              this.hotList = hotList;
              console.log(hotList)

            },
            handleToIndex(index){
                console.log(index)
                var p = this.$refs.city_sort.getElementsByTagName('p');
                console.log(p[index].offsetTop)
                
                console.log(this.$refs.city_sort.parentNode)
                console.log(this.$refs.city_sort.parentNode.scrollTop)
                 this.$refs.city_sort.parentNode.scrollTop = p[index].offsetTop-150;
            }
        }
    }
</script>

<style scoped> 
   .city{
       margin-top: .3rem;
       background-color: #fbedec;
       overflow-y: scroll;
       height: 15rem;
   }
   .city_des{
        text-align: left;
        background-color: #e8e8e8;
         padding: .2rem .3rem;
    }
    .city_select ul>li{
        display: inline-block;
        padding: .1rem .8rem;
        background-color:#fff;
        border: 1px solid #e8e8e8;
        margin: .2rem;
    }
    .city .city_list{
        list-style: none;
        padding: .2rem .3rem;
    }
    .placeholder{
        height: 70px;
    }
    .city_index{
        background-color: #fff;
        z-index: 10;
        position: fixed;
        top: 2.5rem;
        right: 0px;
        padding: .3rem 0rem;
        border: 1px solid #e6e6e6;
    }
    .city_index li{
        list-style: none;
        padding: 0.05rem .1rem;
    }
</style>