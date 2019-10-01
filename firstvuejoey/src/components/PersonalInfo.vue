<template>
  <b-container class="bv-container">
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-card
          title="MY BIO"
          style="box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); margin-top:100px"
        >
          <b-form>
            <div class="form-group">
              <h6>Username: {{username}}</h6>
            </div>
            <div class="form-group">
              <h6>Email: {{email}}</h6>
            </div>
            <div class="form-group">
              <h6 type="password">Password: {{password}}</h6>
            </div>
            <div>
              <p>Do you want to edit your account?</p>
              <router-link to="/Update">Edit</router-link>
            </div>
          </b-form>
        </b-card>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<style>
.jumbotron {
  padding: 20px;
  text-align: center;
}
#container {
  margin-top: 50px;
  margin-left: 380px;
  
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