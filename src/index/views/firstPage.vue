<template>
    <div class="first-page-box">
        <div class="first-section">
            <div class="search-container">
                <div class="swper-box">
                    <SearchCom></SearchCom>
                </div>
                <mt-swipe :auto="0">
                    <mt-swipe-item class="item-1">
                        <Item></Item>
                    </mt-swipe-item>
                    <mt-swipe-item class="item-2">
                        <Item2></Item2>
                    </mt-swipe-item>
                    <mt-swipe-item class="item-3">
                        <Item3></Item3>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="second-section">
            <div class="tag-box">
                <div class="line"></div>
                <div class="txt1">推荐</div>
                <div class="txt2" @click="refresh()">今日更新</div>
                <div class="txt3" @click="refresh()">热门排行</div>
            </div>
            <div class="cover-box">
                <div class="line-item">
                    <div v-for="(item, index) in items" :key="index" class="cover-item" @click="gotoDetail(index)">
                        <div :class="'cover-box-iner '+'inner'+item.id"></div>
                        <div class="cover-title">{{item.title}}</div>
                        <div class="cover-title2">{{ item.content }}</div>
                    </div>
                </div>
                <div class="line-item">
                    <div v-for="(item, index) in items2" :key="index" class="cover-item" @click="gotoDetail(index+3)">
                        <div :class="'cover-box-iner '+'inner'+item.id"></div>
                        <div class="cover-title">{{item.title}}</div>
                        <div class="cover-title2">{{ item.content }}</div>
                    </div>
                </div>
            </div>
            <div class="instruct-box clearfix">
                <div class="instruct-item left">
                    <div class="title">完本好书</div>
                    <div class="txt">爆款小说在线看</div>
                    <div class="cover-ints"></div>
                </div>
                <div class="instruct-item right">
                    <div class="title">登临巅峰</div>
                    <div class="txt">夺天地造化</div>
                    <div class="cover-ints cover1"></div>
                </div>
                <div class="instruct-item left">
                    <div class="title">羽化升仙</div>
                    <div class="txt">结金丹称仙王</div>
                    <div class="cover-ints cover2"></div>
                </div>
                <div class="instruct-item right">
                    <div class="title">战斗力爆表</div>
                    <div class="txt">战5渣开外挂</div>
                    <div class="cover-ints cover3"></div>
                </div>
            </div>
            <div class="boy-box">
                <div class="boy-title">
                    <div class="line"></div>
                    <div class="txt1">男生畅销</div>
                    <div class="txt2 right">换一批</div>
                </div>
                <div class="boy-item clearfix">
                    <div class="cover-img left"></div>
                    <div class="right-content right">
                        <div class="txt1">斗破苍穹</div>
                        <div class="txt2">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！</div>
                        <div class="txt3">作者：天蚕土豆</div>
                    </div>
                </div>
                <div class="boy-item clearfix">
                    <div class="cover-img cover-img2 left"></div>
                    <div class="right-content right">
                        <div class="txt1">悟空传</div>
                        <div class="txt2">我要这天，再遮不住我眼，我要这地，再埋不了我心，要这众生，都明白我意，要那诸佛，都烟消云散！</div>
                        <div class="txt3 txt-uni">作者：今何在</div>
                    </div>
                </div>
                <div class="boy-item clearfix">
                    <div class="cover-img cover-img3 left"></div>
                    <div class="right-content right">
                        <div class="txt1">师士传说</div>
                        <div class="txt2">广阔的星际，当宇宙战舰和光甲出现的时候，人类又再一次陷入那无法自拔的浩瀚之中。</div>
                        <div class="txt3">作者：方想</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import SearchCom from "../../components/searchCom.vue"
