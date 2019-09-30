<template>
  <b-container class="bv-container">
    <b-row>
      <b-col></b-col>
      <b-card
        title="Log IN"
        style="box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); margin-top:100px"
      >
        <b-form>
          <b-form-group id="emailAdd" description="We'll never share your email with anyone else.">
            <b-form-input
              id="userEmail"
              v-model="form.userEmail"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="userPassword">
            <b-form-input
              id="confirmedPassword"
              v-model="form.confirmedPassword"
              type="password"
              required
              placeholder="Password"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="rememberPassword">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Remeber password?</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button id="btnSubmit" @click="submit" type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import AUTH from "services/auth";
import ROUTER from 'router';
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        userEmail: "",
        confirmedPassword: "",
        checked: []
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      AUTH.login(this.form.userEmail, this.form.confirmedPassword);
      // ROUTER.push('/Dashboard')
    }
  }
};
</script>