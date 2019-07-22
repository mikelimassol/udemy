<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'quote-slots-component'">Quote</button>
        <button @click="selectedComponent = 'author-component'">Author</button>
        <button @click="selectedComponent = 'new-component'">New</button>
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="title">{{quoteTitle}}</h1>
            <p slot="content">Quote paragraph</p>
            <p>default slot paragraph</p>
          </component>
        </keep-alive>
        <!-- <quote-slots-component>
          <h1 slot="title">{{quoteTitle}}</h1>
          <p slot="content">Quote paragraph</p>
          <p>default slot paragraph</p>
        </quote-slots-component>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";

export default {
  data() {
    return {
      quoteTitle: "Quote heading",
      selectedComponent: "author-component"
    };
  },
  components: {
    quoteSlotsComponent: Quote,
    newComponent: New,
    authorComponent: Author
  }
};
</script>

<style scoped>
h1 {
  color: grey;
}

p {
  color: blueviolet;
  font-style: italic;
}
</style>
