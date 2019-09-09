<template>
    <div style="margin: 10px 0 20px 25px;overflow: hidden">
            
           
        <div class="addcontent">
                <!--1 整车 改装车-->
                <select name="" id="" style="float: left" v-model="defaultGroup">
                    <!--<option value="请选择车辆类型">请选择车辆类型</option>-->
                    <option v-for="(item , index) in vehicleType" :key="index" :value="index">{{item}}</option>
                </select>

                <!--2  -->
                <select name="" id="" style="float: left;" v-if="defaultGroup =='1'" v-model="selectShow">
                    <option v-for="(item , index) in wholeType" :key="index" :value="index">{{item}}</option>
                </select>
                <select name="" id="" style="float: left" v-if="defaultGroup =='2'" v-model="involving">
                    <option v-for="(item , index) in involvingCars" :key="index" :value="index">{{item}}</option>
                </select>

                <!--整车3-->
                <template v-if="defaultGroup == '1'">
                    <select name="" id="" style="float: left" v-if="selectShow =='0'">
                        <option v-for="(item , index) in passengerCar" :key="index" :value="index">{{item}}</option>
                    </select>
                    <select name="" id="" style="float: left" v-if="selectShow =='1'">
                        <option v-for="(item , index) in Coach" :key="index" :value="index">{{item}}</option>
                    </select>
                    <select name="" id="" style="float: left" v-if="selectShow =='2'">
                        <option v-for="(item , index) in Trucks" :key="index" :value="index">{{item}}</option>
                    </select>
                    <select name="" id="" style="float: left" v-if="selectShow =='3'">
                        <option v-for="(item , index) in Totorcycle" :key="index" :value="index">{{item}}</option>
                    </select>
                </template>
        </div>
        <!--改装车3-->
        <div class="addClass" @click="chooseMedicine($event)">+增加新品种</div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from "vuex"
    export default { 
        data(){
            return {
                vehicleType: [
                    "请选择车辆类型",
                    "整车",
                    "改装车",
                ],
                defaultGroup: 0,
                wholeType: [
                    "乘用车",
                    "货车",
                    "客车",
                    "摩托车"
                ],
                selectShow: 0,
                involvingCars: [
                    "客车",
                    "货车",
                    "摩托车"
                ],
                involving: 0,
                passengerCar: [
                    "轿车",
                    "纯电动车"
                ],
                passenger: 0,
                Coach: [
                    "货车",
                    "纯电动货车",
                    "混合动力货车"
                ],
                Trucks: [
                    "轻型客车",
                    "纯电动轻型客车",
                    "混合动力轻型客车"
                ],
                Totorcycle: [
                    "轻型客车1",
                    "纯电动轻型客车1",
                    "混合动力轻型客车1"
                ],
                lastChilds:"",
                arr:[]
            }
        }, 
        methods: {
            ...mapMutations({
                lastChild:"LAST_CHILD",
                childList:"CHILD_LIST",
            }),
            chooseMedicine($event){
                // console.log(this.messages)
                if ( this.defaultGroup != 0 ){
                    for(let key of $('.addcontent').children()){
                        this.lastChilds=$(key).children().eq(key.value).text();
                    } 
                    this.arr.push(this.lastChilds); 
                    this.$emit('childByValue', this.arr)

                    this.childList(this.arr.slice()) 
                } 
            },
        } 
    }
</script>

<style scoped>
    .addClass {
        background: #7BAFDC;
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        float: left;
        margin-left: 200px;
        color: #fff
    }
  
</style>