<template>
  <b-container class="bv-container">
    <b-row>
      <b-col></b-col>
      <b-card
        title="Log IN"
        style="box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); margin-top:100px"
      >
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="emailAdd" description="We'll never share your email with anyone else.">
            <b-form-input
              id="userName"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="userPassword">
            <b-form-input
              id="password"
              v-model="form.password"
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

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //console.log(JSON.stringify(this.form));
    }
  }
};
</script>