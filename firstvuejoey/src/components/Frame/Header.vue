<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="secondary">
      <b-navbar-brand id="title">KAT_ON</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="homeLogin" v-on:click="redirect('/form')" size="lg" variant="light">LOG IN</b-nav-item>
          <b-nav-item id="homeSignUp" v-on:click="redirect('/registrationForm')" size="lg">SIGN UP</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped lang='scss'>
@import "~assets/colors.scss";
#title {
  color: $primary !important;
}
</style>
<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>

