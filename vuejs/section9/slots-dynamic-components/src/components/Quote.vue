<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <p style="color:#ccc">
        <slot name="subtitle">subtitle default text</slot>
      </p>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  color: red;
  border: 1px solid red;
  box-shadow: 1px 1px 10px 10px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
.title {
  font-style: italic;
}
</style>
