<template>
    <div class="homeWrap">
        <!-- 头部 -->
        <div class="header">
            <myheader1></myheader1>
        </div>
        <!-- 轮播区域 -->
         <swiper :options="swiperOption">
             <swiper-slide v-for="(item,index) in lblist" :key="index" class="lb">
                 <img :src="'img/'+item" alt="">
             </swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
         </swiper>
         <!-- 热点区域 -->
         <h4 class="hotTitle">热点</h4>
         <ul class="hotContent">
             <li v-for="(item,index) in hotlist" :key="index">
                 <div class="hot_left">
                     <h3>{{item.title}}</h3>
                     <p>{{item.target.desc}}</p>
                     <p class="author">作者：{{item.target.author.name}}</p>
                 </div>
                 <div class="hot_right">
                     <img :src="item.target.cover_url" alt="">
                 </div>
             </li>
             <div class="kong"></div>
         </ul>
    </div>
</template>
<script>
import myheader1 from '@/components/head/header1'
export default {
    data(){
        return{
            lblist:['01.jpg','02.jpg','03.jpg'],
            hotlist:[],
             swiperOption: {
    　　pagination: {
    　　　　el: '.swiper-pagination',
    　　　　clickable: true // 允许点击小圆点跳转
    　　},
    　　autoplay: {
    　　　　delay: 3000,
    　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
    　　},
    　　loop: true,
    　　navigation: {
    　　　　nextEl: '.swiper-button-next',
    　　　　prevEl: '.swiper-button-prev'
    　　}
      }
        }
    },
    components:{
        myheader1:myheader1
    },
    methods:{
        getData(){
            this.axios.get('/data/homeData.json').then((res)=>{
                console.log(res.data.recommend_feeds)
                this.hotlist=res.data.recommend_feeds
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style lang="less" scoped>
.homeWrap {
  width: 100%;
  .header {
    width: 100%;
    height: 0.5rem;
  }
  .lb {
    width: 100%;
    img {
      width: 100%;
    }
  }
  // 热点区域
  .hotTitle {
    color:#f60;
    padding-left: 0.2rem;
    border-left: 3px solid #f60;
    margin: 0.1rem 0;
  }
  .hotContent {
    .kong{
      height: 0.7rem;
    }
    li {
      border-bottom: 1px solid #efefef;
      display: flex;
      padding: 0.2rem 0.1rem;
      
      .hot_left {
        flex:7;
        h3 {
        font-size: 0.16rem;
        margin-bottom: 0.05rem;
        }
        p {
          line-height: 0.2rem;
        }
        .author {
          color:#888;
          font-size: 0.12rem;
        }
      }
      .hot_right {
        flex:3;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
