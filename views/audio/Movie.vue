<template>
  <div class="movieWrap">
    <div class="in_theaters">
      <p class="title">正在上映的电影-北京</p>
      <swiper :options="swiperOption">
        <swiper-slide v-for="x in parseInt(in_theaters.length/3)+1" :key="x">
          <div class="item" v-if="(x-1)*3<=19">
            <img :src="in_theaters[(x-1)*3].images.small" @error="nofind()" />
            <p>{{in_theaters[(x-1)*3].title}}</p>
            <p class="rating">评分：{{in_theaters[(x-1)*3].rating.average}}</p>
          </div>
          <div class="item" v-if="(x-1)*3+1<=19">
            <img :src="in_theaters[(x-1)*3+1].images.small" @error="nofind()" />
            <p>{{in_theaters[(x-1)*3+1].title}}</p>
            <p class="rating">评分：{{in_theaters[(x-1)*3+1].rating.average}}</p>
          </div>
          <div class="item" v-if="(x-1)*3+2<=19">
            <img :src="in_theaters[(x-1)*3+2].images.small" @error="nofind()" />
            <p>{{in_theaters[(x-1)*3+2].title}}</p>
            <p class="rating">评分：{{in_theaters[(x-1)*3+2].rating.average}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>


    <div class="comming_soon">
      <p class="title">即将上映的电影</p>
      <swiper :options="swiperOption">
        <swiper-slide v-for="x in parseInt(comming_soon.length/3)+1" :key="x">
          <div class="item" v-if="(x-1)*3<=19">
            <img :src="comming_soon[(x-1)*3].images.small" @error="nofind()" />
            <p>{{comming_soon[(x-1)*3].title}}</p>
            <!-- <p class="rating">评分：{{comming_soon[(x-1)*3].rating.average}}</p> -->
          </div>
          <div class="item" v-if="(x-1)*3+1<=19">
            <img :src="comming_soon[(x-1)*3+1].images.small" @error="nofind()" />
            <p>{{comming_soon[(x-1)*3+1].title}}</p>
            <!-- <p class="rating">评分：{{comming_soon[(x-1)*3+1].rating.average}}</p> -->
          </div>
          <div class="item" v-if="(x-1)*3+2<=19">
            <img :src="comming_soon[(x-1)*3+2].images.small" @error="nofind()" />
            <p>{{comming_soon[(x-1)*3+2].title}}</p>
            <!-- <p class="rating">评分：{{comming_soon[(x-1)*3+2].rating.average}}</p> -->
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      in_theaters: [],
      comming_soon: [],
    };
  },
  methods: {
    getData() {
      this.axios.get("https://www.fastmock.site/mock/d1edabfe7b01993c6e2fbebe84504d44/douban/in_theaters").then((res) => {
          console.log(res.data.subjects);
          this.in_theaters = res.data.subjects;
        });
    },
    getShuju(){
      this.axios.get("https://www.fastmock.site/mock/d1edabfe7b01993c6e2fbebe84504d44/douban/coming_soon").then((res)=>{
        console.log(res.data.subjects);
        this.comming_soon=res.data.subjects
      })
    },
    nofind() {
      let img = event.srcElement;
      img.src = "/img/advater.jpg";
      img.onerror = null;
    },
  },
  mounted() {
    this.getData();
    this.getShuju();
  },
};
</script>

<style lang="less" scoped>
.movieWrap {
  width: 100%;
  padding-left: 0.1rem;
  .in_theaters {
    width: 100%;
    .title {
      padding-left: 0.1rem;
      line-height: 0.4rem;
      font-size: 0.18rem;
    }
    .swiper-slide {
      display: flex;
      .item {
        flex: 1;
        text-align: center;
      }
      img {
        width: 0.96rem;
        height: 1.2rem;
      }
    }
  }
  .comming_soon {
    width: 100%;
    .title {
      padding-left: 0.1rem;
      line-height: 0.4rem;
      font-size: 0.18rem;
    }
    .swiper-slide {
      display: flex;
      .item {
        flex: 1;
        text-align: center;
      }
      img {
        width: 0.96rem;
        height: 1.2rem;
      }
    }
  }
}
</style>