<template>
  <div class="broadcastWrap">
    <div class="header">
      <myheader2>
        <span slot="title">广播</span>
        <img src="/img/ic_status_search_user.png" alt slot="leftImg" class="leftImg" />
        <img src="/img/ic_chat_green.png" alt slot="rightImg" class="rightImg" />
      </myheader2>
    </div>
    <div class="kong"></div>
    <!-- 登录后发广播 -->
    <div class="dengru">
      <div>
        <img src="/img/user_normal.jpg" alt />
        <span>登录发广告</span>
      </div>
    </div>
    <!-- 正文内容 -->
    <div class="content">
      <ul>
        <li v-for="(item,index) in conList" :key="index">
          <img src="/img/advater.jpg" alt />
          <div class="title">
            <span>豆瓣</span>&nbsp;<span style="color:grey">写了日记</span>
            <br />
            <span style="color:grey">ID:{{item.id}}</span>
         </div>
         <div class="pinLun">
            {{item.target.desc}}
         </div>
         <div class="k">

         </div>
        </li>
      </ul>
    </div>
    <div class="kong2">

    </div>
  </div>
</template>
<script>
import myheader2 from "@/components/head/header2";
export default {
  data() {
    return {
      conList: []
    };
  },
  components: {
    myheader2: myheader2
  },
  methods:{
      getData(){
          this.axios.get('/data/homeData.json').then((res)=>{
              console.log(res.data.recommend_feeds);
              this.conList=res.data.recommend_feeds
          })
      }
  },
  mounted(){
      this.getData();
  }
};
</script>

<style lang="less" scoped>
.kong {
  height: 0.5rem;
}
.kong2{
     height: 0.7rem;
}
.dengru {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid rgb(219, 219, 219);
  div {
    margin: 0.1rem 0.2rem;
    img {
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      color: rgb(185, 184, 184);
      font-size: 0.15rem;
      margin-left: 0.1rem;
    }
  }
}
.content {
  li {
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    border-bottom: 1px solid rgb(197, 197, 197);
    img {
      border-radius: 50%;
      width: 0.45rem;
    }
    .title{
        margin-left: 0.6rem;
        margin-top: -0.4rem;
    }
    .pinLun{
        width: 60%;
        color: grey;
        background-color: rgb(241, 241, 241);
        margin-left: 0.6rem;
        margin-top: 0.05rem
    }
    .k{
        height: 0.1rem
    }
  }
}
</style>