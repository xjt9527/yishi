<template>
    <div class="header-box">
        <div class="icon-menu"></div>
        <input type="text" class="search-box" placeholder="搜索本地或书城">
        <div class="icon-search"></div>
        <div class="icon-user"></div>
    </div>
</template>
<style lang="less">
input::-webkit-input-placeholder{
    color:#b4c1f1;
}
.header-box {
    position: relative;
    text-align: center;
    width: 100%;
    .icon-menu {
        width: 28px;
        height: 28px;
        position: absolute;
        left: 13px;
        top: 0;
        background: url("../assets/image/icon_menu.png") no-repeat center;
        background-size: 24px 24px;
    }
    .search-box {
        width: 233px;
        height: 28px;
        border-radius: 14px;
        background-color: rgba(0, 0, 0, .2);
        border: 0;
        outline: none;
        color: rgb(233, 227, 227);
        padding-left: 33px;
        position: relative;

    }
    .icon-search {
        display: block;
        width: 17px;
        height: 17px;
        background: url("../assets/image/icon_search.png") no-repeat center;
        background-size: 17px 17px;
        position: absolute;
        left: 55px;
        top: 6px;
    }
    .icon-user {
        width: 28px;
        height: 28px;
        position: absolute;
        right: 13px;
        top: 0;
        background: url("../assets/image/icon_user.png") no-repeat center;
        background-size: 24px 24px;
    }
}
</style>