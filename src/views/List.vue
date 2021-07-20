<template>
  <div class="list">
    <van-tabs @click="onClick">
      <van-tab title="直充订单"><Listbox :msg="msg"></Listbox></van-tab>
      <van-tab title="卡券订单">内容 2</van-tab>
      <van-tab title="加油订单">内容 2</van-tab>
      <van-tab title="话费订单">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import Listbox from '../components/listbox.vue'
  import { Toast } from 'vant';
  export default {
    data() {
      return {
        test: 1,
        msg:'123123',
      }
    },
    methods: {
      onClick(name, title) {
        Toast(title);
      },
    },
    components: {
      Listbox
    }
  }
</script>
<style lang="less" scoped>
  .list {
    background: #f5f5f5;
    padding-bottom: 20px;
  }
</style>
