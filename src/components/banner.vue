<template>
    <div class="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in temps" :key="item.id">
                   <img :src="item.imgUrl">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        name: 'app',
        data() {
            return {
                     temps: [
                        {
                          imgUrl: require("../assets/images/1.jpeg") ,
                          id:"1",
                          des:"风景"
                        },
                        {
                        imgUrl: require("../assets/images/2.jpeg") ,
                        id:"2",
                        des:"夜景"
                        },
                        {
                        imgUrl: require("../assets/images/3.jpeg") ,
                        id:"3",
                        des:"美景"
                        },
                    ],
            };
            },
        methods: {
        
    }
    }
   

</script>
<style lang="scss" scoped="" type="text/css">
 .banner{
     height: 150px;
     img{
         width: 100%;
         height: 150px;
     }
 }
</style>

