<template>
    <div class="box">
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>6</li>
         <li>7</li>
         <li>8</li>
        <div class="clearfix" >
            <mt-field   placeholder="请输..." v-model="inputValue"></mt-field>
            <mt-button type="primary" @click="add()">添加</mt-button>
        </div>
        
         <ul id="newsList" style="width:100%">
            <todoList v-for="(item,index) of list" 
            :key="index" 
            :content="item" 
            :index="index"
             @delete="handleDelete">
            </todoList>
         </ul>
    </div>
</template>
<script>
     import todoList from '../components/todoList.vue'
     export default{
        data(){
            return{
                inputValue: "",
                list:[]
            }
        },
        methods: {
            add:function(){
                this.list.push(this.inputValue)
                this.inputValue="";
            },
            handleDelete:function(index){
               this.list.splice(index,1);
            }
           
        },
        components:{
            todoList
        }
    }
    
</script>
<style lang="scss" scoped="" type="text/css">
 .box{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;
    li{
         height: 50px;
         border: 1px solid #ddd;
         width: 24%;
    }
 }
</style>
