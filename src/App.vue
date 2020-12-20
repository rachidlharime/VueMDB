<template>
  <div id="app">
    
    <b-container>

      <router-view></router-view>

    </b-container>

  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  background: #2F4F4F;
  color: #fff;
  min-height: 100vh;
}

</style>
