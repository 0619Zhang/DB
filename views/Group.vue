<template>
  <div class="groupWrap">
    <div class="header">
      <myheader2>
        <span slot="title">小组</span>
        <img src="/img/ic_actionbar_search_icon.png" alt slot="leftImg" class="leftImg" />
        <img src="/img/ic_chat_green.png" alt slot="rightImg" class="rightImg" />
      </myheader2>
    </div>
    <div class="boddy">
      <div class="kong"></div>

      <!-- 新闻速报 -->
      <div class="title">
        <span>新闻速报</span>
      </div>

      <ul class="zhanShi">
        <li v-for="(item,index) in groupList" :key="index">
          <div class="item">
            <img :src="item.group_list[0].img_url"  @error="nofind()"/>
            {{item.group_list[0].group_name}}
            <span style="color:grey">{{item.group_list[0].group_member}}</span>
            <p class="linetext" style="color:grey">{{item.group_list[0].topic_title}}</p>
          </div>
        </li>
      </ul>
        
      <div class="more1">
        <a href="#">更多相关小组</a>
      </div>

      <!-- 热门小组 -->
         <div class="title">
        <span>热门小组</span>
      </div>

      <ul class="zhanShi">
        <li v-for="(item,index) in groupList2" :key="index">
          <div class="item">
            <img :src="item.group_list[1].img_url"  @error="nofind()"/>
            {{item.group_list[1].group_name}}
            <span style="color:grey">{{item.group_list[1].group_member}}</span>
            <p class="linetext" style="color:grey">{{item.group_list[1].topic_title}}</p>
          </div>
        </li>
      </ul>
        
      <div class="more1">
        <a href="#">更多热门小组</a>
      </div>

    <!-- 影视 -->
         <div class="title">
        <span>影视</span>
      </div>

      <ul class="zhanShi">
        <li v-for="(item,index) in groupList3" :key="index">
          <div class="item">
            <img :src="item.group_list[2].img_url"  @error="nofind()" />
            {{item.group_list[2].group_name}}
            <span style="color:grey">{{item.group_list[2].group_member}}</span>
            <p class="linetext" style="color:grey">{{item.group_list[2].topic_title}}</p>
          </div>
        </li>
      </ul>
        
      <div class="more1">
        <a href="#">更多影视</a>
      </div>

        <div class="kong2">

        </div>
    </div>
  </div>
</template>

<script>
import myheader2 from "@/components/head/header2";
export default {
  data() {
    return {
      groupList: [],
      groupList2: [],
      groupList3: [],
    };
  },
  components: {
    myheader2: myheader2,
  },
  methods: {
    getData() {
      this.axios.get("/groupData.json").then((res) => {
        console.log(res.data.group);
        this.groupList = res.data.group;
      });
    },
    getData2() {
      this.axios.get("/groupData.json").then((res) => {
        console.log(res.data.group);
        this.groupList2 = res.data.group;
      });
    },
    getData3() {
      this.axios.get("/groupData.json").then((res) => {
        console.log(res.data.group);
        this.groupList3 = res.data.group;
      });
    },
    nofind() {
      let img = event.srcElement;
      img.src = "/img/advater.jpg";
      img.onerror = null;
    },
  },
  mounted() {
    this.getData();
    this.getData2();
    this.getData3();
  },
};
</script>

<style lang="less" scoped>
.boddy {
  width: 100%;
//   position: relative;
  .kong {
    height: 0.5rem;
  }
  .kong2 {
    height: 0.7rem;
  }
  .title {
    padding: 0.2rem;
    //   font-size: 0.2rem;
    //   border: 1px solid black;
    span {
      font-size: 0.2rem;
    }
  }
  .zhanShi {
    //   position: absolute;

    li {
      // display: flex;
      // flex-wrap: wrap;
      width: 100%;
      padding: 0.1rem;
      border-bottom: 1px solid rgb(199, 199, 199);

      .item {
        width: 100%;
        img {
          width: 0.5rem;
          vertical-align: middle;
          // flex: 9;
        }
        span {
          float: right;
          line-height: 0.5rem;
        }
        p {
          word-break: keep-all;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .more1 {
    width: 100%;
    text-align: center;
    margin-top: 0.1rem;
    a {
      color: rgb(3, 187, 3);
      font-size: 0.15rem;
    }
  }
}
</style>>