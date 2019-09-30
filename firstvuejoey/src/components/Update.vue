<template>
  <!-- <div id="container">
    <div class="jumbotron">
      <h1>Update Information</h1>
    </div>
    <div class="row loginPage">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">UPDATE INFO</div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="bmd-label-floating">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
              </div>
              <div class="form-group">
                <label for="email" class="bmd-label-floating">Email</label>
                <input type="text" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="pwd" class="bmd-label-floating">Password</label>
                <input type="password" class="form-control" id="passw" v-model="password">
              </div>
              <center>
                <button
                  type="button"
                  class="btn btn-outline-success login-btn"
                  id="btnLogin"
                  @click="save"
                >Save changes</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ////////-->
  <b-container class="bv-container">
    <b-row>
      <b-col></b-col>
      <b-card
        title="MY BIO"
        style="box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); margin-top:100px"
      >
        <b-form>
          <div class="form-group">
            <label for="username" class="bmd-label-floating">Username</label>
            <input type="text" class="form-control" id="username" v-model="username">
          </div>
          <div class="form-group">
            <label for="email" class="bmd-label-floating">Email</label>
            <input type="text" class="form-control" id="email" v-model="email">
          </div>
          <div class="form-group">
            <label for="pwd" class="bmd-label-floating">Password</label>
            <input type="password" class="form-control" id="passw" v-model="password">
          </div>
          <center>
            <button
              type="button"
              class="btn btn-outline-success login-btn"
              id="btnLogin"
              @click="save"
            >Save changes</button>
          </center>
        </b-form>
      </b-card>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import ROUTER from "router";
import AUTH from "services/auth";
export default {
  data() {
    AUTH;
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Password", this.password),
        AUTH.save(this.username, this.email, this.password);
    }
  }
};
</script>

