<template>
  <div class="aside-container">
    <vue-scroll :ops="scrollOps">
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            background-color="#294254"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router= true
            :collapse="hideAside">
            <!--<el-menu-item index="/index/dashboard">-->
              <!--<i class="el-icon-location"></i>-->
              <!--<span slot="title">首页</span>-->
            <!--</el-menu-item>-->
            <el-submenu index="/index/CustomerManage">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>客户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/CustomerManage/financing">融资平台</el-menu-item>
                <el-menu-item index="/index/CustomerManage/eCommerce">电商平台</el-menu-item>
                <el-menu-item index="/index/CustomerManage/RB">荣邦</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </vue-scroll>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      scrollOps: {
        vuescroll: {
          mode: 'native'
        },
        bar: {
          vBar: {
            background: '#b9b9b9',
            keepShow: true,
            opacity: 0.5,
            hover: '#efefef'
          },
          hBar: {
            background: '#b9b9b9',
            keepShow: true,
            opacity: 0.5,
            hover: '#efefef'
          }
        }
      }
    };
  },
  computed: mapGetters([
    'hideAside'
  ])
};
</script>
<style scoped>
  .aside-container {
    width: 100%;
    height: 100%;
  }
  .el-menu {
    border: none;
  }
</style>
