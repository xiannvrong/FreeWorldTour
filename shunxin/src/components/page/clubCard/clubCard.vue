<template>
    <div class="clubcard_container"> 
      <clubheader/>   
      <router-view></router-view> 
    </div>
</template>
<script>   
import clubheader from "./components/header.vue"   
export default {  
  data () {
    return {  
    }
  },
  methods:{  
  }, 
  components:{
    clubheader, 
  }
}
</script>
<style scoped>  
.clubcard_container{ 
  background: #38b3ff;
  min-height: 100%;
  padding-bottom:0.66rem;
}
</style> 

