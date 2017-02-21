<template>
  <div id="background">
    <transition name="loading">
      <div v-show="go" id="water"></div>
    </transition>
    <transition name="late-loading">
      <div class="swimming" v-if="show"></div>
    </transition>
    <div class="logo"></div>
    <div class="images">
      <div class="pool" @click.prevent="moveToCandidatePage">
      </div>
    </div>
    <div id="all">
      <div class="images">
        <div class="container" @mousedown="selected = 'ahn'">
          <div id="ahn"></div>
          <div class="name">안철수</div>
        </div>
        <div class="container" @mousedown="selected = 'sim'">
          <div id="sim"></div>
          <div class="name">심상정</div>
        </div>
        <div class="container" @mousedown="selected = 'moon'">
          <div id="moon" src="/src/assets/img/moon-s.png"></div>
          <div class="name">문재인</div>
        </div>
        <div class="container" @mousedown="selected = 'jung'">
          <div id="jung" src="/src/assets/img/jung-s.png"></div>
          <div class="name">안희정</div>
        </div>
      </div>
      <div class="images">
        <div class="container" @mousedown="selected = 'lee'">
          <div id="lee" src="/src/assets/img/lee-s.png"></div>
          <div class="name">이재명</div>
        </div>
        <div class="container" @mousedown="selected = 'nam'">
          <div id="nam" src="/src/assets/img/nam-s.png"></div>
          <div class="name">남경필</div>
        </div>
        <div class="container" @mousedown="selected = 'you'">
          <div id="you" src="/src/assets/img/you-s.png"></div>
          <div class="name">유승민</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Character from './Character.vue'
  export default {
    data() {
      return {
        selected: 'none',
        go: false,
        show: false,
      }
    },
    methods: {

      moveToCandidatePage(event) {
        if (this.selected !== 'none') {
          this.go = true;
          this.show = true;
          setTimeout(function (router, to) {
            console.log(to);
            router.push('/candidate/' + to);
          }, 3000, this.$router, this.selected);
        }
      }
    },
    components: {
      Character
    }
  }
</script>
<style>
  @import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);
  .swimming {
    position: absolute;
    bottom: 0px;
    right: 50vw;
    width: 92px;
    height: 127px;
    margin: 0 auto;
    background-image: url('/src/assets/img/tubejung-s.png');
    z-index: 1000;
  }

  .name {
    display: inline-block;
    font-weight: bold;
    font-family: 'Noto Sans Korean';
    font-size: 1em;
    color: #0081c2;
    margin-top: .2em;
  }

  .container {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  .pool {
    background-image: url('/src/assets/img/pool-s.png');
    display: inline-block;
    width: 322px;
    height: 228px;
    text-align: center;
    margin-top: 30%;
    margin-bottom: 2em;
  }

  .logo {
    position: fixed;
    background-image: url('/src/assets/img/logo-s.png');
    width: 85px;
    height: 85px;
    margin: 1em;
  }

  .images {
    text-align: center;
    margin-bottom: 1em;
  }

  #background {
    background-color: white;
    background-image: linear-gradient(#269 1px, transparent 1px), linear-gradient(90deg, #269 1px, transparent 1px);
    background-size: 25px 25px, 25px 25px;
    height: 100vh;
  }

  #water {
    background-image: url('/src/assets/img/wave.png');
    position: absolute;
    width: 100vw;
    height: 120vh;
    background-position: top left;
    bottom: 0px;
  }

  .loading-enter-active {
    -webkit-transition: all 3s ease-out;
    -moz-transition: all 3s ease-out;
    -o-transition: all 3s ease-out;
    transition: all 3s ease-out;
  }

  .loading-enter {
    height: 1px !important;
    background-position: top right !important;
  }

  .late-loading-enter-active {
    -webkit-transition: all 3s ease-out;
    -moz-transition: all 3s ease-out;
    -o-transition: all 3s ease-out;
    transition: all 3s ease-out;
  }

  .late-loading-enter-to {
    bottom: 100vh !important;
  }

  #ahn {
    background-image: url("/src/assets/img/ahn-s.png");
    width: 75px;
    height: 75px;
  }

  #sim {
    background-image: url("/src/assets/img/sim-s.png");
    width: 75px;
    height: 75px;
  }

  #moon {
    background-image: url("/src/assets/img/moon-s.png");
    width: 75px;
    height: 75px;
  }

  #jung {
    background-image: url("/src/assets/img/jung-s.png");
    width: 75px;
    height: 75px;
  }

  #lee {
    background-image: url("/src/assets/img/lee-s.png");
    width: 75px;
    height: 75px;
  }

  #nam {
    background-image: url("/src/assets/img/nam-s.png");
    width: 75px;
    height: 75px;
  }

  #you {
    background-image: url("/src/assets/img/you-s.png");
    width: 75px;
    height: 75px;
  }

  @media screen and (min-width: 60em) {
    #ahn {
      background-image: url("/src/assets/img/ahn-l.png");
      width: 112px;
      height: 112px;
    }
    #sim {
      background-image: url("/src/assets/img/sim-l.png");
      width: 112px;
      height: 112px;
    }
    #moon {
      background-image: url("/src/assets/img/moon-l.png");
      width: 112px;
      height: 112px;
    }
    #jung {
      background-image: url("/src/assets/img/jung-l.png");
      width: 112px;
      height: 112px;
    }
    #nam {
      background-image: url("/src/assets/img/nam-l.png");
      width: 112px;
      height: 112px;
    }
    #lee {
      background-image: url("/src/assets/img/lee-l.png");
      width: 112px;
      height: 112px;
    }
    #you {
      background-image: url("/src/assets/img/you-l.png");
      width: 112px;
      height: 112px;
    }
    #all {
      display: inline-block;
      position: absolute;
      right: 10%;
      top: 35%;
    }
    .pool {
      background-image: url('/src/assets/img/pool-l.png');
      width: 675px;
      height: 478px;
      display: inline-block;
      position: absolute;
      left: 10%;
      top: 15%
    }
  }
</style>