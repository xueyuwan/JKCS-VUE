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
    import {Toast} from "mint-ui";
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
                var  USERNAME=this.USERNAME;
                var  PASSWORD=this.PASSWORD;
                var regPhone=/^[1]{1}[0-9]{10}$/;
                if(!regPhone.test(USERNAME)){                
                    Toast("请输入正确的手机号");
                    return;
                }
                var regUpwd=/^[\w]{6,12}$/;
                if(!regUpwd.test(PASSWORD)){                
                    Toast("请输入6-12密码,可包含数字字母下划线");
                    return;
                }
                //  this.$http({
                //     method: 'post',
                //     url: '/api/plat/ignore/login.service',
                //     data:{
                //         USERNAME:USERNAME,
                //         PASSWORD:PASSWORD
                //     }
                // })

                  this.$http.post("/api/plat/ignore/login.service",{
                        USERNAME:USERNAME,
                        PASSWORD:PASSWORD
                    }).then(result=>{
                        
                   });

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
