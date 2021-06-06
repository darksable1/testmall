<template>
  <div id="app">
    <router-view></router-view>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from 'components/content.mainTabbar/MainTaBar'

export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/base. css'


</style>
