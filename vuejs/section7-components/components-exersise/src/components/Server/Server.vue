<template>
  <li
    class="list-group-item"
    @click="edit"
    style="cursor:pointer"
  >Server #{{ server.id }} - {{server.status}}</li>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["server"],
  methods: {
    edit() {
      console.log(this.server);
      eventBus.$emit("serverSentToDetails", this.server);
    }
  }
};
</script>
