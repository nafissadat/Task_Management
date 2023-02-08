<template>
  <v-container>
    <h1>Tasks List</h1>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="3"
        v-for="(task, index) in getAllTasks.slice(
          (this.page - 1) * 12,
          this.page * 12
        )"
        :key="index"
      >
        <SingleTask :task="task" />
      </v-col>
    </v-row>
    <div class="text-center pb-5">
      <v-pagination
        v-model="page"
        :length="Math.round(getAllTasks.length / 12)"
        :total-visible="5"
        circle
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      page: 1,
    };
  },

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