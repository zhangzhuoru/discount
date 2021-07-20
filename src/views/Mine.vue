<template>
  <div class="mine">
    <div class="head_view">
      <div class="useicon">
        <div class="ubox">
          <van-image
            lazy-load
            src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/icon/empty_icon.png"
          />
        </div>
        <div class="nickName">立即登录</div>
      </div>
      <div class="topbox">
        <div class="timgbox">
          <van-image
            lazy-load
            src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/img/privilegeBg.1f900a81.png"
          />
        </div>
        <div class="privilegeView">
          <div class="privilegeText">您还不是特权会员，请立即升级！</div>
          <div class="privilegeBtn">立即升级</div>
        </div>
      </div>
    </div>

    <van-cell title="我的订单" is-link value="查看全部" to="list"/>
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <van-cell value="发现" />
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="value in 2" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item name="home" icon="shop" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="diamond" replace to="/vip">影视会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="fire" replace to="/live">生活缴费</van-tabbar-item>
      <van-tabbar-item name="mine" icon="manager" replace to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'mine',
        test:1
      }
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
.mine{
  text-align: left;
}
.head_view{
  padding: 18px 11px 0;
  background: #45474d;
}
.useicon{
  padding-bottom: 18px;
  display: flex;
}
.ubox{
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
}
.nickName {
    width: 200px;
    font: 600 17px/19px Microsoft YaHei;
    color: #fff;
    padding: 0 13px;
    text-align: left;
    line-height: 40px;
}
.topbox{
  width: 305px;
  height: 79px;
  padding: 0 26px 0 21px;
  position: relative;
}
.timgbox{
  width: 352px;
  height: 79px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.privilegeView{
  display: flex;
  justify-content: space-between;
}
.privilegeText{
  font: 11px/11px simhei;
  color: #feedd7;
  padding-top: 49px;
  position: relative;
  z-index: 2;
}
.privilegeBtn{
  width: 66px;
  height: 26px;
  border-radius: 13px;
  background: -webkit-linear-gradient(left,#fad9b6,#fff0db);
  background: linear-gradient(
90deg
,#fad9b6,#fff0db);
  font: 600 11px/26px simhei;
  color: #313131;
  text-align: center;
  margin-top: 26px;
  position: relative;
  z-index: 2;
}
</style>
