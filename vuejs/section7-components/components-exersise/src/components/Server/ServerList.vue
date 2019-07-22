<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server v-for="server in servers" :key="server.id" :server="server"></server>
    </ul>
  </div>
</template>

<script>
import server from "./Server";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "critical" },
        { id: 2, status: "critical" },
        { id: 3, status: "critical" },
        { id: 4, status: "critical" },
        { id: 5, status: "critical" }
      ]
    };
  },
  components: {
    server
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
