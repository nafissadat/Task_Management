<template>
  <v-container>
    <v-card class="ma-4 pa-4" max-width="344">
        <v-card-text>
          <div>Topic</div>
          <p class="text-h6 text--primary">{{ task.title }}</p>
        </v-card-text>
      <div>
        <p class="pa-2">Deadline: 01.05.2023</p>
        <div class="text--primary pa-2">Short Description 1</div>
        <v-card-actions>
          <v-btn text color="teal accent-4">
              Details
            </v-btn>

          <!-- ediiiiiiiiiiiiiit https://codepen.io/nanadjei2/pen/Nwbgpq -->
          <v-checkbox v-model="task.completed"></v-checkbox>
          <v-btn text color="teal accent-4"><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn text color="red accent-4" 
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </v-card-actions>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SingleTask",

  data: () => ({
    
  }),
  methods: {

  },
  props: ["task"],
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>