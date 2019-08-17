<template>
    <div class="item-box">
        <div class="cover-box-item"></div>
        <div class="title">
            《煞气横秋》
        </div>
        <div class="item-title">
            第6章 王者归来
        </div>
        <div class="star-box">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
        </div>
        <button class="btn">开始阅读</button>
        <div class="cover-img-active"></div>
    </div>
</template>
<style lang="less" scoped>
.item-box {
    height: 284px;
    position: relative;
    background: url("../assets/image/img_book_02.png") no-repeat center;
    background-color: rgb(240, 203, 203, .2);
    background-size: cover;
    .cover-box-item {
        background-color: rgba(255, 255, 255, .6);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .title {
        width: 154px;
        height: 30px;
        font-size: 22px;
        line-height: 30px;
        font-weight: 500;
        color: #8a8686;
        text-align: center;
        position: absolute;
        top: 91px;
        left: 23px;
    }
    .item-title {
        width:140px;
        height:20px;
        font-size:14px;
        font-weight:500;
        color: #8a8686;
        line-height:20px;
        position: absolute;
        left: 33px;
        top: 128px;
    }
    .star-box {
        position: absolute;
        top: 155px;
        left: 33px;
        .star {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../assets/image/icon_star.png") no-repeat center;
            background-size: 20px 20px;
        }
    }
    .btn {
        width: 84px;
        height: 30px;
        border-radius:18px;
        background-color: #fff;
        text-align: center;
        line-height: 30px;
        border: 0;
        color: #242B53;
        position: absolute;
        left: 33px;
        top: 190px;
        outline: none;
    }
    .cover-img-active {
        width: 106px;
        height: 146px;
        position: absolute;
        background: url("../assets/image/img_book_02.png") no-repeat center;
        right: 15px;
        top: 82px;
        background-color: #fff;
        background-size: 106px 146px;
        border-radius: 4px;
    }
}
    
</style>