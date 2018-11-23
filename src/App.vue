<template>
  <div id="app">

    <router-view/>
    <footer>
      <ul v-show="isShow"  @isShow="handShow">
        <router-link tag="li" to="/home" activeClass="blackDeep" class="ul_li"><i class="iconfont icon-store"></i><br>首页</router-link>
        <router-link tag="li" to="/classify" activeClass="blackDeep" class="ul_li"><i class="iconfont icon-viewgallery"></i><br>分类</router-link>
        <router-link tag="li" to="/shopping" activeClass="blackDeep" class="ul_li"><i class="iconfont icon-cart"></i><br>购物车</router-link>
        <router-link tag="li" to="/message" activeClass="blackDeep" class="ul_li"><i class="iconfont icon-email"></i><br>消息</router-link>
        <router-link tag="li" to="/myself" activeClass="blackDeep" class="ul_li"><i class="iconfont icon-account"></i><br>我</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
      return{
        isShow: true
      }
    },

    methods:{
      handShow(data){
        this.isShow = data
      }
    }
}
</script>

<style scoped>
#app{overflow: hidden;}
footer{position: fixed; bottom: 0; height: .5rem;width: 100%;text-align: center; border-top: 1px solid #ccc; padding-top: .05rem; background-color: #fff;z-index: 1000}
ul {display: flex; width: 100%;}
.ul_li{flex:1;}
.blackDeep{color:#333;}
.iconfont{font-size: 0.19rem; display: inline-block; width: 100%;}



</style>
