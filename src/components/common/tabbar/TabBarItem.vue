<template>
  <!--所有的Item都展示同一个图片，同一个文字，所以不能写死，用slot-->
  <div class="tab-bar-item" @click="itemClick">
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
    <!--<div>主页</div>-->

    <!-- <slot></slot> -->
  <div v-if="!isActive">
    <slot  name="item-icon"></slot>
  </div>
    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>
    <!-- <slot name="item-text"></slot> -->
    <!--<slot :class="{active:isActive}" name="item-text"></slot>-->

    <!--<div :class="{active:isActive}">-->
      <!--<slot name="item-text"></slot>-->
    <!--</div>-->

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

  <!--<div class="tab-bar-item">-->
  <!--<img src="../../assets/img/tabbar/category.svg" alt="">-->
  <!--<div>分类</div>-->
  <!--</div>-->
  <!--<div class="tab-bar-item">-->
  <!--<img src="../../assets/img/tabbar/shopcart.svg" alt="">-->
  <!--<div>购物车</div>-->
  <!--</div>-->
  <!--<div class="tab-bar-item">-->
  <!--<img src="../../assets/img/tabbar/profile.svg" alt="">-->
  <!--<div>我的</div>-->
  <!--</div>-->
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    //传进来的属性参数：路径
    link:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed:{
    isActive(){
      // home-> item(/home) =true
      // home-> item(/category) =false
      // home-> item(/cart) =false
      // home-> item(/profile) =false

      return this.$route.path.indexOf(this.link)  !==-1
    },
    activeStyle(){
      return  this.isActive ? {color:this.activeColor }:{}
    }
  },
  methods:{
    itemClick(){
      // console.log('itemClick');
      // console.log(this.$router.path);

      // this.$router.replace(this.link)


      if(this.$route.path.indexOf(this.link)  ==-1){
        this.$router.replace(this.link)
      }

      // console.log(this.$route);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /*经验值 用 49px*/
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
  .active{
    color: #ff0000;
  }
</style>
