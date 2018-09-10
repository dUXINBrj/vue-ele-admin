<template>
  <div id='login'>
    <div class="loginContent">
      <img :src="loginLogo">
      <div class="loginForm">
        <el-form :model="loginForm" size="small">
          <el-form-item>
            <el-input
            placeholder="请输入登陆账号"
            v-model="loginForm.userName">
              <i slot="prefix" class="iconfont icon-icon"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
            type="password"
            placeholder="输入您的密码"
            v-model="loginForm.pwd">
              <i slot="prefix" class="iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <button class="loginBtn" @click="login">登陆</button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginLogo: require('@/assets/img/login-logo.png'),
      loginForm: {
        userName: 'admin',
        pwd: '123456'
      }
    };
  },
  methods: {
    login() {
      this.$router.push({
        name: 'index'
      });
    }
  }
};
</script>
<style scoped>
  #login {
    width: 100%;
    height: 100%;
    background: url('/static/img/login-back.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .loginContent {
    width: 350px;
    height: 400px;
    text-align: center;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(10%,-50%);
    -moz-transform: translate(10%,-50%);
    transform:translate(10%,-50%);
  }
  .loginContent img {
    width: 70%;
  }
  .loginForm {
    width: 100%;
    height: 300PX;
    background: url('/static/img/login-form.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .el-form {
    width: 250px;
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
  }
  .el-button {
    width: 100%;
  }
  .loginBtn {
    width: 100%;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border-radius: 4px;
    color: rgb(242, 182, 64)
  }
</style>
