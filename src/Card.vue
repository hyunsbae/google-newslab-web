<template>
  <div @click="show = !show" class="card">
    <p class="summary"> {{summary}} </h2>
    <p v-if="show">{{ description }}</p>
    <span>{{where}}</span>
    <a v-for="link in links" href="link">더 알아보기</a>
  </div>
</template>
<script>
  export default {
    props: ['summary', 'description', 'where', 'links'],
    data() {
      return {
        show: false
      }
    }

  }
</script>
<style>
  .card:focus,
  .card:hover {
    background: #1978B9;
    color: white
  }

  .card {
    border-radius: 2rem;
    display: inline-block;
    position: relative;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: 10px;
    background-color: #e1e7ea;
  }

  .summary {
    display: inline-block;
    font-size: 1.3em;
    font-weight: 600;
  }
</style>