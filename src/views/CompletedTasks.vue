<template>
  <v-container>
    <h2>Completed Tasks</h2>
    <v-row>
      <v-col cols="12" md="6" lg="4" xl="3" v-for="(task, index) in getDoneTasks" :key="index">
        <SingleTask :task="task" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import { mapGetters } from "vuex";
export default {
  name: "CompletedTasks",
  methods: {},
  computed: {
    ...mapGetters(["getDoneTasks"]),
  },
  components: { SingleTask },
};
</script>

<style>
</style>