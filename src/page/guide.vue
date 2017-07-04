<template>
  <article class="guide_content">
    <div class="guide_content_title">
      <section class="guide_content_title_content">不忘初心，方得始终！！</section>
    </div>
    <div class="guide_content_details">
        <div>前端攻城狮</div>
      <h1>哦丽(*@ο@*)哇～ 丁磊（dinglei） φ(>ω<*)</h1>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {},
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { },
  activated () { },
  deactivate () { },
  destroyed () { },
  components: {}
}
</script>
<style lang="scss" scoped>
  @keyframes toLeft{
      0%{
        transform: translateX(0%);
      }
      80%{
        transform: translateX(-50%);
      }
      100%{
        transform: translateX(-50%);
      }
   }
   @keyframes toLeft2{
     0%{
        transform: translateX(50%);
      }
      80%{
        transform: translateX(50%);
      }
      85%{
        transform: translateX(70%);
      }
      100%{
        transform: translateX(-50%);
      }
   }

  .guide_content{
    background: url(../assets/back.jpg) no-repeat;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x:hidden;
    .guide_content_title{
      background: rgba(0,0,0,.4);
      width: 200vw;
      height: 50px;
      position: absolute;
      top:0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      animation:{
        name: toLeft;
        duration: 10s;
        iteration-count: infinite;
        timing-function: cubic-bezier(0.0, 0.0, 1.0, 1.0);
      }
      .guide_content_title_content{
         color:#fff;
         display: inline-block;
         transform: translateX(50%);
         animation: toLeft2 10s ease  infinite;
      }
    }
    .guide_content_details{
      color:#fff;
      font-size: 2rem;
    }
   
  }
</style>
