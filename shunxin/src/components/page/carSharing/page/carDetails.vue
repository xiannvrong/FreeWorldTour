<template> 
    <div class="carDetails"> 
      <!-- 拼车详情 -->
      <div class="carDetails_top_container">
        <div class="common_list" v-for="(item,index) in list_top" :key="index">
          <div class="common_list_sub">
            <p>{{item.title}}</p>
            <p>
              {{item.val}}
              <van-icon name="arrow" v-show="item.child?true:false"/> 
            </p>
          </div>
        </div>
        <div style="height:0.2rem;"></div>
        <div class="common_list" v-for="(item,index) in list_bottom" :key="index">
          <div class="common_list_sub">
            <p>{{item.title}}</p>
            <p>
              {{item.val}}
              <van-icon name="arrow" v-show="item.child?true:false"/> 
            </p>
          </div>
        </div>
      </div>
      <div class="carDetails_bottom_container">
        <div class="footer_top"> 
            <div class="footer_top_sub">
              <p>车票</p>
              <p>￥103</p>
            </div>
        </div>
        <div class="footer_bottom">
          <div class="footer_top_sub">
              <p>总计：<span>￥103</span></p>
              <p>
                <span>明细 <van-icon name="arrow-up" /></span>
                <button>立即支付</button>
              </p>
            </div>
        </div>
      </div>
    </div>
</template>
<script>   
export default {  
  data () {
    return { 
      list_top:[{
        title:"出发时间",
        val:"2020-12-78-75",
        child:false,
        path:""
      },{
        title:"出发地",
        val:"天堂",
        child:false,
        path:""
      },{
        title:"目的地",
        val:"地狱",
        child:false,
        path:""
      },{
        title:"余票",
        val:"9999",
        child:false,
        path:""
      },{
        title:"说明",
        val:"不可随地大小便",
        child:false,
        path:""
      },],
      list_bottom:[{
        title:"乘车人数",
        val:"2人",
        child:false,
        path:""
      },{
        title:"联系电话",
        val:"12658947589",
        child:false,
        path:""
      }]
    }
  }, 
  methods:{ 
  },
  mounted(){  
       
  },
  components:{ 

  }
}
</script>
<style scoped>  

.carDetails{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
} 
.carDetails_top_container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 85.6%; */
  height:calc( 100% - 1.8rem );
  overflow: auto; 
}
.carDetails_bottom_container{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.8rem; 
  overflow: hidden;
}
.footer_top{
  height: 0.78rem;
  line-height: 0.78rem;
  background: #ffffff;
}
.footer_bottom{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.98rem;
  line-height: 0.98rem;
  border-bottom:1px solid #f1f1f1;
  border-top:1px solid #f1f1f1;
}
.footer_top_sub{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.footer_top_sub p{
  font-size: 0.24rem;
}
.footer_top_sub p:nth-child(2){
  color: #fd7370;
}
.footer_bottom{
  background: #ffffff;
}
.footer_bottom .footer_top_sub{
  width: 100%;
}
.footer_bottom p{
  position: relative;
}
.footer_bottom p:nth-child(1){
  text-indent: 1em;
}
.footer_bottom p:nth-child(1) span{
  color: #fd7370;
  font-size: 0.34rem;
}
.footer_bottom p button{ 
  width: 3rem;
  height: 100%;
  border-radius: none; 
  background: #46b8fa;
  font-size: 0.34rem;
  border: none;
  color: #ffffff;
  outline: none; 
  cursor: pointer;
}
.footer_bottom p button:active{
  background: #40a3dc;
}
.footer_bottom p:nth-child(2) span{
  display: inline-block;
  color: #999999;
  font-size: 0.2rem;
  padding-right: 0.4rem;
}
.footer_bottom .footer_top_sub{
  background: #ffffff;
}
</style> 