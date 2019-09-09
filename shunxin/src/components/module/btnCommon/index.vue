<template> 
    <div class="btnOut">
        <!--<button :style="{ color:btncolor, background:btnback, width:datalist.width, height:datalist.height, lineHeight:datalist.height }"
        	@mouseover="btnHover"
        	@mouseout="btnHoverout"
        >
        	{{datalist.content}}
        </button>-->
    </div>
</template>
<script>  
export default {  
  props:["datalist"],
  data () {
    return { 
    	btncolor:'',
    	btnback:''
    }
  } 
}
</script>
<style scoped> 
 
</style>
