<template>
  <div id="app">
    <Header
      v-show="$route.path === '/Login' || $route.path === '/registrationForm'|| $route.path === '/' ? true: false"
    ></Header>
    <AppBody></AppBody>
    <Sidebar
      v-show="$route.path === '/Dashboard' || $route.path === '/Subjects'|| $route.path === '/PersonalInfo' ? true: false"
    ></Sidebar>
  </div>

</template>

<script>
import Sidebar from "components/Frame/Sidebar.vue";
import Header from "components/Frame/Header.vue";
import AppBody from "components/Frame/Body.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody,
    Sidebar
  }
};
</script>