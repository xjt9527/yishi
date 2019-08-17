<template>
  <div class="page-index">
    <nav class="banner">
      <!-- <img src="@/assets/image/index/banner.png" alt="banner"> -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </nav>

    <nav class="notice">
      <van-notice-bar
        mode="link"
        :speed="30"
        background="#F0FCF8"
        color="#00C882"
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
        left-icon="volume-o"
      />
    </nav>
    <section class="tabs">
      <div class="tabs-box">
        <ul class="tabs-one">
          <li v-for="(item,index) in tabsList" :key="index" @click="linkBtn">
            <div class="tabs-ifont" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <span class="tabs-text">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </section>
    <div class="page-list">
      <header class="list-head">
        趣夺宝
        <div class="icon-box">
          <span class="iconfont iconicon_arrow_right_gray_s"></span>
          <span class="more" @click="deatil()">查看更多</span>
        </div>
      </header>
      <section class="goods-list">
        <div class="goods-one" v-for="(item,$index) in list" :key="$index">
          <nav class="goods-img" :style=" {'backgroundImage':'url('+bac+')'}">
            <!-- <img src="../../assets/image/bg_img.png" alt="goods" /> -->
          </nav>
          <div class="describe">
            <p class="goods-name overflow">iPad Air 金色 128G</p>
            <!-- <p class="goods-count">共需3000次</p> -->
            <p class="gold">
              <span>1500</span>金币/每次
            </p>
            <div class="progress">
              <!-- <span>剩余8001次</span> -->
              <div class="progress-done"></div>
            </div>
            <p class="goods-count">
              <span>剩余8001次</span>
              <span>共需3000次</span>
            </p>
          </div>
          <div class="goods-btn btn-click">立即参与</div>
        </div>
      </section>
    </div>

    <div class="shop-list">
      <header class="list-head">兑换商城</header>
      <section class="goods-box">
        <div class="goods-one"></div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import QuRequest from "@/common/core/QuRequest.js";
import { NoticeBar, Swipe, SwipeItem, Lazyload } from "vant";
import { imgs } from "@/assets/js/base64.js";
console.log(imgs);

const quRequest = new QuRequest();
// console.log(quRequest);
export default {
  // name: "home",
  components: {
    HelloWorld,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
    // [Lazyload.name]:Lazyload,
  },
  data() {
    return {
      list: [1, 1, 1, 1],
      tabsList: imgs,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  mounted() {},
  methods: {
    linkBtn() {
      console.log(1);
      this.$router.push({ name: "about" });
    },
    deatil() {
this.$router.push({ name: "Detail" });
    }
  }
};
</script>
<style >
@import "//at.alicdn.com/t/font_1147489_aiiv11o8d5m.css";
</style>
<style lang="less" scoped>
.page-index {
  // overflow: hidden;
  // font-family: NotoSansHans-Regular;
  // height: 100vh;
  background: rgba(250, 250, 250, 1);
  .banner {
    width: 100%;
    height: 134px;
    .van-swipe {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .notice {
    height: 30px;
    // border: 1px solid;
  }
  .tabs {
    // height: 96px;
    background: #fff;
    width: 100%;
    .tabs-box {
      padding: 16px 37px;
      // border: 1px solid;
      .tabs-one {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        li {
          width: 48px;

          .tabs-ifont {
            width: 44px;
            height: 44px;
            // background: gray;
            margin: 0 2px;
            background-size: 100% 100%;
          }
          .tabs-text {
            font-size: 12px;
            font-weight: 400;
            color: rgba(98, 102, 101, 1);
            line-height: 18px;
            margin-top: 8px;
            display: block;
          }
        }
      }
    }
  }
  .page-list {
    padding: 0 12px;
    min-height: 300px;
    .list-head {
      text-align: left;
      overflow: hidden;
      line-height: 58px;
      width: 100%;
      // border: 1px solid;
      height: 58px;
      font-size: 18px;
      font-weight: bold;
      color: #313332;
      .icon-box {
        float: right;

        span {
          font-size: 12px;
          font-weight: 400;
          float: right;
          color: #969998;
        }
        .more {
          padding-top: 1px;
          margin-bottom: -1px;
        }
      }
    }
    .goods-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .goods-one {
        width: 162px;
        height: 250px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px 0px rgba(102, 102, 102, 0.08);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 12px;
        .goods-img {
          width: 124px;
          height: 90px;
          margin: 10px 19px 0 19px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .describe {
          padding: 0 8px;
          .goods-name {
            font-size: 16px;
            font-weight: 400;
            margin-top: 19px;
          }
          .goods-count {
            font-size: 12px;
            color: rgba(150, 153, 152, 1);
            display: flex;
            justify-content: space-between;
          }
          .progress {
            margin-top: 8px;
            margin-bottom: 4px;
            width: 100%;
            height: 6px;
            background: #ffc2c2;
            border-radius: 7px;
            overflow: hidden;
            position: relative;
            top: 0;
            & > span {
              display: block;
              width: 100%;
              height: 100%;
              text-align: center;
              position: absolute;
              font-size: 9px;
              top: 2px;
              font-weight: 400;
              font-size: 9px;
              color: rgba(255, 255, 255, 1);
              line-height: 10px;
            }
            .progress-done {
              background: #ff6666;
              width: 50%;
              height: 100%;
              font-size: 9px;
            }
          }
          .gold {
            font-size: 11px;
            font-weight: 400;
            color: rgba(49, 51, 50, 1);
            margin-top: 4px;
            color: #969998;
            // border: 1px solid;
            // display: table-cell;
            // vertical-align: bottom;
            span {
              margin-right: 2px;
              font-size: 18px;
              font-weight: bold;
              color: rgba(255, 102, 102, 1);
            }
          }
        }
        .goods-btn {
          width: 92px;
          height: 28px;
          border-radius: 4px;
          border: 1px solid rgba(255, 102, 102, 1);
          margin: 14px auto 0;
          font-weight: 400;
          color: rgba(255, 102, 102, 1);
          text-align: center;
          line-height: 28px;
        }
      }
    }
  }
  .shop-list {
    margin-top: 8px;
    padding: 0 12px;
    .list-head {
      color: #313332;
      font-size: 18px;
      font-weight: bold;
    }
    .goods-box {
      margin: 16px 0;
      .goods-one {
        width: 336px;
        height: 104px;
        background: #ffffff;
        // background: red;
        box-shadow: 0px 2px 8px 0px rgba(102, 102, 102, 0.08);
        border-radius: 4px;
      }
    }
  }
}
</style>
