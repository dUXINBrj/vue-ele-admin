<template>
  <div id="Container">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
#Container {
  width: 100%;
  height: 100%;
  background: #efefef;
}
</style>
