<template>
  <v-container>
    <h2>Bookmark Tasks</h2>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="3"
        v-for="(task, index) in getBookmarkTasks.slice(
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
        :length="Math.round(getBookmarkTasks.length / 12)"
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
  name: "BookmarkTasks",
  data(){
    return {
      page: 1,
    }
  },
  methods: {},
  computed: {
    ...mapGetters(["getBookmarkTasks"]),
  },
  components: { SingleTask },
};
</script>

<style>
</style>