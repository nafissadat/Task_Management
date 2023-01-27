<template>
  <v-container>
    <MenuBar/>
    <Login />
  </v-container>
  
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
