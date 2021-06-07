<template>
<div class="main-tabbar">
     <tab-bar>
    
    <tab-bar-item path="/firstview" activeColor="blue"><img slot="item-icon" src="~assets/img/tabbar/屋子.svg" alt="" srcset="">
      <img slot="item-icon-active" src="~assets/img/tabbar/首页-选中.svg" alt="" srcset="">
      <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/type" activeColor="blue"><img slot="item-icon" src="~assets/img/tabbar/分类1.svg" alt="" srcset="">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类.svg" alt="" srcset="">
      <div slot="item-text">分类</div>
      </tab-bar-item>


      <tab-bar-item path="/buycar" activeColor="blue"><img slot="item-icon" src="~assets/img/tabbar/购物车1.svg" alt="" srcset="">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车.svg" alt="" srcset="">
      <div slot="item-text">购物车</div>
      </tab-bar-item>

      
      <tab-bar-item path="/my"  activeColor="blue"><img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="" srcset="">
      <img slot="item-icon-active" src="~assets/img/tabbar/我的a.svg" alt="" srcset="">
      <div slot="item-text">我的</div>
      </tab-bar-item>
  </tab-bar> 
</div>
      
</template>


<script>
import TabBarItem from '@/components/common/tabbar/TabBarItem'
import TabBar from '@/components/common/tabbar/TabBar'

export default {
    name:"MainTabbar",
    components:{
    TabBar,
    TabBarItem
    }
}
</script>

<style>

</style>