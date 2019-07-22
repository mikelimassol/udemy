<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-server-list></app-server-list>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>


<script>
import Header from "./components/Shared/Header.vue";
import Footer1 from "./components/Shared/Footer.vue";
import ServerList from "./components/Server/ServerList.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer1,
    "app-server-list": ServerList,
    "app-server-details": ServerDetails
  }
};
</script>

<style>
</style>
