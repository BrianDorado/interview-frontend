<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/addcontact">Add Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px
  a
    font-weight: bold
    color: #3676bb
    &.router-link-exact-active
      color: #2360a1
    margin-left: 20px

</style>
