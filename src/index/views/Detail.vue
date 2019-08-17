<template>
  <div class="detail-page">
    <nav class="title" >
      <span class="name">[ 大雪满刀弓 ]</span>
      <span class="section">第一章 惊蛰</span>
    </nav>
    <main class="content">
      <div v-for="(item,i) in detail.list" :key="i">
        <div v-if="item.type==1" v-html="item.comment"></div>

        <div v-if="item.type==2" class="people">
          <nav class="up">
            <div class="ask-left">
              <img :src="item.list[actIndex].chatHeadLeft" alt="header" />
              <span class="nick-name left-name">{{item.list[actIndex].nameLeft}}</span>
            </div>
            <div class="ask-right">
              <img :src="item.list[actIndex].chatHeadRight" alt="header" />
              <span class="nick-name right-name">{{item.list[actIndex].nameRight}}</span>
            </div>
          </nav>
          <!-- <button @click="add()">+++</button>
          <button @click="nextData()">arr</button> -->
          <nav class="down" @click="add()">
            <div>{{item.list[actIndex].comment}} </div>
            <div class="next">
              <nav class="next-bac"></nav>
            </div>
          </nav>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { detail } from "../../assets/js/json";
let vm;
// function* g3() {
// console.log(vm.arr);
//   yield*  vm.arr;
// }
// var iterator = g3();
function* g3() {
 yield* Array.from(arguments);
}


let iterator;
export default {
  components: {},
  props: {},
  data() {
    return {
      detail: {
        list: []
      },
      arr:[5,2,3,4],
      isYidld:false,
      actIndex:0
    };
  },
  watch: {},
  computed: {},
  methods: {
    getList() {
      this.detail = detail;
    },
    add() {
      this.actIndex++
    },
    nextData() {
      this.isYidld = false
      this.arr = [7,8,9]
    },
    nextAsk2() {      
      if(!this.isYidld){
        iterator = g3(...this.arr) 
        this.isYidld = true
      }
      
        let res = iterator.next()
      if(!res.done){
        console.log(res);
      }else{
        return false
      }
    },

  },
  created() {
    vm= this
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="less" scoped>
.detail-page {
  min-height: 100vh;
  background: #2d3661;
  font-family: PingFangSC-Semibold;
  color: #ffffff;
  line-height: 40px;
  padding: 0 20px 20px 20px;
  .title {
    height: 40px;
    .name {
      font-size: 18px;
      margin-right: 8px;
    }
    .section {
      font-size: 14px;
    }
  }
  .content {
    .people {
      display: flex;
      flex-direction: column;
    }
    .up {
      height: 140px;
      img {
        width: 100px;
        height: 140px;
      }
      .nick-name {
        display: inline-block;
        width: 22px;
        position: absolute;

        font-size: 13px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(195, 207, 241, 1);
        background: #6876c1;
        border-radius: 11px;
        line-height: normal;
        text-align: center;
        padding: 8px 0;
      }
      .left-name {
        right: 0;
        top: 45px;
      }
      .right-name {
        left: 0;
        top: 45px;
      }
      .ask-left {
        width: 140px;
        float: left;
        position: relative;
        img {
          margin-left: 12px;
        }
      }
      .ask-right {
        width: 140px;
        float: right;
        position: relative;
        img {
          margin-right: 12px;
          float: right;
        }
      }
    }
    .down {
      font-size: 14px;
      background: #6876c1;
      padding: 10px 20px;
      border-radius: 6px;
      line-height: 180%;
      position: relative;
      top: -2px;
      .next {
        height: 15px;
        margin-top: 10px;
        .next-bac {
          width: 15px;
          // border: 1px solid;
          height: 100%;
          float: right;
          background: url("../../assets/image/detail/next.png") no-repeat center
            ~"/" 100%;
        }
      }
    }
  }
}
</style>