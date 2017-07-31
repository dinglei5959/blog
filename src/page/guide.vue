<template>
  <article class="guide_content">
    <div class="guide_content_nav">
      <!--<div class="guide_content_nav_title">
        <section class="guide_content_title_content">不忘初心，方得始终！！</section>
      </div>-->
    </div>
    <div class="guide_content_details">
      <div class="guide_content_details_item">
        <transition-group name="fade">
          <div v-for="(item,index) in dataList" v-show="show===index" :key="index">
            {{item}}
          </div>
        </transition-group>
      </div>
      <h1>
        哦丽(*@ο@*)哇～ 丁磊（dinglei） φ(>ω
        <*) </h1>
    </div>
    <div @click="toIndex" class="guide_content_footer">
        <div class="btn">我的博客</div>
    </div>
  </article>
</template>

<script>
let scope
export default {
  name: 'guide',
  data () {
    return {
      show: 0,
      dataList: [
        '前端攻城狮',
        '506第一影魔'
      ]
    }
  },
  props: {},
  watch: {},
  computed: {},
  methods: {
    showChange () {
      if (scope.show < scope.dataList.length - 1) {
        scope.show++
      } else {
        scope.show = 0
      }
    },
    toIndex () {
      this.$router.push({
        name: 'index'
      })
    }
  },
  created () {
    scope = this
    setInterval(scope.showChange, 3000)
  },
  mounted () { },
  activated () { },
  deactivate () { },
  destroyed () { },
  components: {}
}
</script>
<style lang="scss" scoped>
  @import '../scss/variable.scss';
  @keyframes toLeft {
    0% {
      transform: translateX(0%);
    }
    80% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes toLeft2 {
    0% {
      transform: translateX(50%);
    }
    80% {
      transform: translateX(50%);
    }
    85% {
      transform: translateX(70%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
  
  .guide_content {
    background:rgba(0, 0, 0, .1);
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .guide_content_nav {
      overflow-x: hidden;
      .guide_content_nav_title {
        background: rgba(0, 0, 0, .4);
        width: 200vw;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: {
          name: toLeft;
          duration: 10s;
          iteration-count: infinite;
          timing-function: cubic-bezier(0.0, 0.0, 1.0, 1.0);
        }
        .guide_content_title_content {
          color: #fff;
          display: inline-block;
          transform: translateX(50%);
          animation: toLeft2 10s ease infinite;
        }
      }
    }
  
    .guide_content_details {
      color: #fff;
      font-size: 2rem;
      .guide_content_details_item {
        height: 2em;
      }
    }
    .guide_content_footer{
      position: fixed;
      bottom: 20px;
    }

    .btn{
      width: 130px;
      line-height: 2em;
      border: 1px solid #fff;
      border-radius: 5px;
      color: white;
    }

    @media screen and (max-width: $mobileWidth) {
      .guide_content_details {
        font-size: 1rem;
      }
    }
  }
</style>
