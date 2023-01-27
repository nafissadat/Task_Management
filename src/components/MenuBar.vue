<!-- <template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">

            </v-col>
            <v-col cols="12" md="6">
                <v-app-bar elevation="4">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Task Management</v-toolbar-title>

                    <v-spacer></v-spacer>
                </v-app-bar>
            </v-col>
            <v-col cols="12" md="3">

            </v-col>
        </v-row>
    </v-container>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

</template> -->
<template>
    <v-container>
        <v-toolbar dense dark>
            <v-toolbar-title>Task Management</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="item in menuList" :key="item.id" :to="item.link" text>{{ item.title }}</v-btn>
            </v-toolbar-items>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu class="hidden-md-and-up" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon class="hidden-md-and-up" v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
                </template>
                <v-list>
                    <v-list-item v-for="(item, id) in menuList" :key="id">
                        <v-list-item-content>
                            <v-list-item-title >{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>

    </v-container>
</template>

<script>
export default {
    name: "MenuBar",
    data() {
        return {
            menuList: [
                { title: "All Tasks", id: "1", link: "#" },
                { title: "Done Tasks", id: "2", link: "#1" },
                { title: "Remained Tasks", id: "3", link: "#2" },
            ]
        }
    },
    methods: {
        menuItems() {
            return this.menu
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_style.scss";
</style>