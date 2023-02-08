<template>
  <v-app dark="dark">
    <v-main>
      <menu-bar />
      <router-view />
      
    </v-main>
  </v-app>
</template>
<script>
import MenuBar from "../src/components/MenuBar.vue";
export default {
  name: "App",

  data() {
    return {
      page: ""
    }
  },
  components: { MenuBar },
};
</script>
