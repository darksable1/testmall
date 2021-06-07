<template>
  <div id="app">
  
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabbar/MainTabbar'

export default {
  name: 'App',
  compotents:{
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css'


</style>
