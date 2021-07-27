<template>
  <div class="home">
    <van-search
      v-model="value"
      show-action
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @click="onCancel"
    >
      <template #action>
        <div @click="onCancel">搜索</div>
      </template>
    </van-search>
    <div class="test">
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab title="影视娱乐">
          <div class="ftitle">影视娱乐</div>
          <div class="fbox">
            <van-grid square :border="false" icon-size="41">
              <van-grid-item
                v-for="(value, index) in video"
                :key="index"
                :icon="value.url"
                :text="value.text"
                to="/recharge"
              />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="音乐阅读">
          <div class="ftitle">音乐阅读</div>
          <div class="fbox">
            <van-grid square :border="false" icon-size="41">
              <van-grid-item
                v-for="(value, index) in music"
                :key="index"
                :icon="value.url"
                :text="value.text"
                to="/recharge"
              />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="生活美食">
          <div class="ftitle">生活美食</div>
          <div class="fbox">
            <van-grid square :border="false" icon-size="41">
              <van-grid-item
                v-for="(value, index) in food"
                :key="index"
                :icon="value.url"
                :text="value.text"
                to="/recharge"
              />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="虚拟货币">
          <div class="ftitle">虚拟货币</div>
          <div class="fbox">
            <van-grid square :border="false" icon-size="41">
              <van-grid-item
                v-for="(value, index) in coin"
                :key="index"
                :icon="value.url"
                :text="value.text"
                to="/recharge"
              />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="交通出行">
          <div class="ftitle">交通出行</div>
          <div class="fbox">
            <van-grid square :border="false" icon-size="41">
              <van-grid-item
                v-for="(value, index) in work"
                :key="index"
                :icon="value.url"
                :text="value.text"
                to="/recharge"
              />
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item name="home" icon="shop" replace to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="diamond" replace to="/vip"
        >影视会员</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="fire" replace to="/live"
        >生活缴费</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="manager" replace to="/mine"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      active: "home",
      video: [
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/58befd785d4e60a6db732814efcbf2a0.png",
          text: "优酷土豆",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/912e820254b681e21568de2e7ece646f.png",
          text: "芒果TV",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/4adb785258d601d1f76b5e8a4dbb5770.png",
          text: "迅雷会员",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/5c3f26b88f234712f9eab0864fa5c855.png",
          text: "搜狐视频",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/7a94122700ed00417afde67b9f94a43d.png",
          text: "哔哩哔哩",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/145d8efd979eae6117eaaa033005c864.png",
          text: "南瓜影视",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/d6057ce53eb4ad6a2a392350b524392c.png",
          text: "PPTV",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/fe943f79069eac098f92461906f3ece6.png",
          text: "1905会员",
        },
      ],
      music: [
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/8d7a940d2f288a62f2ff1ddbe4aa45bc.png",
          text: "QQ音乐",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/c7e6b407f57bea928640003a726eeeda.png",
          text: "酷狗会员",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/9cf791e4b176e962047373c79eeaab8a.png",
          text: "酷我音乐",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/c630d513cf738d195a1adb5b1f1ffadf.png",
          text: "网易云音乐",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/757d89cc81bead4152027759522c90e3.png",
          text: "喜马拉雅",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/5a291f6cb495785752744fae5efafb7f.png",
          text: "掌阅阅读",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/5b79e9590ab23129d990a6acdbb8a814.png",
          text: "樊登读书",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/983e3a4981035a4b579e9cb2a8a20d3c.png",
          text: "知乎",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/478c307439d312c5c6c72331b84ad63c.png",
          text: "凯叔讲故事",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/983e3a4981035a4b579e9cb2a8a20d3c.png",
          text: "懒人听书",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/e425f7b5608aca8dfcda17b4470bd5c9.png",
          text: "QQ读书币",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/ade1fef2d2b115cee052736e20413a5d.png",
          text: "QQ阅读",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210608/6a9d648c9e037beb8ffe4e289af92f14.png",
          text: "WPS",
        },
      ],
      food: [
        {
          url: "https://wx.bidian.cloud/addons/hc_recharge/template/mobile/img/goods_4.png",
          text: "e袋洗",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/2e0b01b1a72cf3020fe358e60c89a089.png",
          text: "作业帮",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/a7cc9c9646d49e886482e707412fd9e2.png",
          text: "百度网盘",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/9dd841d7188ce514ca49b61bae3bb0cb.png",
          text: "新浪微博",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/dd52404c88fb28d89195107e0f328265.png",
          text: "腾讯文学",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210510/309d4485de7d9c35de8cc54b3b880d18.png",
          text: "美团外卖",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/a25699158420d927c6123a67ae236c56.png",
          text: "饿了么",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/c1732cdbd7c1e8860194d22f5ee60916.png",
          text: "瑞幸咖啡",
        },
      ],
      coin: [
        {
          url: "https://wx.bidian.cloud/addons/hc_recharge/template/mobile/img/goods_2.png",
          text: "腾讯",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/6b88faea21f7eac6a78147a2d63f4501.png",
          text: "花椒",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/1f898d69ee16a5524de7bfa6db6530a3.png",
          text: "QQ红钻",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/1f898d69ee16a5524de7bfa6db6530a3.png",
          text: "QQ蓝钻",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/f8f047122709f531d7809e1b1b2c701c.png",
          text: "QQ豪华黄钻",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/d7f898093a5e32e333cb7a3e5f17b5f4.png",
          text: "QQ普通会员",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/d7f898093a5e32e333cb7a3e5f17b5f4.png",
          text: "QQ超级会员",
        },
      ],
      work: [
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/309d4485de7d9c35de8cc54b3b880d18.png",
          text: "美图单车",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210510/880206eb45f62dde5ab62db44f31b418.png",
          text: "keep",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/40258041cafb9098920724e787bbea1b.png",
          text: "青桔单车",
        },
        {
          url: "https://rlk5a13fe.66bbn.com/uploads/20210428/a25699158420d927c6123a67ae236c56.png",
          text: "哈啰出行",
        },
      ],
    };
  },
  mounted() {
    // console.log(document.querySelector(".page-header").offsetHeight)//获取导航条的高度
    // this.navbarHeight = Number(document.querySelector(".page-header").offsetHeight);//吸顶的距离
  },
  methods: {
    onCancel() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="less" scoped>
.test {
  padding-bottom: 50px;
}
.fenlei {
  height: 58px;
  background-color: #fff;
  border-radius: 6px;
  margin: 1px auto 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 16px 17px;
}
.fitem {
  min-width: 68px;
  font-size: 13px;
  color: #5b5b5b;
  text-align: center;
  height: 26px;
  line-height: 26px;
}
.factive {
  max-width: 76px;
  height: 26px;
  line-height: 26px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  color: #f1d2a9;
  background-color: #333;
  border-radius: 13px;
}
.ftitle {
  font-size: 13px;
  color: #1e1e1e;
  padding-left: 28px;
  padding-top: 15px;
  text-align: left;
}
.fbox {
  padding: 0 14px;
}
</style>
