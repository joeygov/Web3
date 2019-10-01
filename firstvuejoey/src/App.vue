<template>
  <div id="app">
    <Header
      v-show="$route.path === '/Login' || $route.path === '/registrationForm'|| $route.path === '/' ? true: false"
    ></Header>
    <AppBody></AppBody>
    <sidebar
      v-show="$route.path === '/Dashboard' || $route.path === '/Subjects'|| $route.path === '/PersonalInfo' ? true: false"
    ></sidebar>
  </div>

</template>

<script>
import sidebar from "components/Frame/sidebar.vue";
import Header from "components/Frame/Header.vue";
import AppBody from "components/Frame/Body.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody,
    sidebar
  }
};
</script>