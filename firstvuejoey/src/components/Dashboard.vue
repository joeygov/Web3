<template>
  <div>
    <div class="jumbotron">
      <h1>Dashboard</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px; box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); margin-top:100px">
        <center>
          <b-row no-gutters>
            <b-card-body>
              <h1>HI {{username}}</h1>
              <h3>Welcome to Kat-ON</h3>
            </b-card-body>
          </b-row>
        </center>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
#card {
  margin-top: 30px;
  margin-left: 400px;
}
.jumbotron {
  padding: 20px;
  text-align: center;
}
#image {
  width: 250px;
  height: 220px;
}
</style>

<script>
//import ROUTER from "router";
export default {
  //name: "card",
  data() {
    return {
      username: sessionStorage.getItem("Username")
    };
  }
};
</script>
