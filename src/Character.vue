<template>
  <a class="container">
    <img :src="source">
    <div>{{ text }}</div>
  </a>
</template>
<script>
  export default {
    props: ['source', 'text']
  }
</script>
<style>
.container {
  display: inline-block;
  margin-right: 2px;
}
</style>