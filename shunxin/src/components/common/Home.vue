<template>
    <div class="wrap">  
		<vcontent/>	 
    </div>
</template>
<script>
// import vheader from './header.vue'
import vcontent from './content.vue'
// import vfooter from './footer.vue'
export default {
	data(){
		return{  
		}
	},
	methods:{  
	},
	components:{
		// vheader,
		vcontent,
		// vfooter
	}
}
</script>
<style lang="sass" scoped>
 .wrap{
	 min-height:100%;
	 max-width: 750px;
	 position: relative;
 }
</style> 