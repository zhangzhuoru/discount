<template>
  <div class="home">
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item name="home" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="diamond">影视会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="fire">生活缴费</van-tabbar-item>
      <van-tabbar-item name="setting" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'home',
        value:''
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
