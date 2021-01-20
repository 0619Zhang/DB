<template>
  <div class="header1Wrap">
    <input type="text" placeholder="请输入要搜索的内容" />
    <img src="/img/ic_group_search_small.png" alt class="search" />
    <img src="/img/ic_chat_white.png" alt class="chat" />
    <img src="/img/ic_scan_gray.png" alt class="scan" />
  </div>
</template>
<style lang="less" scoped>
.header1Wrap {
  width: 100%;
  height: 0.5rem;
  background-color: #42c055;
  position: fixed;
  top: 0;
  input {
    width: 85%;
    height: 0.3rem;
    border: none;
    outline: none;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    border-radius: 0.06rem;
    background-color: #fff;
    text-indent: 3em;
  }
  img {
    height: 0.24rem;
    height: 0.24rem;
    position: absolute;
    top: 0.13rem;
  }
  .search {
    left: 0.2rem;
  }
  .scan {
    right: 15%;
    height: 0.22rem;
    top: 0.14rem;
  }
  .chat {
    right: 0.1rem;
  }
}
</style>