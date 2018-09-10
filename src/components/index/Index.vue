<template>
  <el-container>
    <el-header>
      <div class="logo" :style="'width:'+asideWidth">logo</div>
      <i class="iconfont  icon-caidan hideAside" @click='hideAside'></i>
      <div class="userInfo">
        <div class="userName">您好，{{userName}}</div>
        <div class="loginOut" @click="loginOut">退出</div>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <div class="main-container">
          <transition mode="out-in" enter-active-class="animated zoomIn">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
    Aside
  },
  data() {
    return {
      userName: ''
    };
  },
  mounted() {
    this.$request({
      url: this.$api.getUserInfo.url,
      method: this.$api.getUserInfo.method
    }, '').then(res => {
      this.userName = res.data.responseDate.name;
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    ...mapActions([
      'hideAside'
    ]),
    loginOut() {
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
      }).catch(() => {});
    }
  },
  computed: {
    ...mapGetters([
      'asideWidth'
    ])
  }
};
</script>

<style scoped>
  .title {
    text-align: center;
  }
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background: rgb(54, 61, 66);
    padding: 0;
  }
  .el-aside {
    background: #294254;
    transition: width ease 0.3s;
  }
  .el-main {
    position: relative;
    padding: 5px;
  }
  .logo {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    background: rgb(54, 61, 66);
    transition: width ease 0.3s;
  }
  .hideAside {
    cursor: pointer;
  }
  .main-container {
    padding: 5px;
    position: absolute;
    top: 5px;
    bottom: 0;
    left: 5px;
    right: 5px;
    overflow-y: auto;
    background: #efefef;
    z-index: 98;
  }
  .userInfo {
    width: 200px;
    float: right;
    height: 60px;
    line-height: 60px;
    margin: 0 10px;
    text-align: center;
    color: #fff;
  }
  .loginOut, .userName {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .userName {
    width: 130px;
  }
  .loginOut {
    width: 60px;
    cursor: pointer;
  }
</style>
