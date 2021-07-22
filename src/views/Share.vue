<template>
  <div class="share">
    <div class="footbox">
      <van-image lazy-load
        src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/img/shareBg.d82ac7aa.png" />
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in pictureList" :key="index">
        <img class="more-img" :src="item" @click="HandleclickImg(index)" />
      </van-swipe-item>
    </van-swipe>
    <div class="twobtn">
        <div class="btn1 btn">长按保存</div>
        <div class="btn2 btn">返回上页</div>
    </div>
  </div>
</template>
<script>
  import {
    Toast
  } from "vant";
  import {
    ImagePreview
  } from "vant";
  import png1 from "@/assets/img/test.jpg";
  import png2 from "@/assets/img/test2.jpg";
  export default {
    data() {
      return {
        test: 1,
        msg: "123123",
        pictureList: [png1, png2],
      };
    },
    methods: {
      goto(title) {
        if (title == 1) {
          Toast("中国联通查询");
          window.open(
            "http://uac.10010.com/oauth2/new_auth?display=wap&page_type=05&app_code=ECS_UPAY_WAPQUERY&redirect_uri=https://upay.10010.com/upay-wap/query/"
          );
        }
        // if(title==2){
        //   Toast('中国移动查询');
        //   window.open('http://wx.10086.cn/website/bind/bindAccount/new')
        // }
        else {
          Toast("请拨打人工客服查询");
        }
      },
      HandleclickImg(index) {
        ImagePreview({
          images: [png1, png2],
          startPosition: index,
          onClose() {
            // do something
          },
        });
      },
    },
    components: {},
  };
</script>
<style lang="less" scoped>
  .share {
    .footbox {
      width: 100%;
      height: 319px;
      position: fixed;
      bottom: 0;

      .van-image {
        height: 100%;
      }
    }

    .my-swipe {
      height: 474px;
      width: 266px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .twobtn {
      width: 273px;
      height: 16px;
      padding: 11px 0;
      margin: 33px auto 0 auto;
      background: #fff;
      display: flex;
      border-radius: 6px;
      position: relative;
      z-index: 2;

      .btn {
        width: 50%;
        height: 16px;
        display: flex;
        justify-content: center;
        font: 14px/16px simhei;
        color: #3c3c3c;
      }
      .btn1{
        border-right: 1px solid #3c3c3c;
      }
    }
  }
</style>
