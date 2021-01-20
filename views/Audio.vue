<template>
    <div class="audioWrap">
        <div class="header">
            <myheader2>
                <span slot="title">书影音</span>
                <img src="/img/ic_actionbar_search_icon.png" alt="" slot="leftImg" class="leftImg">
                <img src="/img/ic_chat_green.png" alt="" slot="rightImg" class="rightImg">
            </myheader2>
        </div>
        <ul class="nav">
            <li v-for="(item,index) in audiolist" :key="index" @click="change(index)" :class="{active:item.flag}">
                <router-link :to='item.url'>{{item.title}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import myheader2 from '@/components/head/header2'
export default {
    data(){
        return{
            audiolist:[
                {title:'电影',url:'movie',flag:true},
                {title:'读书',url:'read',flag:false},
                {title:'电视',url:'tv',flag:false},
                {title:'同城',url:'city',flag:false},
                {title:'音乐',url:'music',flag:false},
            ]
        }
    },
    components:{
        myheader2:myheader2
    },
    methods:{
        change(index){
            for(var i=0;i<this.audiolist.length;i++){
                this.audiolist[i].flag=false
                
            }
            this.audiolist[index].flag=true
        }
    }
}
</script>

<style lang="less" scoped>
  .audioWrap {
    width: 100%;
    .header {
      width: 100%;
      margin-bottom: 0.5rem;
    }
    .nav {
      width: 100%;
      display: flex;
      border-bottom: 2px solid #d8d8d8;
      li {
        font-size: 0.2rem;
        flex:1;
        text-align: center;
        line-height: 0.4rem;
      }
      li.active {
        a {
          color:#42C055;
        }
        border-bottom: 2px solid #42C055;
      }
    }
  }
</style>
