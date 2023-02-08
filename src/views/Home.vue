<template>
    <v-container>
        <h1>Tasks List</h1>
        <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          v-for="(task, index) in getAllTasks"
          :key="index"
        >
          <SingleTask :task="task" />
        </v-col>
      </v-row>
      </v-container>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",

  methods: {
    showAllTasks() {
      this.$store.dispatch("getAllTasksfromAPI");
    },
  },
  computed: {
    ...mapGetters(["getAllTasks"]),
  },
  mounted() {
    this.showAllTasks();
  },
  components: { SingleTask },
};
</script>

<style>
</style>