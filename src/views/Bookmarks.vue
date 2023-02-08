<template>
  <v-container>
    <h2>Bookmark Tasks</h2>
    <v-row>
      <v-col cols="12" md="6" lg="4" xl="3" v-for="(task, index) in getBookmarkTasks" :key="index">
        <SingleTask :task="task" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import { mapGetters } from "vuex";
export default {
  name: "BookmarkTasks",
  methods: {},
  computed: {
    ...mapGetters(["getBookmarkTasks"]),
  },
  components: { SingleTask },
};
</script>

<style>
</style>