<template>
  <div id="app" class="app-index">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/> 

   
  </div>
</template>
<script>
console.log('app.vue');

</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
}
</style>
