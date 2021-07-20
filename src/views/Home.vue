<template>
  <div class="home">
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <div class="test">
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab  title="热门推荐">
          <div class="ftitle">
            热门推荐
          </div>
          <div class="fbox">
            <van-grid square :border="false">
              <van-grid-item v-for="value in 24" :key="value" icon="photo-o" text="文字" to="/recharge"/>
            </van-grid>
          </div>
        </van-tab>
        <van-tab  title="美食饮品">
          <div class="ftitle">
            美食饮品
          </div>
          <div class="fbox">
            <van-grid square :border="false">
              <van-grid-item v-for="value in 24" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </div>
        </van-tab>
        <van-tab  title="影音娱乐">
          <div class="ftitle">
            影音娱乐
          </div>
          <div class="fbox">
            <van-grid square :border="false">
              <van-grid-item v-for="value in 24" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </div>
        </van-tab>
        <van-tab  title="话费流量">
          <div class="ftitle">
            话费流量
          </div>
          <div class="fbox">
            <van-grid square :border="false">
              <van-grid-item v-for="value in 24" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </div>
        </van-tab>
        <van-tab  title="交通出行">
          <div class="ftitle">
            交通出行
          </div>
          <div class="fbox">
            <van-grid square :border="false">
              <van-grid-item v-for="value in 24" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
      	

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
        value:'',
        active: 'home'
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
  .test{

  }
  .fenlei{
    height: 58px;
    background-color: #fff;
    border-radius: 6px;
    margin: 1px auto 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding: 16px 17px;
  }
  .fitem{
    min-width: 68px;
    font-size: 13px;
    color: #5b5b5b;
    text-align: center;
    height: 26px;
    line-height: 26px;
  }
  .factive{
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
  .ftitle{
    font-size: 13px;
    color: #1e1e1e;
    padding-left: 28px;
    padding-top: 30px;
    text-align: left;
  }
  .fbox{
    padding: 0 14px;
  }
</style>
