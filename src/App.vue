<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
import api from '@/api/api.js'
import {get, post} from '@/api/index.js'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  watch:{

  },
  components: {

  },
  mounted() {

  },
  created() {
   
  },
  methods:{
   
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
