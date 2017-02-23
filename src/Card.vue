<template>
  <div @click="show = !show" class="card">
    <div>
      <div class="summary-button"> {{type}} </div>
      <div class="summary"> {{summary}} </div>
    </div>
    <div class="description" v-if="show">{{ description }}<a class="link" v-for="(link, key, index) in links" :href="link">더보기</a>
    </div>
    <div class="where" v-if="!show">{{where}}</div>
  </div>
</template>
<script>
  export default {
    props: ['summary', 'description', 'where', 'type', 'links'],
    data() {
      return {
        show: false
      }
    }

  }
</script>
<style>
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .summary-button {
    font-size: 15px;
    padding: 0.2em 1em;
    float: left;
    color: black;
    background-color: white;
    border-radius: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.02em;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.17);
    margin-right: 1em;
  }

  .card:focus,
  .card:hover {
    background: #0081C2;
    color: white

  }

  .card:focus, .card:hover .link{
    color: white;
  }

  .card {
    border-radius: 2rem;
    display: inline-block;
    position: relative;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 1.5em;
    background-color: #EDEDED;
    font-family: 'Noto Sans KR' sans-serif;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.17);
  }

  .summary {
    display: block;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.02em;
    font-weight: 400;
  }

  .description {
    display: block;
    font-size: 17.5px;
    line-height: 26px;
    letter-spacing: -0.03em;
    font-weight: 300;
    margin-top: 1em;
  }

  .link {
    font-size: 17.5px;
    line-height: 26px;
    letter-spacing: -0.03em;
    font-weight: 300;
    color: black;
    font-weight: 500;
    margin-left: .4em;
  }

  .where {
    display: block;
    font-size: 17.5px;
    font-weight: 300;
    letter-spacing: -0.03em;
    line-height: 26px;
    margin-top: 1em;
  }
</style>