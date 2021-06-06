<template>
 <div id="app">

  <main-tabbar></main-tabbar>

  <router-view></router-view>

  
  </div>
</template>

<script>

import MainTabbar from './components/MainTabbar'

export default {
  name:'App',
  components:{
  MainTabbar
   }
}

</script>

<style>
@import "./css/base.css";

</style>
