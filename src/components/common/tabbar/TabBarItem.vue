<template>
<div class="tab-bar-item" @click="itemclick">
  <div v-if="!isActive"><slot  name="item-icon"></slot></div>
  <div  v-else><slot name="item-icon-active"></slot></div>    
  <div :style="activeStyle"> <slot  name="item-text"></slot></div>

</div>
</template>

<script>
export default {
name:"TabBarItem",
props:{
  path:String,
  activeColor:{
    type:String,
    default:'red'
  }
},
data(){
    return{
        // isActive:false
    }
},
computed:{
  isActive(){
  return  this.path==this.$route.path
  },
  activeStyle(){
    return this.isActive?{color:this.activeColor}:{ }
  }
},
methods:{
itemclick(){
  // console.log('11111');
  this.$router.replace(this.path)
  // console.log(this.$router.replace(this.path));
}
}
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
}

.active{
  color: red;
}
</style>