import Item from "../../components/Item.vue"
import Item2 from "../../components/Item2.vue"
import Item3 from "../../components/Item3.vue"
export default {
    components: {
        SearchCom,
        Item,
        Item2,
        Item3
    },
    methods:{
        gotoDetail(id){
            this.$router.push({name:'Search', query: {id}})
        },
        refresh() {
            this.items.reverse()
            this.items2.reverse()
        }
    },
    data() {
        return {
            items: [
                {
                    title: "平天策",
                    content: "奇幻 · 修真",
                    id: "1"
                },
                {
                    title: "煞气横秋",
                    content: "武侠 · 仙侠",
                    id: "2"
                },
                {
                    title: "秦臣",
                    content: "历史 · 穿越",
                    id: "3"
                },
            ],
            items2: [
                {
                    title: "雪中悍刀行",
                    content: "奇幻 · 修真备份",
                    id: "4"
                },
                {
                    title: "庆余年",
                    content: "武侠 · 仙侠",
                    id: "5"
                },
                {
                    title: "邪气凛然",
                    content: "都市 · 超能力",
                    id: "6"
                },
            ],
        }
    }
}
</script>
<style lang="less">
input::-webkit-input-placeholder{
    color:#b4c1f1;
}
    .first-page-box {
        min-height: 100vh;
        // width: 100vw;
        overflow: hidden;
        background-color: #F5F5F5;
        background: url('../../assets/image/bg_img.png') no-repeat top;
        background-size: 100% 284px;
        .first-section {
            width: 360px;
            height: 284px;
            background-color: rgba(75,110,235,.7);
            overflow: hidden;
            .search-container {
                // margin-top: 32px;
                .swper-box {
                    width: 100%;
                    position: absolute;
                    top: 32px;
                    left: 0;
                    z-index: 10;
                }
            }
        }
        .second-section {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            // margin-top: -13px;
            position: absolute;
            top: 269px;
            left: 0;
            background-color: #F5F5F5;
            overflow: hidden;
            z-index: 10;
            .tag-box {
                padding-top: 21px;
                height: 20px;
                line-height: 20px;
                overflow: hidden;
                font-size: 16px;
                background-color: #fff;
                .line {
                    width:5px;
                    height:17px;
                    background:rgba(242,105,105,1);
                    border-radius:3px;
                    margin-left: 15px;
                    margin-top: 1.5px;
                    display: inline-block;
                }
                .txt1 {
                    margin-left: 8px;
                    color: #181818;
                    font-weight: 600;
                    display: inline-block;
                    line-height: 20px;
                    vertical-align: top;
                }
                .txt2 {
                    margin-left: 20px;
                    color: #99999D;
                    display: inline-block;
                    line-height: 20px;
                    vertical-align: top;
                    font-weight: 500;
                }
                .txt3 {
                    margin-left: 16px;
                    color: #99999D;
                    display: inline-block;
                    line-height: 20px;
                    vertical-align: top;
                    font-weight: 500;
                }
            }
            .cover-box {
                background-color: #fff;
                padding: 18px 0px;
                .line-item {
                    display: flex;
                    margin-bottom: 24px;
                    .cover-item {
                        flex: 1;
                        display: inline-block;
                        width: 96px;
                        text-align: center;
                        .cover-box-iner {
                            width: 96px;
                            height: 132px;
                            background: url("../../assets/image/img_book_01.png") no-repeat center;
                            background-size: 96px 132px;
                            border-radius: 4px;
                            display: inline-block;
                        }
                        .inner2 {
                            background: url("../../assets/image/img_book_02.png") no-repeat center;
                            background-size: 96px 132px;
                        }
                        .inner3 {
                            background: url("../../assets/image/img_book_03.png") no-repeat center;
                            background-size: 96px 132px;
                        }
                        .inner4 {
                            background: url("../../assets/image/img_book_04.png") no-repeat center;
                            background-size: 96px 132px;
                        }
                        .inner5 {
                            background: url("../../assets/image/img_book_05.png") no-repeat center;
                            background-size: 96px 132px;
                        }
                        .inner6 {
                            background: url("../../assets/image/img_book_06.png") no-repeat center;
                            background-size: 96px 132px;
                        }
                        .cover-title {
                            margin-top: 12px;
                            width: 96px;
                            color: #181818;
                            text-align: center;
                            line-height: 20px;
                            display: inline-block;
                        }
                        .cover-title2 {
                            color: #999;
                            text-align: center;
                            display: inline-block;
                        }
                    }
                }
            }
            .instruct-box {
                padding: 0 13px;
                margin-top: 8px;
                background-color: #fff;
                .instruct-item {
                    width: 158px;
                    margin-bottom: 15px;
                    padding-top: 11px;
                    .title {
                        color: #181818;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 22px;
                    }
                    .txt {
                        color: #99999D;
                        line-height: 17px;
                        font-size: 12px;
                    }
                    .cover-ints {
                        width: 153px;
                        height: 64px;
                        margin-top: 8px;
                        background: url("../../assets/image/img_wanjie.png") no-repeat center;
                        background-size: 153px 64px;
                    }
                    .cover1 {
                         background: url("../../assets/image/img_dianfeng.png") no-repeat center;
                    }
                    .cover2 {
                         background: url("../../assets/image/img_jindan.png") no-repeat center;
                    }
                    .cover3 {
                         background: url("../../assets/image/img_zhandou.png") no-repeat center;
                    }
                }
            }
            .boy-box {
                margin-top: 8px;
                background-color: #fff;
                padding: 0 15px 20px;
                .boy-title {
                    padding-top: 21px;
                    padding-right: 15px;
                    height: 20px;
                    line-height: 20px;
                    overflow: hidden;
                    font-size: 16px;
                    background-color: #fff;
                    .line {
                        width:5px;
                        height:17px;
                        background:#2199FF;
                        border-radius:3px;
                        margin-left: 15px;
                        margin-top: 1.5px;
                        display: inline-block;
                    }
                    .txt1 {
                        margin-left: 8px;
                        color: #181818;
                        font-weight: 600;
                        display: inline-block;
                        line-height: 20px;
                        vertical-align: top;
                    }
                    .txt2 {
                        margin-left: 20px;
                        color: #99999D;
                        display: inline-block;
                        line-height: 20px;
                        vertical-align: top;
                        font-weight: 500;
                    }
                }
                .boy-item {
                    margin-top: 20px;
                    height: 96px;
                    .cover-img {
                        width: 70px;
                        height: 96px;
                        background: url("../../assets/image/img_book_small_01.png") no-repeat center;
                        background-size: 70px 96px;
                        border-radius: 4px;
                    }
                    .cover-img2 {
                        background: url("../../assets/image/img_book_small_02.png") no-repeat center;
                    }
                    .cover-img3 {
                        background: url("../../assets/image/img_book_small_03.png") no-repeat center;
                    }
                    .right-content {
                        width: 240px;
                        .txt1 {
                            color: #181818;
                            font-size: 14px;    
                            line-height: 20px;
                        }
                        .txt2 {
                            font-size: 12px;
                            color: #99999D;
                            line-height: 18px;
                            margin-top: 4px;
                        }
                        .txt3 {
                            font-size: 12px;
                            line-height: 12px;
                            color: #99999D;
                            margin-top: 24px;
                        }
                        .txt-uni {
                            margin-top: 6px;
                        }
                    }
                }
            }
        }
    }
    .mint-swipe-items-wrap{
        height: 284px;
        .mint-swipe-item {
            height: 284px;
        }
        .item1 {
            height: 100%;
            background: rgba(228, 160, 121, 0.3);
        }
        .item2 {
            height: 100%;
            background: red;
        }
        .item3 {
            height: 100%;
            background: yellow;
        }
    }
    .mint-swipe-indicators {
        transform: translateX(0);
        width: 50px;
        left: 270px;
        bottom: 30px;
    }
    .mint-swipe-indicator {
        background: rgb(255, 255, 255, .4);
        opacity: .4;
    }
    .mint-swipe-indicator.is-active {
        width: 12px;
        height: 8px;
        background:rgba(255,255,255,1);
        border-radius: 4px;
        opacity: 1;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    .clearfix::after {
        content: "";
        display: block;
        line-height: 0;
        height: 0;
        overflow: hidden;
        clear: both;
    }
</style>