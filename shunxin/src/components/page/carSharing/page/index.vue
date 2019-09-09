<template> 
    <div class="carSharing">  
      <div class="header_car">
        <router-link to='/Home/carSharing/announceInfo'>
            <div class="headerFs"><img src="static/images/car/fs.png"/> <span>发布信息</span>  </div>
        </router-link>
        <img class="header_carimg" src="static/images/car/img.png" alt="">
      </div>
      <div class="main_car">
        <div class="main_car_sub">
          <p class="main_nthchile1_p">
            <span>{{toponymy[0]}}</span>
            <b style="padding-left:1.04rem"></b>
            <img src="static/images/car/qh.png" alt="" @click="goToponymyFn">
            <b style="padding-left:1.04rem"></b>
            <span>{{toponymy[1]}}</span>
          </p>
          <div class="selectTime">
            <p>最早出发时间</p>
            <p @click="selsecTimeFn">
              <span>{{time_list.year}}年{{time_list.month}}月{{time_list.day}}日</span>
              <span>{{time_list.hour}}:{{time_list.minute}}</span>
            </p>
          </div>
          <div style="height:0.5rem"></div>
          <van-button size="large">查询</van-button>
          <div style="height:0.4rem"></div>
        </div> 
      </div>
      <div class="lisrInfo_car">
        <div class="list_carConainer" @click="carDetailGetData">
          <p> 
            <img src="static/images/clubcard/sj.png" alt="">
            <b>出发时间</b>
            <i>2019-11-11 20:00</i>
          </p>
          <p> 
            <img src="static/images/clubcard/l.png" alt="">
            <b>从</b>
            <i>北京</i>
          </p>
          <p> 
            <img src="static/images/clubcard/h.png" alt="">
            <b>到</b>
            <i>山东</i>
          </p>
          <p> 
            <img src="static/images/clubcard/p.png" alt="">
            <b>票</b>
            <i>3张</i>
          </p>
        </div>  
        <div class="list_carConainer" @click="carDetailGetData">
          <p> 
            <img src="static/images/clubcard/sj.png" alt="">
            <b>出发时间</b>
            <i>2019-11-11 20:00</i>
          </p>
          <p> 
            <img src="static/images/clubcard/l.png" alt="">
            <b>从</b>
            <i>北京</i>
          </p>
          <p> 
            <img src="static/images/clubcard/h.png" alt="">
            <b>到</b>
            <i>山东</i>
          </p>
          <p> 
            <img src="static/images/clubcard/p.png" alt="">
            <b>票</b>
            <i>3张</i>
          </p>
        </div>  
      </div>
      <van-popup v-model="show" position="bottom" :overlay="true">
        <van-datetime-picker
          @cancel="cancelFn"
          @confirm="confirmFn"
          @change="getValues"
          v-model="currentDate"
          type="datetime"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup> 
    </div>
</template>
<script>   
export default {  
  data () {
    return {
      toponymy:['天堂','地狱'],
      show: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 11, 31),
      currentDate: new Date() ,
      time_list:{
        year:'',
        month:'',
        day:'',
        hour:'',
        minute:'', 
      }
    }
  }, 
  methods:{
    selsecTimeFn(){
      this.show=true
    },
    confirmFn(){
      this.show=false
    },
    cancelFn(){
      this.show=false
    },
    getValues(index){  
  	 this.gettimeFn()
    },
    goToponymyFn(){ 
      this.toponymy.unshift(this.toponymy.pop())
    },
    gettimeFn(){
      this.time_list={
        year:this.currentDate.getFullYear(),
        month:this.currentDate.getMonth()+1,
        day:this.currentDate.getDate(),
        hour:this.currentDate.getHours(),
        minute:this.currentDate.getMinutes(), 
      }
    },
    carDetailGetData(){
        this.$router.push({path:'/Home/carSharing/carDetails'})
    }
  },
  mounted(){ 
  	 this.gettimeFn()
       
  },
  components:{ 
  }
}
</script>
<style scoped> 
 .carSharing{
   background: #f5f5f5;
 } 
 .headerFs{
   width: 1.8rem;
   height: 0.4rem;
   line-height: 0.4rem;
   background: rgba(0,0,0,0.5);
   position: absolute;
   right: 0.12rem;
   top: 0.24rem;
   font-size: 0.12rem;
   border-radius: 0.3rem;
   text-align: center; 
   color: #ffffff;
 }     
 .headerFs img{
   width: 0.24rem!important;
 }
 .header_car{
   position: relative;
 }
 .header_carimg{
   width: 100%;
   margin-top: -1.3rem;
 }
 .main_car{
   width: 100%;
   height: 4.28rem;
   background: #ffffff; 
   margin:auto;
   position: relative;
   border-bottom:0.2rem solid #f5f5f5;
 }
 .main_car_sub{
   width: 96%;
   height: 100%;
   background: #ffffff;
   border-radius: 0.2rem;
   box-shadow:0 0 0.2rem #999999;
   margin:auto;
   position: absolute;
   left: 50%;
   top: -1rem;
   transform: translateX(-50%)
 }
 .main_car_sub p{
   text-align: center;
 }
 .main_car_sub p span{
   font-size: 0.38rem;
 }
 .main_nthchile1_p{
   padding: 0.64rem 0 0.44rem 0; 
 }
 .main_nthchile1_p img{
   height: 0.26rem;
   vertical-align: 0.04rem;
   /* margin: 0 1.06rem 0 1.06rem; */
 }
 .selectTime{
   display: flex;
    width: 96%;
    margin: auto;
    position: relative;
 }
 .selectTime:after{
   content: "";
   height: 70%;
   width: 2px;
   background: #f1f1f1;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   position: absolute;
 }
 .selectTime p{
   width: 50%;
   text-align: center;
   height: 1.04rem;
   line-height: 1.04rem;
   border-top:2px solid #f1f1f1;
   border-bottom:2px solid #f1f1f1;
   font-size: 0.26rem;
   color: #999999;
 }

 .list_carConainer{ 
   background: #ffffff;
   /* margin-top: 0.04rem; */
   border-bottom: 0.04rem solid #f5f5f5;
 }
 .list_carConainer p:nth-child(1){
   padding-top: 0.14rem;
 }
 .list_carConainer p{
   width: 92%;
   margin: auto;
   padding-bottom: 0.24rem;
   font-size: 0.24rem;
   line-height: 0.24rem;
 }
 .list_carConainer p img{
   height: 0.24rem;
   vertical-align: 0.01rem;
 }
 .list_carConainer p b{
   color: #999999;
   font-weight: normal;
   padding-left: 0.18rem;
   padding-right: 0.18rem;
  }
 .list_carConainer p i{
   color: #333333;
 }
 .main_car_sub .van-button--large{
   width: 96%; 
   height: 0.74rem;
 }
 .main_car_sub .van-button{ 
   line-height: 0.74rem;
   font-size: 0.28rem;
   color: #ffffff;
   background: #47b7fc;
   border-radius: 0.1rem;
   border:none;
   left: 50%;
   transform: translateX(-50%);
 }
 .selectTime p span{
   font-size: 0.26rem;
   color: #333333;
 }
</style>
