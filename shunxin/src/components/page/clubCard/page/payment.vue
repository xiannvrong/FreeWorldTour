<template>
    <div class="payment_conainer"> 
      <!-- 立即支付 -->
      <div class="payment_header">
        <p>
          <b>产品名称</b>
          <i>会员卡</i>
        </p>
      </div>
      <div class="payment_header">
        <p>
          <b>订单编号</b>
          <i>23154654566454646</i>
        </p>
      </div>
      <div class="payment_header">
        <p>
          <b>商家名称</b>
          <i>北京舜鑫网络科技有限公司</i>
        </p>
      </div>
      <div class="payment_header">
        <p>
          <b>应付金额</b>
          <i>￥500</i>
        </p>
      </div>
      <div class="payment_header">
        <p>
          <b>实付金额</b>
          <i>￥100</i>
        </p>
      </div>
      <div class="placeholder"></div>  
      <div class="payment_footer" v-for="(item,index) in payment_list" :key="index" @click="paymentSelectFn(index)">
        <div class="payment_footer_sub">
          <p><img :src="item.pic" alt=""><b>{{item.title}}</b></p>
          <div class="circleNeed" :style="{ borderColor : needindex==index?'#47b7fc':'#959595' }"><p v-show="needindex==index?true:false"></p></div>
        </div>
      </div> 
      <van-button type="default">立即支付</van-button>
    </div>
</template>
<script>   
export default {  
  data () {
    return {  
      needindex:0,
      payment_list:[
        {
          title:"微信支付",
          pic:"./static/images/clubcard/wx.png"
        },
        {
          title:"钱包支付",
          pic:"./static/images/clubcard/qb.png"
        }
      ]
    }
  },
  methods:{  
    paymentSelectFn(index){
      this.needindex=index
    }
  },
}
</script>
<style scoped> 
.payment_conainer{
  background: #f5f5f5;
}
b,i{
  display: block;
  color: #999999;
  font-size: 0.24rem;
}  
b{
  color: #333333;
  font-weight: normal;
} 
.payment_header{
  border-bottom: 1px #f1f1f1 solid;
  background: #ffffff;
}
.payment_header p{
  display: flex;
  justify-content: space-between;
  padding: 0.34rem 0 0.34rem 0; 
  width: 90%;
  margin: auto;
} 
.payment_footer{
  height: 0.98rem;
  border-bottom: 1px #f1f1f1 solid;
  background: #ffffff;
} 
.payment_footer_sub{
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items:  center; 
} 
.payment_footer p{
  display: flex;
  height: 100%;
  line-height:  0.98rem;
}
.payment_footer_sub b{
  height: 100%;
  padding-left: 0.26rem;
}
.payment_footer p img{
  height: 0.56rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.placeholder{
  height: 0.2rem;
}
.van-button{
  width: 90%;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.1rem;
  background: #47b7fc;
  color: #ffffff;
  margin-top: 1.5rem;
}

.circleNeed{
  width: 0.3rem;
  height: 0.3rem;
  border:0.04rem solid #959595;
  border-radius: 50%; 
  display: flex; 
  align-items: center;
  justify-content: center; 
}
.circleNeed p{
  width: 60%;
  height: 60%;
  background: #47b7fc; 
  border-radius: 50%; 
}
 
</style>
