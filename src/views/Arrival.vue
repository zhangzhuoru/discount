<template>
  <div class="arrival">
    <div class="arrivalbox">
      <div class="arrivalTitle">查询须知</div>
      <div class="arrivalTitleEnglish">points to note</div>
      <div class="arrivalText">
        根据自己所使用的运营商点击入口进行查询，
        <span class="uni-text"><span>联通、移动</span></span>
        点击入口后会自动跳转官方运营商登录页面先通过验证码登录就可以直接查询到号码的充值记录。
        <span class="uni-text"><span>（电信需要拨打人工客服）</span></span>
      </div>
      <div class="serviceList">
        <div class="service">
          <div class="pngbox">
            <van-image lazy-load
              src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/icon/arrival01.png" />
          </div>
          <div class="serviceName">中国联通</div>
          <div class="serviceBtn" @click="goto(1)">立即查询</div>
        </div>
        <div class="service">
          <div class="pngbox">
            <van-image lazy-load
              src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/icon/arrival02.png" />
          </div>
          <div class="serviceName">中国移动</div>
          <a target="_blank" href="http://wx.10086.cn/website/bind/bindAccount/new">
            <div class="serviceBtn" >立即查询</div>
          </a>
        </div>
        <div class="service">
          <div class="pngbox">
            <van-image lazy-load
              src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/icon/arrival03.png" />
          </div>
          <div class="serviceName">中国电信</div>
          <div class="serviceBtn" @click="goto(3)">立即查询</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        test: 1,
        msg: '123123',
      }
    },
    methods: {
      goto( title) {
        if(title==1){
          Toast('中国联通查询');
          window.open('http://uac.10010.com/oauth2/new_auth?display=wap&page_type=05&app_code=ECS_UPAY_WAPQUERY&redirect_uri=https://upay.10010.com/upay-wap/query/')
        }
        // if(title==2){
        //   Toast('中国移动查询');
        //   window.open('http://wx.10086.cn/website/bind/bindAccount/new')
        // }
        else{
          Toast('请拨打人工客服查询');
        }

      },
    },
    components: {}
  }
</script>
<style lang="less" scoped>
  .arrival {
    padding: 20px 12px;
    background: #f5f5f5;
    box-sizing: border-box;
    text-align: left;
    height: 100vh;
    .arrivalbox {
      width: 290px;
      padding: 35px 30px;
      background: #fff;
    }

    .arrivalTitle {
      font: 600 16px/16px simhei;
      color: #3c3c3c;
    }

    .arrivalTitleEnglish {
      font: 9px/13px simhei;
      color: #3c3c3c;
    }

    .arrivalText {
      font: 13px/19px simhei;
      color: #6f6f6f;
      padding: 12px 0;
    }

    .arrivalText .uni-text {
      color: #ff1d30;
    }

    .serviceList {
      width: 290px;
      display: flex;
      justify-content: space-between;
    }

    .service {
      width: 68px;
      text-align: center;
      padding-top: 30px;
    }

    .pngbox {
      width: 41px;
      height: 41px;
      margin: 0 13px;
    }

    .serviceName {
      font: 11px/11px simhei;
      padding: 10px 0;
      color: #3c3c3c;
    }

    .serviceBtn {
      width: 68px;
      height: 24px;
      border-radius: 12px;
      background: -webkit-linear-gradient(359deg, #4e4d4e, #262320);
      background: linear-gradient(91deg, #4e4d4e, #262320);
      font: 600 12px/24px simhei;
      color: #fbe6c3;
    }
  }
</style>
