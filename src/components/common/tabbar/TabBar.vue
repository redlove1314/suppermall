<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar{
    /*说明：ID用#号，class 用点*/
    display: flex;
    background-color: #f6f6f6;

    /*下面四行代码，显示对象到底部*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*增加一个颜色过渡*/
    box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
  }

</style>
