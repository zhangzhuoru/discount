<template>
  <div class="listbox">
    <h1>{{ msg }}</h1>
    <div class="list_view">
      <div class="list_item">
        <div class="item_top between">
          <div class="item_ordernum">订单号:16219196884002</div>
          <div class="item_static">未支付</div>
        </div>
        <div class="item_con rows">
          <div alt="" class="item_img">
            <van-image
              lazy-load
              src="http://rlk5a13fe.66bbn.com/uploads/20210428/ed99231545595e59b70278db9395ad15.png"
            />
          </div>
          <div class="item_ncon">
            <div class="item_name">联通快充100元</div>
            <div class="item_phone">充值号码：15736351751</div>
          </div>
        </div>
        <div class="item_price rows">
          <div class="price_text">实付款</div>
          <div class="price">
            <span class="symbol">
              <span>￥</span>
            </span>
            95.50
          </div>
        </div>
        <div class="item_time rows">
          <div ><span>2021-05-25 13:14:48</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listbox',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.rows{
  display: flex;
}
.listbox{
  text-align: left;
  .list_view {
      margin: 10px auto 0;
  }
  .list_item {
      width: 351px;
      background-color: #fff;
      border-radius: 6px;
      margin: 0 auto 10px;
      box-sizing: border-box;
      padding: 0 10px;
  }
  .item_top {
      width: 100%;
      height: 27px;
      line-height: 27px;
      border-bottom: 1px solid #f9f9f9;
      display: flex;
      justify-content: space-between;
      .item_ordernum {
          font-size: 11px;
          color: #080808;
      }
      .item_static {
          font-size: 10px;
          color: #ff1d30;
      }
  }

  .item_con {
      margin-top: 13px;
      .item_img {
          min-width: 41px;
          width: 41px;
          height: 41px;
          margin-right: 17px /* background-color: #ff1d30; */;
      }
      .item_ncon {
          height: 41px;
      }
      .item_name {
          font-size: 12px;
          color: #3e3e3e;
      }
      .item_phone {
          font-size: 12px;
          color: #979797;
          margin-top: 4px;
      }
  }
  .item_price {
      width: 100%;
      height: 39px;
      line-height: 39px;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
      .price_text {
          font-size: 11px;
          color: #202020;
      }
      .price {
          margin-left: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #ff1d30;
      }
      .symbol {
          font-size: 10px;
      }
  }
  .item_time {
      width: 100%;
      height: 27px;
      line-height: 27px;
      border-top: 1px solid #f9f9f9;
      color: #979797;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
      font-size: 11px;
  }

}
</style>
