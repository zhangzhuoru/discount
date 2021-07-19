<template>
  <div class="about">
    <div class="logobox">
      <van-image
        lazy-load
        src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/img/movice_top_img.png"
      />
    </div>

    <div class="playlist">
      <div class="listitem">
        <div class="itemicon">
          <div class="iocnbox">
            <van-image
              lazy-load
              src="https://rlk5a13fe.66bbn.com/uploads/20210425/33f88897865b9a85c1ac16faa388cd2e.png"
            />

          </div>
          <div class="item_right column">
            <div class="item_name">爱奇艺视频</div>
            <div class="item_text">充值<span>5</span>折起</div>
            <div class="item_btn rows">立即充值</div>
          </div>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item name="home" icon="shop" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="diamond" replace to="/vip">影视会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="fire" replace to="/live">生活缴费</van-tabbar-item>
      <van-tabbar-item name="setting" icon="manager" replace to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'search'
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
.about{
  background-color: #0b172c;
  height: 90vh;
  padding-bottom: 20px;
}
.playlist{
  width: 100%;
  padding: 256px 18px 0;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: flex!important;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}
.logobox{
  position: absolute;
  left: 0;
  top: 0;
}
.listitem{
      width: 164px;
      height: 89px;
      background-image: -webkit-linear-gradient(left,#ffdcb7,#ffb77e);
      background-image: linear-gradient(
  90deg
  ,#ffdcb7,#ffb77e);
      border-radius: 4px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      margin-bottom: 9px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
}
.itemicon{
      width: 157px;
      height: 83px;
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(
  90deg
  ,#f6a665,#c87935);
      border-image-slice: 1;
      box-sizing: border-box;
      padding: 0 8px 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
}
.iocnbox{
  width: 55px;
  height: 55px;
}

.column {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.item_right{
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  width: 72px;
}
.item_text {
    font-size: 14px;
    color: #373737;
    font-weight: 700;
    margin-top: 1px;
}
.item_text span{
    font-size: 16px;
    color: #ff1c2f;
}
.item_btn {
    width: 68px;
    height: 24px;
    line-height: 24px;
    background-image: -webkit-linear-gradient(
359deg
,#4e4d4e,#262320),-webkit-linear-gradient(#944108,#944108);
    background-image: linear-gradient(
91deg
,#4e4d4e,#262320),linear-gradient(#944108,#944108);
    border-radius: 12px;
    font-size: 12px;
    color: #fbe6c3;
    font-weight: 700;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: 3px;
}
.item_name{
  font-size: 12px;
  color: #484848;
}
</style>
