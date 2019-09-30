<template>
  <div id="container">
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <!-- <b-card-img :src="require('assets/user.png')" class="rounded-0"></b-card-img> -->
          </b-col>
          <b-col md="6">
            <div class="jumbotron">
              <h1>Personal Information</h1>
            </div>
            <b-card-body title="Personal Info">
              <hr>
              <b-card-text>
                <h6>Username: {{username}}</h6>
                <h6>Email: {{email}}</h6>
                <h6 type="password">Password: {{password}}</h6>
              </b-card-text>
              <p>Do you want to edit your account?</p>
              <router-link to="/Update">Edit</router-link>
            </b-card-body>
          </b-col>
          <b-col md="6"></b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style>
.jumbotron {
  padding: 20px;
  text-align: center;
}
#container {
  margin-top: 50px;
  margin-left: 380px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
</style>
<script>
import AUTH from "services/auth";
export default {
  data() {
    return {
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password")
    };
  },
  methods: {
    update: function() {
      AUTH.update(this.username, this.email, this.password);
    }
  }
};
</script>