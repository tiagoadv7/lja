<template>
  <v-snackbar v-model="alert.show" :timeout="alert.timeout" top right color="error">
    <span v-if="typeof alert.text == 'string'">
      {{ alert.text }}
    </span>
    <ul v-else>
      <li v-for="(msg, index) in alert.text" :key="index">
        {{ msg }}
      </li>
    </ul>

    <v-btn color="danger" icon @click="alert.show = false" class="float-right">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>


<script>
export default {
  data() {
    return this.$root.$data;
  },
  watch: {
    alert: {
      handler: function () {
        if (!this.alert.show) {
          this.alert.type = "";
          this.alert.text = null;
          this.timeout = 5000;
        }
      },
      deep: true,
    },
  },
};
</script>