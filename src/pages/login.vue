<template>
    <div>
       <h5>用户登录</h5>
       <mt-field label="用户名" placeholder="请输入用户名"  v-model="USERNAME"></mt-field>
       <mt-field label="密码" placeholder="请输入密码" type="password" v-model="PASSWORD"></mt-field>
       <mt-button type="primary" size="large" id="login"  v-on:click="login()">登录</mt-button>
       <span>注册</span> <span>找回密码</span>
       <div>{{fullname}}</div>
    </div>
</template>
<script>
    import { Button } from 'mint-ui';
    import { Header } from 'mint-ui';
    export default{
        data(){
            return{
                USERNAME:"",
                PASSWORD: ""
            }
        },
        computed:{
            fullname:function(){
                return this.USERNAME+" "+this.PASSWORD
            }
           
        },
        methods: {
            login: function () {
                var that=this;
                let data = {
                        USERNAME:this.USERNAME,
                        PASSWORD:this.PASSWORD
                    }
                that.$http({
                    method: 'post',
                    url: '/api/plat/ignore/login.service',
                    data:data
                })

            }  
        }
    }
</script>
<style lang="scss" scoped="" type="text/css">
  h5{
      margin: 60px auto;
      text-align: center;
  }
  #login{
    width: 80%;
    margin: 50px auto;

  }
</style>
