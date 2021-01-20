<template>
    <div class="header2Wrap">
        <span><slot name="title"></slot></span>
        <span class="leftImg"><slot name="leftImg"></slot></span>
        <span class="rightImg"><slot name="rightImg"></slot></span>
    </div>
</template>
<style lang="less" scoped>
    .header2Wrap {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        background-color: #f7f7f7;
        position: fixed;
        top:0;
        border-bottom: 1px solid #ccc;
        img {
            height: 0.24rem;
            position: absolute;
            top:0.13rem;
        }
        .leftImg {
            right:0.5rem;
        }
        .rightImg {
            right:0.1rem;
        }
    }
</style>