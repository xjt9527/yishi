<template>
  <div class="search-page">
    <div class="searchCom">
      <searchCom></searchCom>
    </div>
    <div class="sw-w">
      <v-touch v-on:swipestart='swipestart' v-on:swipeleft="leftChangeImg" height="500px" v-on:swiperight="leftChangeImg2">
        <van-swipe
          :loop="false"
          :height="600"
          indicator-color="white"
          @change="onChange"
        >
          <van-swipe-item v-for="(item,i) in list" :key="i" class="swipeBox">
            <div class="test-box" :class="{red:swIndex+1==i}">
              <main class="box">
                <div class="book-one">
                  <div class="up" :style=" {'backgroundImage':'url('+item.imgs+')'}">
                    <div class="star">
                      <div class="bac" v-for="(item,i) in [1,2,3]" :key="i"></div>
                      <span>{{item.tag}}</span>
                    </div>
                  </div>
                  <div class="down">
                    <p class="title">《{{item.title}}》</p>
                    <p class="class">
                      {{item.class}}
                      <span>更新中</span>
                    </p>
                    <p class="dis">{{item.dis}}</p>
                    <div class="author">
                      <nav class="a1">
                        作者:
                        <span class="mar">{{item.author}}</span>
                      </nav>
                      <div class="a2">
                        <nav class="look">
                          <span class="count">{{item.count}}</span>在看
                        </nav>
                        <nav class="discuss">
                          <span class="count">{{item.discuss}}</span>评论
                        </nav>
                      </div>
                    </div>
                    <div class="back btn-click" @click="back()"></div>
                    <div class="start-read btn-click" @click="startRead(i)">查看详情</div>

                    <img class="white" src="../../assets/image/img_radius_white.png" alt="white" />
                  </div>
                </div>
              </main>
            </div>
          </van-swipe-item>
        </van-swipe>
      </v-touch>
    </div>
    <!-- <div class="abig">
      <div class="aaa">asdfasdfasdf</div>
    </div>-->
  </div>
</template>

