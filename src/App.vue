<template>
  <div id="app">
    <h2>hello world</h2>
    <h3>☁<span style="font-size:32px;">☁️
      </span>你好☁ clouds-acc,<span style="font-size:32px;">☁️
        </span>我期待<span style="font-size:32px;">☁️</span>你很久了
    </h3>
    <cui-hello></cui-hello>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  color: #42b983;
}
h3{
  color: #42b983;
}
</style>
