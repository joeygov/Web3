<template>
  <div id="app">
  <Header> </Header>
  <AppBody> </AppBody>
  </div>

</template>

<script>
import Header from "components/Frame/Header.vue";
import AppBody from "components/Frame/Body.vue"

export default {
  name: "app",
  components: {
    Header,
    AppBody
  }
}
</script>

<style>

</style>
