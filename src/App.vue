<template>
    <div id="app">
      <vuescroll :ops="scrollOps">
         <div id="nav">
           <router-link to="/home">Home</router-link> |
           <router-link to="/about">About</router-link>
         </div>
         <keep-alive>
           <router-view v-if="$route.meta.keepAlive" class="cont-view"></router-view>
         </keep-alive>
         <router-view v-if="!$route.meta.keepAlive" class="cont-view"></router-view>
      </vuescroll>
    </div>
</template>
<script>
import vuescroll from 'vuescroll'
export default {
  components: { vuescroll },
  data () {
    return {
      scrollOps: {
        vuescroll: {
          mode: 'slide',
          sizeStrategy: 'percent',
          detectResize: true
        },
        scrollPanel: {
          scrollingX: false
        },
        rail: {},
        bar: {
          onlyShowBarOnScroll: false,
          keepShow: false,
          background: '#c1c1c1',
          size: '6px'
        }
      }
    }
  }
}
</script>
<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }
  html,body {
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
