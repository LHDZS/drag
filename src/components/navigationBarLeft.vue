<template>
  <div class="navigationBarLeft">
    <el-menu
      ref='menu'
      :default-active="$route.path"
      :router="true"
      background-color="#002140"
      text-color="#ffffffa6"
      active-text-color="#fff"
      class="el-menu-vertical-demo"
      @select="handleSelectLeft">
      <el-submenu v-for="(item,key) in menuLeftArr" :key="key" :index="String(key)">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="(list,index) in item.team" :key="index" :index="list.path" :indexpath="list.path">{{list.name}}
          <!-- <router-link :to="list.path" style="display: inline-block;width:100%;height:100%">{{list.name}}</router-link> -->
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navigationBarLeft',
  data () {
    return {
      menuLeftArr:[
        {name: '数据概览',icon: 'iconfont icon-gth-gsshujugailan', team:[{name:'业务汇总',path:'/'}]},
        {name: '商户中心',icon: 'iconfont icon-gth-gsshanghuzhongxin', team:[{name:'商户管理',path:'/merchants/businessInformation'},{name:'签约管理',path:'/merchants/contractInformation'},{name:'地址管理',path:'/merchants/addressInformation'},{name:'抬头管理',path:'/merchants/lookUpInformation'}]},
        {name: '个体户中心',icon: 'iconfont icon-gth-gsgetihuzhongxin', team:[{name:'个体户管理',path:'/trading/userAll'},{name:'个体户信息',path:'/trading/userInformation'}]},
        {name: '发票管理',icon: 'iconfont icon-gth-gsfapiaozhongxin', team:[
          {name:'发票申请',path:'/trading/invoiceApplyFor'},
          {name:'全部发票',path:'/trading/invoicesAll'},
          {name:'发票办理',path:'/trading/invoiceTransact'},
          {name:'发票管理',path:'/trading/invoiceManagement'}
        ]},
        {name: '财务中心',icon: 'iconfont icon-gth-gscaiwuzhongxin', team:[{name:'资金账户',path:'/financial/capitalAccount'},{name:'充值申请',path:'/financial/topUpApplication'},]},
        {name: '信息维护',icon: 'iconfont icon-gth-gsxinxiweihu', team:[{name:'注册地管理',path:'/system/registered'},{name:'经营范围管理',path:'/system/businessScope'},{name:'交付商管理',path:'/system/delivery'}]}
      ]
    }
  },
  watch: {
    $route() {
      let i = this.$route.path;
      console.log(i,'路由')
      setTimeout(() => { //路由跳转
        this.$refs.menu.activeIndex = i
      }, 100)
    }
  },
  props:{
    // menuLeftArr:Array,
    activeIndex: String
  },
  created() {
    // console.log(this.activeIndex)
  },
  methods: {
    handleSelectLeft(key, keyPath) {
      // console.log(key, keyPath)
      // sessionStorage.setItem('activeIndex',key)
      // let arr = key.split("-")
      // let i = arr[0]
      // let k = arr[1]
      // console.log(this.menuLeftArr[i].team[k].path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navigationBarLeft {
  float: left;
  width:182px;
  height: calc(100% - 58px);
  background:rgba(255,255,255,1);
  a{text-decoration:none; out-line: none; color: #333333}
  .el-menu-vertical-demo {
    height: 100%;
    overflow-y: scroll; 
    white-space: nowrap;
    text-align: left;
  }
  ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
   .el-menu-item.is-active {
    background-color: #1890FF !important;
  }
}
</style>

<style>
.navigationBarLeft .el-submenu .el-menu-item {
    box-sizing: border-box;
    min-width: 100%;
    font-size: 12px;
}
.navigationBarLeft .el-menu {
    border-right: none;
}
/* .navigationBarLeft .el-menu-item.is-active a {
  color: #409EFF;
} */
.el-menu-item.is-active {
  background-color: #1890FF;
}
</style>