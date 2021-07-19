<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {

    },
  }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
// @media screen and (min-width: 500px) {
//   #app{
//     width: 500px;
//     margin: 0 auto;
//   }
//   #app .van-tabbar{
//     width: 500px;
//     left: 50%;
//     transform: translate(-50%,0);
//   }
// }
</style>
