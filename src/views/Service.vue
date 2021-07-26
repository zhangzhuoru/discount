<template>
  <div class="service">
    <div class="servicebox">
      <van-image
        lazy-load
        src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/img/service.442edbe8.png"
      />
    </div>
    <div  class="serviceitem">
        <div  class="serviceCode">
            <van-image
                lazy-load
                src=""
            />
        </div>
        <div  class="servicetext">长按识别二维码添加客服微信</div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

import png1 from "@/assets/img/test.jpg";
import png2 from "@/assets/img/test2.jpg";
export default {
  data() {
    return {
      test: 1,
      msg: "123123",
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
  },
  components: {},
};
</script>
<style lang="less" scoped>
.service {
    background: #f5f5f5;
    height: 100vh;
  .servicebox {
    width: 100%;
    height: 145px;
  }
  .serviceitem{
    width: 350px;
    padding: 20px 0;
    background: #fff;
    border-radius: 6px;
    margin: -25px auto 0;
    position: relative;
    z-index: 99;
  }
  .serviceCode {
    width: 100px;
    height: 100px;
    margin: 10px auto;
}
.servicetext {
    width: 90px;
    padding: 0 130px;
    font: 13px/18px simhei;
    color: #616161;
    text-align: center;
}
}
</style>
