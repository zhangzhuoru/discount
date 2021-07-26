<template>
  <div class="search">
    <van-search
      v-model="value"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div>搜索</div>
      </template>
    </van-search>
    <div class="location" >
      <div class="lately" v-if="sclist.length>0">
        <div class="latelyTop">
          <div>最近搜索</div>
          <div class="latelybox" @click="sclist=[]">
            <van-image
              lazy-load
              src="data:image/png;base64,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"
            />
          </div>
        </div>
        <div class="latelyList">
          <div class="latelyBtn" v-for="(item,index) in sclist" :key="index" @click="search(item)">{{item}}</div>
        </div>
      </div>
      <div class="lately" style="padding-bottom: 48px">
        <div class="latelyTop"><div>搜索发现</div></div>
        <div class="latelyList">
          <div class="latelyBtn" v-for="(item,index) in hotlist" :key="index" @click="addhot(item)">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      test: 1,
      msg: "123123",
      value: "",
      sclist:[],
      hotlist:['话费','腾讯视频','网易云音乐','芒果TV','滴滴出行','肯德基']
    };
  },
  methods: {
    onSearch(title) {
      Toast(title);
    },
    search(title) {
      Toast(title);
    },
    addhot(hot){
      this.sclist.push(hot)
    }
  },
};
</script>
<style lang="less" scoped>
.search {
  background: #f5f5f5;
  padding-bottom: 20px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  .scbox {
    width: 100%;
    height: auto;
  }
  .location {
    padding: 0 9px;
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 999;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
  }
  .latelyTop {
    display: flex;
    justify-content: space-between;
    font: 600 15px/15px simhei;
    color: #272727;
    padding-bottom: 12px;
  }
  .lately {
    width: 340px;
    padding-top: 28px;

    .latelybox {
      width: 14px;
      height: 15px;
    }
    .latelyList {
      display: flex;
      flex-wrap: wrap;
    }
    .latelyBtn {
      padding: 0 10px;
      font: 12px/24px simhei;
      color: #181818;
      background: #f5f5f5;
      border-radius: 12px;
      margin: 7px 14px 7px 0;
    }
  }
}
</style>
