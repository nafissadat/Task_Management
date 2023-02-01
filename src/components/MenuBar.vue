<template>
  <v-toolbar dense dark>
    <v-toolbar-title>Task Management</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in menuList" :key="item.id" :to="item.link" text>
      {{ item.title }}</v-btn>
    </v-toolbar-items>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <router-link to="/">
      <v-btn icon>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </router-link>
    <v-menu class="hidden-md-and-up" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          v-bind="attrs"
          v-on="on"
        ></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item v-for="(item, id) in menuList" :key="id" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      menuList: [
        { title: "All Tasks", id: "1", link: "/alltasks" },
        { title: "Done Tasks", id: "2", link: "/donetasks" },
        { title: "Remained Tasks", id: "3", link: "/remainedtasks" },
      ],
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_style.scss";
</style>