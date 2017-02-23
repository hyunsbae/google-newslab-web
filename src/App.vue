<template>
  <div id="background" style="text-align: center">
    <transition name="loading">
      <div v-if="go" id="water"></div>
    </transition>
    <div v-if="go" :class="{loading: true, 'yellow': colorChanged}"></div>
    <div class="logo"></div>
    <div class="images">
      <div class="pool">
        <div v-for="key in keys" v-if="selected === key && go" :id="'swimming' + key" class="swimming">
        </div>
      </div>
    </div>
    <div id="all">
      <div class="images">
        <div class="container" @click="selected = 'ahn'; moveToCandidatePage();">
          <div id="ahn"></div>
          <div class="name">안철수</div>
        </div>
        <div class="container" @click="selected = 'sim'; moveToCandidatePage();">
          <div id="sim"></div>
          <div class="name">심상정</div>
        </div>
        <div class="container" @click="selected = 'moon'; moveToCandidatePage();">
          <div id="moon" src="/src/assets/img/moon-s.png"></div>
          <div class="name">문재인</div>
        </div>
        <div class="container" @click="selected = 'jung'; moveToCandidatePage();">
          <div id="jung" src="/src/assets/img/jung-s.png"></div>
          <div class="name">안희정</div>
        </div>
      </div>
      <div class="images">
        <div class="container" @click="selected = 'lee'; moveToCandidatePage();">
          <div id="lee" src="/src/assets/img/lee-s.png"></div>
          <div class="name">이재명</div>
        </div>
        <div class="container" @click="selected = 'nam'; moveToCandidatePage();">
          <div id="nam" src="/src/assets/img/nam-s.png"></div>
          <div class="name">남경필</div>
        </div>
        <div class="container" @click="selected = 'you'; moveToCandidatePage();">
          <div id="you" src="/src/assets/img/you-s.png"></div>
          <div class="name">유승민</div>
        </div>
      </div>
    </div>
    <a class="googlexkbs" href="https://www.facebook.com/stagekiki/">Google X KBS</a>
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
        colorChanged: false,
        keys: [
          'moon',
          'jung',
          'lee',
          'ahn',
          'nam',
          'you',
          'sim',
        ],
      }
    },
    methods: {

      moveToCandidatePage(event) {
        console.log('hi');
        if (this.selected !== 'none') {
          this.go = true;
          setTimeout(function (target) {
            target = true;
          }, 100, this.colorChanged);
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
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .yellow {
    color: black;
  }

  .swimming {
    margin: 0 auto;
    right: 0;
    left: 0;
    margin-top: 40px;
  }

  #swimmingjung {
    background-image: url('/src/assets/img/tubejung-m.png');
    width: 89px;
    height: 134px;
  }

  #swimminglee {
    background-image: url('/src/assets/img/tubelee-m.png');
    width: 102px;
    height: 129px;
  }

  #swimmingsim {
    background-image: url('/src/assets/img/tubesim-m.png');
    width: 85px;
    height: 132px;
  }

  #swimmingnam {
    background-image: url('/src/assets/img/tubenam-m.png');
    width: 89px;
    height: 134px;
  }

  #swimmingmoon {
    background-image: url('/src/assets/img/tubemoon-m.png');
    width: 91px;
    height: 130px;
  }

  #swimmingyou {
    background-image: url('/src/assets/img/tubeyou-m.png');
    width: 94px;
    height: 131px;
  }

  #swimmingahn {
    background-image: url('/src/assets/img/tubeahn-m.png');
    width: 92px;
    height: 127px;
  }

  .loading {
    position: absolute;
    color: black;
    font-size: 2em;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 20px;
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
    cursor: pointer;
  }

  .pool {
    background-image: url('/src/assets/img/pool-s.png');
    display: inline-block;
    width: 322px;
    height: 228px;
    text-align: center;
    margin-top: 30%;
    margin-bottom: .5em;
  }

  .logo {
    position: fixed;
    background-image: url('/src/assets/img/logo-s.png');
    width: 85px;
    height: 85px;
    margin: 1em;
    z-index: -1;
  }

  .images {
    text-align: center;
    margin-bottom: 1em;
  }

  #background {
    background-color: white;
    background-image: linear-gradient(#0081C2 1px, transparent 1px), linear-gradient(90deg, #0081C2 1px, transparent 1px);
    background-size: 30px 30px, 30px 30px;
    min-width: 320px;
    height: 100vh;
    font-family: 'Noto Sans KR';
  }

  #water {
    background-image: url('/src/assets/img/wave.png');
    position: absolute;
    width: 100vw;
    height: 130vh;
    background-position: top left;
    bottom: -100px;
    z-index: 1;
  }
  /* iphone7 */

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
    top: 0 !important;
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

  .googlexkbs {
    position: absolute;
    color: #0081C2;
    letter-spacing: 0em;
    line-height: 16px;
    font-size: 13px;
    font-weight: bold;
    bottom: 10px;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-decoration: none;
    z-index: 0;
  }

  @media screen and (min-width: 45em) {
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
    .pool {
      background-image: url('/src/assets/img/pool-l.png');
      width: 675px;
      height: 478px;
      margin-top: 15%;
      margin-bottom: .5em;
    }
    .name {
      font-size: 1.5em;
      margin-top: .35em;
    }
    .googlexkbs {
      font-size: 1.5em;
      bottom: 1em;
    }
  }

  @media screen and (min-width: 77em) {
    .pool {
      position: absolute;
      top: 50%;
      margin-top: -239px;
      left: 3%;
    }
    #all {
      position: absolute;
      top: 50%;
      right: 3%;
      margin-top: -150px;
    }
    .container {
      margin-left: .3em;
    }
  }

  @media all and (device-width: 375px) and (device-height: 667px) and (orientation:portrait) {
    #background {
      height: 667px;
    }
    #water {
      width: 375px;
      height: 900px;
    }
  }

  @media all and (device-width: 375px) and (device-height: 667px) and (orientation:landscape) {
    #background {
      height: 667px;
    }
    #water {
      width: 375px;
      height: 900px;
    }
  }
</style>