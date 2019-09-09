<template>
    <div class="mainTop">  
       <div class="main_content_top">
          <h6>请输入您要充值的会员金额</h6>
          <div class="header_input">
              <input type="text" :placeholder="inputMsg.text" @click="headerInputClick" @change="headerChange">
          </div>
          <p class="main_p_but">
               <van-button type="danger" @click="goRouter">立即购买</van-button>
               <van-button type="warning" @click="show=true">砍一下</van-button>
          </p>
          
          <van-dialog v-model="show" :show-confirm-button="false"  :before-close="beforeClose"  >
                <div class="dialog_conainer">
                    <div class="dialog_content">
                        <p>您已成功砍掉</p>
                        <div class="money_content"><span>6.44</span><span>元</span></div>
                        <p>并获得一次发起砍价的机会</p>
                    </div>
                    <div class="dialog_btn"> 
                        邀请好友帮忙砍价
                    </div>
                    <div class="dialog_btn_show"> 
                        <van-icon name="close" @click="show=false"/>
                    </div>
                    <img src="static/images/clubcard/hb.png" alt="">
                </div>
           </van-dialog> 
       </div>
    </div>
</template>
<script>   
export default {  
  data () {
    return { 
        inputMsg:{
            state:true,
            text:"邀请好友帮忙砍价、支付"
        },
        show: false, 
    }
  },
  methods:{  
      headerInputClick(){
          console.log(2) 
      },
      headerChange(){
          console.log(1)
      },
      beforeClose(action, done) {
        if (action === 'confirm') {
            setTimeout(done, 0);
        } else {
            done();
        }
      },
      goRouter(){
          this.$router.push({path:"/Home/payment"})
      }
  },
}
</script>
<style scoped>  
.main_content_top{
    width:94%;  
    background:#ffffff;
    margin: auto;
    border-radius: 0.14rem;
    position: relative;
    top:-0.06rem;
    padding-bottom: 0.5rem;
}
.main_content_top h6{
  font-size: 0.22rem;
  color: #000000;
  font-weight: normal;
  text-align: center;
  padding:0.46rem 0;
}
.header_input{
    width:4.58rem;
    height: 0.66rem; 
    border-top-right-radius: 0.38rem;
    border-bottom-right-radius: 0.38rem;
    border-top-left-radius: 0.38rem;
    border-bottom-left-radius: 0.38rem; 
    overflow: hidden;
    background:#ebf7ff;
    margin: auto;
    text-align: center;
    line-height: 0.66rem;
}
.header_input input{ 
    text-align: center;
}
.main_p_but{
    display: flex;
    padding-top: 0.46rem;
    justify-content: space-around;
}
.main_p_but .van-button--normal{
    padding: 0;  
    height: 0.76rem;
    width: 40%;
    border-radius: 0.1rem;
    line-height: 0.76rem;
    font-size: 0.3rem;
}
.dialog_conainer{
    width: 5.4rem;
    margin: auto;
    position: relative; 
}
.dialog_conainer img{
    width: 100%;
}
.dialog_content{
    position: absolute;
    width: 100%;
    top: 1.4rem;
    left: 0;
    text-align: center;
}
.dialog_content p{
    font-size: 0.24rem;
}
.money_content{
    font-size: 0.9rem;
    height: 1.7rem;
    line-height: 1.7rem; 
}
.money_content span{ 
    font-size: 0.34rem;
}
.money_content span:nth-child(1){ 
    font-size: 0.9rem;
}
.money_content span:nth-child(2){ 
    line-height: 1.7rem
}
.dialog_btn{
    position: absolute;
    bottom: 0.34rem;
    height: 0.72rem;
    width: 2.58rem;
    border-radius: 0.4rem; 
    font-size: 0.24rem;
    line-height:0.72rem;
    text-align: center;
    left: 50%;
    transform: translateX(-50%); 
    background: linear-gradient(#f3dbae, #cbb159); /* 标准的语法 */
}
.dialog_btn_show {
    position: absolute;
    bottom: -0.9rem;
    color: #ffffff;
    width: 100%;
    text-align: center;
    font-size: 0.52rem;
}
.mainTop .van-dialog{
    background: none;
    overflow:initial;
}
</style>