<script>
import searchCom from "../../components/searchCom";
import {  List, Swipe, SwipeItem } from "vant";
import { request } from 'http';
export default {
  components: { searchCom, [Swipe.name]: Swipe, [SwipeItem.name]: SwipeItem },
  props: {},
  data() {
    return {
      swIndex: 0,
      bac:'../../assets/image/bg_img.png',
      list:[
        {
          title:'大雪满刀弓',
          class:'第136章 大雪坪论刀道',
          dis:'刀光剑影 爱恨情仇 这个江湖 终究是精彩绝终究是精彩绝伦伦...',
          author:'聋戈',
          count:'2233',
          discuss:'282',
          imgs:require('../../assets/image/detail/bg1.png'),
          tag:'仙侠',
          start:3

        },
        {
          title:'圣女贞德',
          class:'第1章 起源',
          dis:'女贞德于1430年在贡比涅一次小冲突中为勃艮第公国所俘，不久为英格兰人以重金购去...',
          author:'瓦西里',
          count:'3099',
          discuss:'129',
          imgs:require('../../assets/image/detail/g7.png'),
          tag:'历史',
          start:2

        },
        {
          title:'遮天',
          class:'第6章 封禅之地',
          dis:'冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。',
          author:'辰东',
          count:'907',
          discuss:'104',
          imgs:require('../../assets/image/detail/g4.png'),
          tag:'仙侠',
          start:3
        },
        {
          title:'王者之剑',
          class:'第276章 曙光',
          dis:'超自然的邪恶势力侵占了柯南所在的部落，柯南的父亲和族人惨遭杀害。',
          author:'马库斯·尼斯佩尔',
          count:'3678',
          discuss:'229',
          imgs:require('../../assets/image/detail/g8.png'),
          tag:'传记',
          start:3
        },
        {
          title:'沼泽怪物',
          class:'第24章 对峙与选择',
          dis:'据传，在丛林深处，有一种半人半鳄鱼的生物，它的身世是一个哀伤、残忍的故事。',
          author:'麦卡德',
          count:'1566',
          discuss:'751',
          imgs:require('../../assets/image/detail/g10.png'),
          tag:'科幻',
          start:3
        },

      ]
    };
  },
  watch: {},
  computed: {},

  methods: {
    onChange(index) {
      // console.log("当前 Swipe 索引--" + index);
      this.swIndex = index;
    },
    back(){
this.$router.go(-1)
    },
    leftChangeImg() {
      console.log("left");
    },
    leftChangeImg2() {
      console.log("right");
    },
    swipestart(){
      console.log(1);
    },
    startRead(id){
       this.$router.push({name:'detailPage',query:{id:id}})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less">
.search-page {
  .van-swipe__indicators {
    bottom: 50%;
  }
}
</style>
<style lang="less" scoped>
// .abig {
//   perspective: 500;
// }
// .aaa {
//   border: 1px solid;
//   width: 300px;
//   height: 100px;
//   background: greenyellow;
//   transform: rotateY(30deg);
// }
.test-box {
  // height: 500px;
  // background: gold;
}
.swipeBox {
  perspective: 300;
}
.sw-w {
  // width: 300px;
  // margin-left: 10px;
}
.red {
  // background: gray;
  // transform-style: preserve-3d;
  // transform: rotateY(-10deg);
  // opacity: 0.9;
  // width: 200px;
  // transition: all 1s;
  // .back{
  //   display: none;
  // }
}
.search-page {
  min-height: 100vh;
  background: #4b6eeb;
  overflow: hidden;
  .searchCom {
    margin: 10px 0 20px;
  }
  .box {
    border-radius: 12px;
    // height: 600px;
    background: #fff;
    width: 320px;
    margin: 0 auto;
    box-shadow:  5px 5px 5px rgba(190, 189, 189, 0.3);
  }
  .book-one {
    .up {
      width: 100%;
      height: 310px;
      background-size: 100%;
      border-radius: 12px 12px 12px 0;
      overflow: hidden;
      
      .star {
        // height: 18px;
        // border: 1px solid;
        padding: 0 20px;
        margin-top: 12px;
        line-height: 18px;
        text-align: right;
        .bac {
          height: 16px;
          width: 16px;
          // background: gold;
          background: url("../../assets/image/star_new.png") no-repeat 0px 0px
            ~"/" 14px;
          float: left;
        }
        span {
          font-size: 10px;
          color: #fff;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 14px;
          padding: 3px 6px;
        }
      }
    }
    .down {
      height: 196px;
      border-radius: 12px 0 0 0;
      position: relative;
      background: #fff;
      top: -12px;
      padding: 0 16px;
      .white {
        position: absolute;
        top: -14px;
        right: 0;
        width: 15px;
      }
      .back{
        width: 30px;
        height: 30px;
        // border: 1px solid;
        position: absolute;
        bottom: 18px;
        background: url('../../assets/image/detail/back.png') no-repeat center ~'/' 100%;
      }
      .start-read {
        width: 156px;
        height: 46px;
        background: rgba(75, 110, 235, 1);
        border-radius: 23px;
        margin: 24px auto 0;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 46px;
        text-align: center;
        margin-bottom: 18px;
        box-shadow: 0px 12px 20px 0px rgb(189, 203, 250);
      }
      .title {
        font-size: 20px;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        padding-top: 12px;
      }
      .class {
        font-size: 14px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-top: 8px;
        span {
          background: #ff6c6c;
          border-radius: 4px;
          font-size: 10px;
          color: #fff;
          padding: 2px 6px;
          margin-left: 13px;
        }
      }
      .dis {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-top: 8px;
        line-height: 16px;
      }
      .author {
        font-size: 12px;
        color: #999999;
        margin-top: 12px;
        display: flex;
        .a1 {
          flex: 1;
          .mar {
            margin-left: 6px;
          }
        }
        .a2 {
          display: flex;
          .count {
            color: #666666;
            margin-right: 4px;
          }
          .look {
            margin-right: 6px;
            width: 65px;
            background: url("../../assets/image/icon_line.png") no-repeat center
              right ~"/" 1px 6px;
          }
          .discuss {
          }
        }
      }
    }
  }
}
</style>