<template>
  <div id="currentTime"> 
      <span>{{dataShu}}</span>
  </div>
</template>

<script> 
export default {
  data () {
    return {  
      time:new Date(),
      dataShu:''
    }
  },
  methods:{
  	
  },
  created(){   
    
    this.dataShu=this.time.getFullYear()+"年"+" "+(this.time.getMonth()+1)+"月"+this.time.getDate()+"日"+" "+"星期"+this.time.getDay() 

  }
}
</script>

<style> 
 #currentTime{
  padding-left: 10px;
 }



 </style>