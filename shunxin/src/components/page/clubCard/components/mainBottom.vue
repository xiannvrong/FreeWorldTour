<template>
    <div class="mainBottom">   
       <div class="yunIcon_conainer"><img src="static/images/clubcard/yunIcon.png" alt=""></div>
       <div class="yunIcon_conainer yunIcon_conainer2"><img src="static/images/clubcard/yunIcon.png" alt=""></div>
       <h2> <img src="static/images/clubcard/iconXie.png" alt=""> 规则说明 <img src="static/images/clubcard/iconXie.png" alt=""></h2>
       <div class="main_content_top main_content_bottom">
          <p>充值卡说明</p>
          <p>1、可购买平台内任意非活动产品</p>
          <p>2、邀请好友实际付款购买卡券金额返利百分比五</p>
          <p :style="{color:showVal==true?'#000000':'red'}">3、充值最小金额为￥{{minMoney}}（根据规则显示）</p>
          <p>获得方式</p>
          <p>1、邀请好友可免费获得</p>
          <p>2、直接购买充值卡</p>    
       </div>
    </div>
</template>
<script>   
export default { 
  props:['showVal'], 
  data () {
    return {  
      minMoney:500
    }
  },
  methods:{  
  },
  mounted(){  
  }
}
</script>
<style scoped> 
.mainBottom{
  position: relative;
  overflow: hidden;
}
.yunIcon_conainer{
  height: 0.56rem; 
  position: absolute; 
  right: -5%;
  top:0.2rem;
}  
.yunIcon_conainer img{
  height:100%;
} 
.yunIcon_conainer2{
  bottom: 0rem!important;
  top: 5.8rem;
  left: -4%;
}
h2{
  text-align: center;
  color: #ffffff;
  font-size: 0.34rem;
  padding:0.5rem 0 0.34rem 0;
}
h2 img{
  height: 0.3rem;;
}
.main_content_top{
    width:94%;  
    background:#ffffff;
    margin: auto;
    border-radius: 0.14rem;
    position: relative;
    top:-0.06rem;
    padding-bottom: 0.5rem;
}
.main_content_bottom{ 
    overflow: hidden;
    position: relative;
}
.main_content_bottom p{
  font-size: 0.22rem;
  padding-bottom:0.34rem;
  padding-left: 0.36rem;
}
.main_content_bottom p:nth-child(1){
  padding-top: 0.4rem;
}
.main_content_bottom p:nth-child(4){ 
  color: red;
  padding-bottom:0.6rem;
} 
</style>
