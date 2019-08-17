<template>
    <div class="detail-box">
        <div class="back-icon" @click="backPage"></div>
        <div class="title">
            《大雪满刀弓》
            <span class="tag">仙剑</span>
        </div>
        <div class="star-box">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
        </div>
        <div class="content-box">
            <div class="instruct">
                好大的一场雾，慢慢浸过来，触到身上，有种好大的一场雾，慢慢浸过来，触到身上，有种好大的一场雾，慢慢浸过来，触到身上，有种
            </div>
            <div class="info-box">
                <div class="author">作者：聋戈</div>
                <div class="person"><span class="data">1422</span> 在看</div>
                <div class="comment"><span class="data">1422</span> 评论</div>
            </div>
            <div class="start-read btn-click" @click="goDetail(1)">开始阅读</div>
            <ul class="contents-list">
                <li class="first-item">章节目录</li>
                <li class="list-item" v-for="(item, index) in items" :key="index" @click="goDetail(index)">
                    {{ item.title }}
                    <i class="to-detail-icon"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {title: "第一章 新朝旧人"},
                {title: "第二章 南北之争"},
                {title: "第三章 大惧罗"},
                {title: "第四章 同窗聚"},
                {title: "第五章 修行者"},
            ]
        }
    },
    methods: {
        goDetail() {
            location.href = "/ticket/"
        },
        backPage() {
            this.$router.push({name:'firstPage'})
        },
    },
}
</script>
<style lang="less">
    .detail-box {
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        background: url("../../assets/image/bg_img.png") no-repeat top;
        background-size: 100%;
        .back-icon {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 12px;
            top: 32px;
            background: url("../../assets/image/icon_arrow_right_gray_s@2x.png") no-repeat center;
            background-size: 24px 24px;
            transform: rotate(180deg);
        }
        .title {
            font-size: 20px;
            line-height: 28px;
            font-weight: 600;
            color: white;
            position: absolute;
            left: 22px;
            top: 68px;
            height: 28px;
            .tag {
                display: inline-block;
                width:30px;
                height:16px;
                background:rgba(0,0,0,1);
                border-radius:14px;
                opacity:0.5;
                font-size: 10px;
                font-weight: normal;
                line-height: 18px;
                text-align: center;
                margin-top: 6px;
                position: absolute;
                top: 50%;
                left: 140px;
                margin-top: -8px;
            }
        }
        .star-box {
            position: absolute;
            top: 106px;
            left: 38px;
            .star {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url("../../assets/image/icon_star.png") no-repeat center;
                background-size: 20px 20px;
            }
        }
        .content-box {
            width:282px;
            background:rgba(255,255,255,1);
            border-radius:12px;
            margin: 147px auto 23px;
            padding: 20px 24px 26px;
            box-shadow: 0px 0px 5px 5px rgba(190, 189, 189, 0.3);
            .instruct {
                width:282px;
                height:72px;
                font-size:12px;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:18px;
            }
            .info-box {
                font-size: 12px;
                color: #999999;
                position: relative;
                &>div {
                    display: inline-block;
                    line-height: 17px;
                }
                .person {
                    position: absolute;
                    top: 0;
                    right: 65px;
                    padding-right: 6px;
                    background: url("../../assets/image/icon_line.png") no-repeat center
                    right ~"/" 1px 6px;
                }
                .comment {
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                .data {
                    color: #666;
                }
            }
            .start-read {
                width: 156px;
                height: 46px;
                background:rgba(75,110,235,1);
                border-radius:23px;
                margin: 24px auto 0;
                color: #fff;
                font-size: 16px;
                font-weight: 500;
                line-height: 46px;
                text-align: center;
                margin-bottom: 18px;
                box-shadow: 0px 12px 20px 0px rgb(189, 203, 250);
            }
            .contents-list {
                line-height: 37px;
                color:#52525D;
                font-size: 14px;
                .first-item {
                    color: #333;
                    font-weight: 600;
                }
                li {
                    border-bottom: 1px solid #D8D8D8;
                }
                .list-item {
                    position: relative;
                    .to-detail-icon {
                        width: 13px;
                        height: 13px;
                        background: url("../../assets/image/icon_arrow_right_gray_s(1).png") no-repeat center;
                        background-size: 12px 12px;
                        position: absolute;
                        top: 12px;
                        right: 3px;
                    }
                }
            }
        }
    }
</style>