<template>
  <div class="live">
    <van-image
      lazy-load
      src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/img/lift_bg.8d1bca84.png"
    />
    <div class="cardbox">
      <div class="cardhearder">
        <div :class="cindex==1?'rechargeBtn btnActive':'rechargeBtn'" @click="cindex=1">
          <div class="rechargeText">9.28折特惠慢充</div>
          <div class="rechargeHot hotActive">火爆热销中</div>
        </div>
        <div :class="cindex==2?'rechargeBtn btnActive':'rechargeBtn'" @click="cindex=2">
          <div class="rechargeText">9.85折快速充值</div>
          <div class="rechargeHot">热销中</div>
        </div>
      </div>
      <div class="phone">
        <div class="phoneErr">请输入正确的手机号</div>
        <div class="phoneIptBox">
          	<input class="inpt" type="number" :maxlength="11" v-model = "value"  placeholder="请输入您的手机号">
          	<div class="pngbox">
          		<!-- <img src="../img/pon.png" > -->
          	</div>
        </div>
        <div class="specificationsTitle">选择类型</div>
        <div class="network_con rows" v-if="cindex==1">
          <div :class="paytype==1?'network_item rows network_sel_item':'network_item rows'" @click="paytype=1">中国移动</div>
          <div :class="paytype==2?'network_item rows network_sel_item':'network_item rows'" @click="paytype=2">中国联通</div>
          <div :class="paytype==3?'network_item rows network_sel_item':'network_item rows'" @click="paytype=3">中国电信</div>
        </div>
        <div class="network_con rows" v-if="cindex==2">
          <div :class="kpaytype==1?'network_item rows network_sel_item':'network_item rows'" @click="kpaytype=1">移动快充</div>
          <div :class="kpaytype==2?'network_item rows network_sel_item':'network_item rows'" @click="kpaytype=2">联通快充</div>
          <div :class="kpaytype==3?'network_item rows network_sel_item':'network_item rows'" @click="kpaytype=3">电信快充</div>
        </div>
        <div class="specificationsTitle">充值规格</div>
        <div class="specificationsTab" v-if="cindex==1">
          <div class="specificationsBtn">
            <div class="origina">话费100元</div>
          </div>
          <div class="specificationsBtn">
            <div class="origina">话费50元</div>
          </div>
          <div class="specificationsBtn">
            <div class="origina">话费200元</div>
          </div>
          <div class="specificationsBtn">
            <div class="origina">话费300元</div>
          </div>
        </div>
        <div class="specificationsTab" v-if="cindex==2">
          <div class="specificationsBtn">
            <div class="origina">话费50元</div>
          </div>
          <div class="specificationsBtn">
            <div class="origina">话费100元</div>
          </div>
        </div>
      </div>
    </div>

    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item name="home" icon="shop" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="diamond" replace to="/vip">影视会员</van-tabbar-item>
      <van-tabbar-item name="live" icon="fire" replace to="/live">生活缴费</van-tabbar-item>
      <van-tabbar-item name="setting" icon="manager" replace to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value:'',
        navbarHeight:0,
        cindex:1,
        active: 'live',
        paytype:1,
        kpaytype:1
      }
    },
  watch: {
    value(newName, oldName) {
      // ...
      let newbox = newName.replace(/[^0-9]/g,'')
      this.value = newbox.slice(0, 11)
    }
  } ,
    mounted() {
    		// console.log(document.querySelector(".page-header").offsetHeight)//获取导航条的高度
    		// this.navbarHeight = Number(document.querySelector(".page-header").offsetHeight);//吸顶的距离
    	},
    methods: {
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      },
    },
  }
