<template>
    <div id="header">
        <ul>
            <li>
                <i class="iconfont icon-back"></i>                
            </li>
            <li>
               <h2>{{title}}</h2>
            </li>
            <li>
                <i>右边的图标</i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        props:{
            title:{
                type:String,
                default:'喵喵电影'
            }
        },
        data() {
            return {
                msg:'header组件'
            }
        }
    }
</script>

<style scoped>
    
  #header{
    width: 100%;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;
    padding: .1rem .3rem;
  }
  #header ul{
      display: flex;
      list-style: none;
      justify-content: space-between;
      align-items: center;

  }
    
</style>