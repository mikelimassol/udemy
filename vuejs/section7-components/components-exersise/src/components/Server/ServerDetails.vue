<template>
  <div class="col-xs-12 col-sm-6">
    <template v-if="server">
      <p v-if="!updated">Server Details are currently not updated</p>
      <p v-else>Server Details are updated</p>
      <p>{{server.id}} : {{server.status}}</p>
      <button @click="setToNormal">Set to normal</button>
    </template>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data: function() {
    return {
      server: null,
      updated: false
    };
  },
  methods: {
    setToNormal() {
      this.server.status = "Normal";
      this.updated = true;
    }
  },
  created() {
    eventBus.$on("serverSentToDetails", server => {
      this.updated = false;
      this.server = server;
    });
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