</script>
<style lang="less" scoped>
  .live{
    width: 100%;
    height: 1240px;
    position: relative;
    text-align: left;
    top: 0;
    left: 0;
    z-index: 1;
    .van-image{
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .cardbox{
    padding: 0 15px;
    min-height: 90vh;
    position: relative;
    z-index: 1;
  }
  .cardhearder {
    width: 345px;
    display: flex;
    justify-content: space-between;
    padding-top: 153px;
  }
  .rechargeText {
    font: 600 14px/22px simhei;
    color: #5d5d5f;
    text-align: left;
  }
  .rechargeBtn {
    width: 146px;
    height: 65px;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fbd8d7;
    border-radius: 5px 5px 0 0;
  }
  .rechargeHot {
      font: 12px/20px simhei;
      padding-left: 16px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABiElEQVRIibXUvWsVQRQF8N8LD4kfr5CUSiLYiqK1WAYMqLFJQBC00VbESmxsUgkSrEwTCGKKNJrCkCp+EDsTRdB/QESxCNoY0Pjkwiw8hn27eZA9MOzO3XvuubNzZlprq6tHcAsj9hZvMN/GKxzf4+KB69geaqh4gemhBosHfjctsFMn8ANLfb7FJj6rU6gT+I4p3M7iv3AOMzX8A3UCJ8JqeIjZnvgYwt4va/jfQuAK/lQkXcOjdFbWMYkuvkSHFbznuBvnYBEf8A7DWdJPvMVZnEnPwAO8RgenS4rPpobESS6CC7iaJS7jUkWX8Qs/ZrFuuhW2ZJv8taTAxUQoRuBezzwvXmC7eGn3BM+XJMZ/XskENjCHfxjFRMZp4TKeFgKd5JKTJQKbuJHFXqQROFUiEHiCQ9FICHzC0T5LvZA8H9jBYdzBffzF/j68WMVj7GtXFC/QyebdGnv2YmKQu6ibXHNsAM5WexdJBVoVrunbVNO3aatpgYNNC7yPPRjHzQGcsVt8xsx/ar1MTaDbHD0AAAAASUVORK5CYII=) no-repeat 0px 3px;
      color: #afa8a8;
      background-size: 13px;
      text-align: left;
  }
  .btnActive {
      background: #fff!important;
      .rechargeText {
        color: #272727;
      }
      .rechargeHot {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABhElEQVRIibXUvWsUURQF8N+GFdSwRbASgwrpQkBSpLUUTOFHoyAICSlMEwjBSmzSpBIk2NkIFjY2fhS2iminBFLkDzBIxCKoRRbysXLhDSyP2ZksZA4MM3Pn3nPu3Hfea/XGr1zAMs45WXzGizY+YeKEyQPz6I40RF7g7kiD5IG9pgUO6wR+4/WAb7GIb+oU6gR+4Q5WsvhfXMVaTf3ZOoGpsBqeYr0vfglh74819TshcA/7FUlzeJb2yhfcQg/b0WFF3Vs8io0WL5P4htNZ0h98xXks4HuKP8EMOpguIV9PDSkEAi9xP0t8h5sVXcYIN7NYL50Ku7JF/llCcCMVFFfgcd97Tl6gWzy0+4LXSxJjzh8ygRjTcxzhImazmhZu45U0ok5yyUKJwPv0F4MQ890o+RbNLEYjIfAD4xUk/9L9EGN4iFUc4AxOVdQutWvIJafk3VXZsx+zw5xFveSay0PU7LaPkVSgVeGagU01fZq2mhYYbVpgI9bgGh4M4YzjYgtr/wFpBUx+Y6ZDKwAAAABJRU5ErkJggg==) no-repeat 0px 3px;
          color: #ff1c2f;
          background-size: 13px;
      }
  }
  .phone {
      width: 325px;
      background: #fff;
      padding: 10px;
      border-radius: 0 0 5px 5px;
  }
  .phoneErr{
    font: 10px/20px simhei;
    color: #ff1c2f;
  }
  .phoneIptBox {
      height: 37px;
      display: flex;
      border-bottom: 1px solid #ececec;
  }
  .inpt {
    border:0;
    width: 300px;
    height: 37px;
    // font: inherit 16px simhei;
    font-size: 16px!important;
    font-weight: inherit!important;
    color: #2e2e2e!important;
    min-height: 22px;
    position: relative;
    display: block;
    height: 100%;
    background: none;
    color: inherit;
    opacity: 1;
    line-height: inherit;
    letter-spacing: inherit;
    text-align: inherit;
    text-indent: inherit;
    text-transform: inherit;
    text-shadow: inherit;
}
  .specificationsTitle {
      font: 600 15px/15px simhei;
      color: #3c3c3c;
      padding: 28px 0 16px 0;
  }
  .network_con {
      width: 325px;
      overflow-x: scroll;
      display: -webkit-box!important;
  }
  .network_item {
      padding: 0 15px;
      height: 44px;
      line-height: 44px;
      background-color: #fff;
      border-radius: 6px;
      border: solid 1px #cacaca;
      font-size: 13px;
      color: #282828;
      justify-content: center;
      margin: 6px 6px 0 0;
  }
  .network_sel_item {
      background-color: #fffaf5;
      border: solid 1px #ff1d30;
      color: #ff1d30;
  }
  .specificationsTab {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
  }
  .specificationsBtn {
      width: 103px;
      height: 83px;
      background: #fffaf5;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 7px 7px 0 0;
  }
  .specificationsBtn:nth-child(1), .specificationsBtn:nth-child(2), .specificationsBtn:nth-child(3) {
      margin-top: 0;
  }
  .specificationsBtn:nth-child(3n) {
      margin-right: 0;
  }
  .origina {
      font: 13px/15px simhei;
      color: #9d9d9d;
  }
</style>
