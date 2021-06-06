<template>
 <div class="tab-bar">
<slot></slot>
 </div>
</template>




<script>



export default {
name:"TabBar"
}
</script>


<style>

.tab-bar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: (0,-1,1,rgb(100, 100, 100,0.1));
  }
/* .tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;

}

.tab-bar-item img{
  width: 10px;
  height: 24px;
} */

</style>