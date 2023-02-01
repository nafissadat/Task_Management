<template>
  <div>
    <v-container>
    <Login />
  </v-container>
  </div>
</template>

<script>
import Login from "../components/Login";
import MenuBar from "../components/MenuBar.vue"

export default {
  name: "Home",

  components: {
    Login,
    MenuBar,
  },
};
</script>
