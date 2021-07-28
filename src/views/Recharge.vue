<template>
  <div class="recharge">
    <div class="life_top_img_box">
      <van-image
        lazy-load
        src="https://rlk5a13fe.66bbn.com/uploads/20210428/788382a45329654d2f6d8585f434c9ae.png"
      />
    </div>
    <div class="phone_view">
      <div class="life_title">充值号码</div>
      <div class="phoneIptBox">
          <van-field v-model="tel" type="tel"  placeholder="账户绑定手机号" />
      </div>
      <div class="tips_phone rows">
        <div class="tips_icon">
          <van-image
            lazy-load
            src="https://wx.bidian.cloud/addons/hc_recharge/template/mobile/static/icon/tips_icon.png"
          />
        </div>
        <div class="tips_text">购买须知：请仔细核对充值账号，确保账号准确性。虚拟商品不支持退货</div>
      </div>
    </div>
    <div class="network_view">
      <div class="life_title">充值规格</div>
      <div class="network_con rows">
        <div :class="paytype==1?'network_item rows network_sel_item':'network_item rows'" @click="paytype=1">滴滴出行快车券</div>
        <div :class="paytype==2?'network_item rows network_sel_item':'network_item rows'" @click="paytype=2">滴滴出行快车券</div>
        <div :class="paytype==3?'network_item rows network_sel_item':'network_item rows'" @click="paytype=3">滴滴出行快车券</div>
        <div :class="paytype==4?'network_item rows network_sel_item':'network_item rows'" @click="paytype=4">滴滴出行快车券</div>
        <div :class="paytype==5?'network_item rows network_sel_item':'network_item rows'" @click="paytype=5">滴滴出行快车券</div>
      </div>
    </div>
    <div class="spec_view">
      <div class="life_title">充值价格</div>
      <div class="spec_con rows">
        <div :class="kpaytype==1?'spec_item column spec_sel_item':'spec_item column'" @click="kpaytype=1">
          <div class="spec_name">5元红包</div>
          <div class="scribing_price">官方价￥5.00</div>
        </div>
        <div :class="kpaytype==2?'spec_item column spec_sel_item':'spec_item column'" @click="kpaytype=2">
          <div class="spec_name">10元红包	</div>
          <div class="scribing_price">官方价￥10.00</div>
        </div>
        <div :class="kpaytype==3?'spec_item column spec_sel_item':'spec_item column'" @click="kpaytype=3">
          <div class="spec_name">20元红包</div>
          <div class="scribing_price">官方价￥20.00</div>
        </div>
      </div>
    </div>
    <div class="detailCard">
      <div class="instructionsTitle">使用须知</div>
      <div class="instructionsText">
        <div>
          <div>
            <p>1.下单填写美团外卖绑定的手机号，下单直充到账，充值成功后点外卖选择通用红包即可满减！<span style="background-color: rgb(255, 255, 0);">美团外卖APP使用，不是美团APP。</span>
            </p>
            <p><span style="background-color: rgb(255, 255, 0);">2.美团外卖官方5元红包代金券，一天最多充值3次，美团外卖官方10元红包代金券，一天最多充值5次。</span>
            </p>
            <p><br>
            </p>
            <p>3.卡包商品为美团外卖早餐包,下午茶包,夜宵包充值,仅支持账号绑定手机号充值。<br><br>4.美团外卖周卡,含7张满15元减6元红包,卡包有效期为购买直充到账后7天有效,到期后自动失效,早餐包限时段5:00-9:59使用，下午茶包限时时段14:00~16:59 使用,夜宵包限时时段21:00-次日4:59使用,红包仅可在美团外卖天天神券商家使用。
            </p>
            <p><br>5.卡包商品限每个用户每天最多购买1次,充值成功后直充到购买手机号注册的外卖账号中,限购买手机号注册外卖账号下单使用,红包不可转赠或转卖;每个订单限用 1个红包,每日最多5个订单可用包,超过不可使用。<br><br>6.非质量问题不支持退款/换货。<br><br>7.红包查找路径:美团外卖App-“我的”-“我的红包”中查看。
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="首页" @click="onClickIcon('/home')" />
      <van-goods-action-icon icon="balance-list-o" text="查询订单" @click="onClickIcon('/home')" />
      <van-goods-action-icon icon="service-o" text="客服" @click="onClickIcon('/home')" />
      <van-badge content="已优惠￥12">
      </van-badge>
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
  import { Toast } from 'vant';
  export default {
    data() {
      return {
        test: 1,
        tel:'',
        paytype:1,
        kpaytype:1
      }
    },
    methods: {
      onClickIcon(a) {
        Toast('点击图标');
        this.$router.push(a)
      },
      onClickButton() {
        Toast('点击按钮');
      },
    },
  }
