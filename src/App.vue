<template>
  <div id="app">
    <Tabs :tabs="tabs">

    </Tabs>
  </div>
</template>

<script>
  import Tabs from './components/Controls/Tabs';


export default {
  name: 'app',
  components: {
    Tabs
  },
  data(){
    return {
      tabs: [
        {
          name: 'Activities',
          id: 'activities',
          module: ()=> import('./components/Modules/ActivityPage')
        },
        {
          name: 'My list',
          id: 'mylist',
          module: ()=> import('./components/Modules/ListPage')
        }
      ]
    }
  },
}
</script>

<style lang="less">
  body {

    color: #34495e;
    padding-top: 50px;
  }
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
