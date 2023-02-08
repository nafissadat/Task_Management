<template>
  <v-container>
    <h2>Completed Tasks</h2>
    <v-row>
      <!-- show 12 task in every page    ==>     .slice((this.page - 1) * 12 , this.page * 12      -->
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="3"
        v-for="(task, index) in getDoneTasks.slice(
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
        :length="Math.round(getDoneTasks.length / 12)"
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
  name: "CompletedTasks",
  data() {
    return {
      page: 1,
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getDoneTasks"]),
  },
  components: { SingleTask },
};
</script>

<style>
</style>