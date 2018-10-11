<template>
  <div id="tab-bar">
      <mt-tabbar>
        <mt-tab-item id="首页">
            <img slot="icon" src="../assets/images/tabbar/bottom-pic1-gray.png">
           首页
        </mt-tab-item>
        <mt-tab-item id="就诊">
            <img slot="icon" src="../assets/images/tabbar/bottom-pic2-gray.png">
            就诊
        </mt-tab-item>
        <mt-tab-item id="健康">
            <img slot="icon" src="../assets/images/tabbar/bottom-pic3-gray.png">
            健康
        </mt-tab-item>
        <mt-tab-item id="个人">
            <img slot="icon" src="../assets/images/tabbar/bottom-pic4-gray.png">
            个人
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
    import { Tabbar, TabItem } from 'mint-ui';
    export default{
         data(){
              return{}
         }
    }

</script>
