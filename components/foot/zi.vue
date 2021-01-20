<template>
    <div class="itemWrap">
        <img :src="'/img/'+item.n_img" alt="" v-if="!item.flag">
        <img :src="'/img/'+item.a_img" alt="" v-else>
        <br>
        <span :class="{active:item.flag}">{{item.title}}</span>
    </div>
</template>
<script>
export default {
    props:['item']
}   
</script>
<style lang="less" scoped>
    .itemWrap {
        width: 100%;
        text-align: center;
        color: #666;
        img {
            width: 60%;
        }
    }
    .active {
        color:#42C055;
    }
</style>