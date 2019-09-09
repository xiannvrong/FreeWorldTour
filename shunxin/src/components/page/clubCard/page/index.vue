<template>
<!-- 首页  -->
    <div class="index_conainer"> 
        <mainTop/>
        <mainBottom/>
    </div>
</template>
<script>   
import mainTop from "../components/mainTop.vue" 
import mainBottom from "../components/mainBottom.vue" 
export default {  
  data () {
    return {  
    }
  },
  methods:{  
  },
  components:{ 
    mainTop,
    mainBottom
  }
}
</script>
<style scoped>   
</style>
