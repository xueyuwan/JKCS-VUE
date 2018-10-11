<template>
      <div>
        <mt-header fixed title="首页"></mt-header>
        <banner></banner>
        <indexItems></indexItems>
        <tabbar></tabbar>
      </div>
</template>
<script>
    import { Header } from 'mint-ui';
    import { Search } from 'mint-ui'
    import banner from '../components/banner.vue'
    import tabbar from '../components/tabbar.vue'
    import indexItems from '../components/indexItems.vue'

    export default{
        data(){
            return{
               value:"搜索"
            }
        },
        components:{
           banner,
           tabbar,
           indexItems
        }
    }
</script>
<style lang="scss" scoped="" type="text/css">
   header{
       height: 48px;
   }
</style>
