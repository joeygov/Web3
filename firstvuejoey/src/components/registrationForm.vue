<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col lg>
        <b-card
          title="SIGN UP"
          style="box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); margin-top: 100px"
        >
          <b-form @submit="submit" v-if="show">
            <b-form-group id="lastName">
              <b-form-input
                id="userLastName"
                v-model="form.userLastName"
                type="text"
                required
                placeholder="LastName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="firstName">
              <b-form-input
                id="userFirstName"
                v-model="form.userFirstName"
                type="text"
                required
                placeholder="FirstName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="emailAdd">
              <b-form-input
                id="userEmail"
                v-model="form.userEmail"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="initialUserPassword">
              <b-form-input
                id="initialPassword"
                v-model="form.initialPassword"
                type="password"
                required
                placeholder="New Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="confirmUserPassword">
              <b-form-input
                id="confirmedPassword"
                v-model="form.confirmedPassword"
                type="password"
                required
                placeholder="Current Password"
              ></b-form-input>
            </b-form-group>

            <b-button id="btnSubmit" type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>



<script>
import AUTH from "services/auth";
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        userLastName: "",
        userFirstName: "",
        userEmail: "",
        initialPassword: "",
        confirmedPassword: ""
      },
     show: true
    };
  },
  methods: {
    submit(evt) {
      evt.preventDefault();
        sessionStorage.setItem("userLastName", this.form.userLastName),
        sessionStorage.setItem("userFirstName", this.form.userFirstName),
        sessionStorage.setItem("userEmail", this.form.userEmail),
        sessionStorage.setItem("initialPassword", this.form.initialPassword),
        sessionStorage.setItem("confirmedPassword",this.form.confirmedPassword),
        AUTH.register(this.form.userEmail, this.form.confirmedPassword)

        
    }
  }
};
</script>