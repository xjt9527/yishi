<template>
  <div class="myDiv">
    <!-- <button @click="start()">start</button> -->

    <!-- <transition name="slide-fade">
    <div class="one" v-if="isShow">

    </div>
    </transition>-->
    <!-- <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOut">
      <div class="one" v-if="isShow"></div>
    </transition> -->
      <v-touch v-on:swipeleft="leftChangeImg" height="500px" v-on:swiperight="leftChangeImg2">
        <main class="box">

          <div class="one">
              <img src="../../assets/image/detail/g1.jpeg" class="imgStyle">
          </div>
          <div class="one">
              <img src="../../assets/image/detail/b1.png" class="imgStyle">
          </div>
        </main>
    </v-touch>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isShow: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    start() {
      this.isShow = !this.isShow;
    },
    leftChangeImg(){
      console.log('left');
    },
    leftChangeImg2(){
      console.log('right');
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.myDiv {
  .box{

  }
  .one {
    width: 80%;
    height: 300px;
    background: gray;
    float: left;
    img{
      width: 100%;
      height: 100%;
    }
  }

}
</style>