</script>
<style lang="less" scoped>
  .recharge {
    text-align: left;
    background: #f5f5f5;
    padding: 10px 0 60px;
    .van-badge {
      position: absolute;
      padding: 0 5px;
      font: 600 11px/20px simhei;
      color: #864c1d;
      background: -webkit-linear-gradient(left, #ffdca4, #ffdca3);
      background: linear-gradient(90deg, #ffdca4, #ffdca3);
      border-radius: 6px 0 6px 0;
      position: absolute;
      top: -10px;
      right: 34px;
      z-index: 2;
    }
    .life_top_img_box {
      width: 352px;
      height: 70px;
      border-radius: 12px;
      overflow: hidden;
      margin: 0 auto 0;
    }
    .phone_view {
        width: 351px;
        background-color: #fff;
        border-radius: 6px;
        margin: 12px auto 0;
        box-sizing: border-box;
        padding: 11px 11px 15px 10px;
        .van-cell{
          padding: 0;
        }
    }
    .phoneIptBox{
        width: 329px;
        height: 32px;
        border-bottom: 1px solid #ececec;
        margin-top: 15px;
    }
    .life_title {
        font-size: 13px;
        color: #3c3c3c;
        font-weight: 700;
    }
    .tips_phone {
        width: 329px;
        height: 43px;
        background-color: #fffbf6;
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
    }
    .tips_icon {
        min-width: 16px;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        background-size: cover;
    }
    .tips_text {
        font-size: 12px;
        color: #ff1d30;
    }
    .network_view {
        width: 351px;
        background-color: #fff;
        border-radius: 6px;
        margin: 12px auto 0;
        box-sizing: border-box;
        padding: 11px 11px 14px;
        .network_con {
            width: 328px;
            margin-top: 15px;
            overflow-x: scroll;
            display: -webkit-box;
            scrollbar-width: none;
            -ms-overflow-style: none;
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
    }
    .spec_view {
        width: 351px;
        background-color: #fff;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 11px 0 27px 11px;
        margin: 12px auto 0;
        .spec_con {
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-top: 14px;
            display: flex;
        }
        .spec_item {
            min-width: 104px;
            width: 104px;
            padding: 13px 0;
            background-color: #fff;
            border-radius: 3px;
            border: solid 1px #cacaca;
            margin: 7px 7px 0 0;
            justify-content: center;
            color: #282828;
            position: relative;
            text-align: center;
        }
        .spec_sel_item {
            background-color: #fffaf5;
            border: solid 1px #ff1d30;
            color: #ff1d30;
        }
        .spec_name {
            font-size: 13px;
        }
        .scribing_price {
            font-size: 10px;
            text-decoration: line-through;
            margin-top: 2px;
            color: #9d9d9d;
        }
    }
    .detailCard {
        width: 324px;
        padding: 13px;
        background: #fff;
        border-radius: 6px;
        margin: 12px auto 0;
        .instructionsTitle {
            font: 600 13px/15px simhei;
            color: #3c3c3c;
        }
        .instructionsText {
            padding: 14px 0;
            font: 12px/20px simhei;
            color: #616161;
        }
    }
  }
</style>
