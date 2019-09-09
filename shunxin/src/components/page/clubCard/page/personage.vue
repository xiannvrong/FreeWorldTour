<!-- 个人端页面  指：微信分享页面 -->
<template>
    <div class="main_conainer"> 
       <div class="main_content_top">
           <h6>已有20人帮助砍掉<span class="spanSty">100.00</span>元，还剩<span class="spanSty">400.00</span>元</h6>
           <div class="progress">
               <p style="width: 10%"></p>
           </div>
           <h4>距结束还剩：<span class="spanSty2">33</span>：<span class="spanSty2">33</span>：<span class="spanSty2">33</span>：<span class="spanSty2">44</span></h4>
           <p class="main_p_but">
               <van-button type="danger">立即购买</van-button>
               <van-button type="warning">喊好友砍一刀</van-button>
           </p>
       </div>
       <div class="main_content_top main_content_bottom">
        <van-tabs v-model="active" swipeable @change="activeChange" ref="vanTabs">
            <van-tab title="好友砍价榜">
                <div class="vanTan_conainer">1</div>
            </van-tab>
            <van-tab title="好友赞助榜">
                <div class="vanTan_conainer"> 
                    <div class="vanTan_conainer_header">
                        <p>工10个好友帮忙</p>
                        <p>共计赞助<span>￥337</span></p>
                    </div>
                    <div class="address_list">
                        <ul>
                            <li><img :src="imgurl" alt=""></li>
                            <li>
                                <p>张三</p>
                                <p>慷慨解囊，赞助了</p>
                            </li>
                            <li>￥37</li>
                        </ul>
                        <ul>
                            <li><img :src="imgurl" alt=""></li>
                            <li>
                                <p>张三</p>
                                <p>慷慨解囊，赞助了</p>
                            </li>
                            <li>￥37</li>
                        </ul>
                        <ul>
                            <li><img :src="imgurl" alt=""></li>
                            <li>
                                <p>张三</p>
                                <p>慷慨解囊，赞助了</p>
                            </li>
                            <li>￥37</li>
                        </ul>
                        <ul>
                            <li><img :src="imgurl" alt=""></li>
                            <li>
                                <p>张三</p>
                                <p>慷慨解囊，赞助了</p>
                            </li>
                            <li>￥37</li>
                        </ul>
                    </div>
                </div>
            </van-tab>
          </van-tabs> 
       </div>
    </div>
</template>
<script>   
export default {  
  data () {
    return { 
        active:1,
        imgurl:'http://05imgmini.eastday.com/mobile/20190110/20190110041111_85b03cd05a0c501af65fcfe9b53b6f8a_1.jpeg'
    }
  },
  methods:{ 
    activeChange(){ 
        // this.$refs.vanTabs.$el.childNodes[0].childNodes[0].childNodes[0].style.transform
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
    top:-0.16rem;
    padding-bottom: 0.5rem;
}
.main_content_top h6{
    font-size: 0.22rem;
    padding-top: 0.44rem;
    padding-bottom:0.3rem;
    text-align: center;
}
.main_content_top .spanSty{
    color: #fc6767;
    font-size: 0.3rem!important;
}
.progress{
    width: 90%;
    height: 0.28rem;
    margin: auto;
    background: #daf1fd;
    border-radius: 0.2rem;
    overflow: hidden;
}
.progress p{
    background: #47b7fc;
    height: 100%;
    border-radius: 0.2rem;
}
.main_content_top h4{
    font-size: 0.22rem;
    padding-top: 0.32rem;
    padding-bottom:0.56rem;
    text-align: center;
}
.main_content_top .spanSty2{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: #000000;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.18rem!important;
    color: #ffffff;
    font-weight: normal;
    border-radius: 0.04rem;
}
.main_p_but{
    display: flex;
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
.main_content_bottom{
    margin-top: 0.36rem;
    overflow: hidden;
}
.main_content_bottom .van-tabs--line .van-tabs__wrap{
    height: 0.8rem;
}
.vanTan_conainer{
    width: 90%;
    margin:0.2rem auto;
}
.vanTan_conainer_header{
    width: 100%;
    height: 0.76rem;
    background: #fcfcfc;
    line-height: 0.76rem;
    position: relative;
    /* top: 0.2rem; */
    border-radius: 0.2rem;
}
.vanTan_conainer_header p{
    font-size: 0.22rem; 
    position: absolute; 
    width: 33%;
}
.vanTan_conainer_header p span{
    color:#fc6767;
}
.vanTan_conainer_header p:nth-child(1){
    text-align: right;
}
.vanTan_conainer_header p:nth-child(2){
    right: 0.03rem;
} 
.address_list ul{ 
    height: 0.7rem;
    display: flex;
    margin:0.34rem auto;
}
.address_list ul li{
    width: 100%;
    height: 100%;
}
.address_list ul li img{
    height: 100%;
    border-radius: 50%;
    color:#333333;
}
.address_list ul li:nth-child(1){
    width: 0.7rem;
}
.address_list ul li:nth-child(2){ 
    width:7rem; 
    padding-left: 0.3rem;
    position: relative;
}
.address_list ul li:nth-child(2) p{
    position: absolute
}
.address_list ul li:nth-child(2) p:nth-child(1){ 
    font-size: 0.28rem;
    top: 0;
}
.address_list ul li:nth-child(2) p:nth-child(2){ 
    font-size: 0.24rem;
    bottom: 0
}
.address_list ul li:nth-child(3){  
    float:right;
    text-align: right; 
    line-height: 0.7rem;
    font-size: 0.26rem;
}

</style>
<style>
.main_content_bottom .van-tabs--line .van-tabs__wrap{
      height: 0.8rem;
}
.main_content_bottom .van-tab{
    font-size: 0.28rem;
    line-height: 0.8rem; 
}
.main_content_bottom .van-tabs__line{
    /* width: 1.44rem!important;   */
} 
.van-tabs--line{
    padding-top: 0.8rem;
}

</style>
