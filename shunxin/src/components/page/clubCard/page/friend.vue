<template>
    <div class="friend_conainer"> 
      <!-- 好友端页面 -->
      <div class="main_content_top">
           <h6>已有20人帮助砍掉<span class="spanSty">100.00</span>元，还剩<span class="spanSty">400.00</span>元</h6>
           <div class="progress">
               <p style="width: 10%"></p>
           </div>
           <h4>距结束还剩：<span class="spanSty2">33</span>：<span class="spanSty2">33</span>：<span class="spanSty2">33</span>：<span class="spanSty2">44</span></h4>
           <p class="main_p_but">
               <van-button type="danger">帮好友砍一刀</van-button>
               <van-button type="warning">赞助好友</van-button>
           </p>
      </div>
      <mainBottom :showVal="true"/>
    </div>
</template>
<script>
import mainBottom from "../components/mainBottom.vue" 
export default {  
  data () {
    return {  
    }
  },
  methods:{  
  },
  components:{  
    mainBottom
  }
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
</style>
