<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px; /*状态栏为20*/
  height: 20px;
}

.left,
.right {
  width: 60px;
  background-color: red;
}
.center {
  flex: 1;
  background-color: blue;
}
</style>
