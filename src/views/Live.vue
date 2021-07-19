<template>
  <div class="live">
    <van-image
      lazy-load
      src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/img/lift_bg.8d1bca84.png"
    />
    <div class="cardbox">
      <div class="cardhearder">
        <div class="rechargeBtn">
          <div class="rechargeText">9.28折特惠慢充</div>
          <div class="rechargeHot">火爆热销中</div>
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
        active: 'live'
      }
    },
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
    position: fixed;
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
    z-index: 9;
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
  }
  .rechargeHot {
      font: 12px/20px simhei;
      padding-left: 16px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABiElEQVRIibXUvWsVQRQF8N8LD4kfr5CUSiLYiqK1WAYMqLFJQBC00VbESmxsUgkSrEwTCGKKNJrCkCp+EDsTRdB/QESxCNoY0Pjkwiw8hn27eZA9MOzO3XvuubNzZlprq6tHcAsj9hZvMN/GKxzf4+KB69geaqh4gemhBosHfjctsFMn8ANLfb7FJj6rU6gT+I4p3M7iv3AOMzX8A3UCJ8JqeIjZnvgYwt4va/jfQuAK/lQkXcOjdFbWMYkuvkSHFbznuBvnYBEf8A7DWdJPvMVZnEnPwAO8RgenS4rPpobESS6CC7iaJS7jUkWX8Qs/ZrFuuhW2ZJv8taTAxUQoRuBezzwvXmC7eGn3BM+XJMZ/XskENjCHfxjFRMZp4TKeFgKd5JKTJQKbuJHFXqQROFUiEHiCQ9FICHzC0T5LvZA8H9jBYdzBffzF/j68WMVj7GtXFC/QyebdGnv2YmKQu6ibXHNsAM5WexdJBVoVrunbVNO3aatpgYNNC7yPPRjHzQGcsVt8xsx/ar1MTaDbHD0AAAAASUVORK5CYII=) no-repeat 4px 0px;
      color: #afa8a8;
  }
</style>
