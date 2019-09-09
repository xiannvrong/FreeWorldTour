<template>
    <div class="header_conainer"> 
      <div class="header_img_conainer">
          <img src="static/images/clubcard/headerbackground.png" alt="">
          <div class="header_input">
              {{inputMsg.text}}
              <!-- <input type="text" :placeholder="inputMsg.text" @click="headerInputClick" @change="headerChange"> -->
          </div>
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
        }
    }
  },
  methods:{ 
      headerInputClick(){
          console.log(2) 
      },
      headerChange(){
          console.log(1)
      }
  },
}
</script>
<style scoped>  
.header_conainer{
    position:relative;
}
.header_conainer img{ 
    width: 100%;
}
.header_input{
    width: 66%;
    height: 0.7rem;
    line-height: 0.7rem;
    position: absolute;
    top: 62%;
    left: 50%; 
    transform: translate(-50%,50%);
    border-top-right-radius: 0.38rem;
    border-bottom-right-radius: 0.38rem;
    border-top-left-radius: 0.38rem;
    border-bottom-left-radius: 0.38rem; 
    overflow: hidden;
    text-align: center;
    background: rgba(0,0,0,0.2);
    color: #ffffff;
}
.header_input input{ 
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.3rem;
    background: rgba(0,0,0,0.2);
    color: #ffffff;

}
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
}
</style>
