<template>
  <article class="article">
    <section v-for="(item,index) in list" :key="index" class="article_item btn_meet">
      <div class="article_item_title">
        <span>怎么设计呢？</span>
      </div>
      <div class="article_item_body">
        有时候想同时（同级）展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar（侧导航） 和 main（主内容） 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default。
      </div>
      <div class="article_item_footer  text-white">
        <div class="middle">
          <span>
            <i class="iconfont icon-date"></i> 两个月前</span>
          <span>
            <i class="iconfont icon-icon"></i> 阅读数 125</span>
          <span>
            <i class="iconfont icon-eval-tab"></i> 评论数 24</span>
        </div>
        <div>
          <div @click="toDetails" class="btn animate draw">
            阅读更多
          </div>
        </div>
      </div>
    </section>
  
    <transition name="fade">
      <article class="modal" v-show="show" @click="show=false">
        <img :src="img[index]" alt="">
      </article>
    </transition>
  </article>
</template>

<script>
  import { Bounce } from '../../components/bounce'
  export default {
    name: 'article',
    data () {
      return {
        img: [
          require('../../assets/qq.jpg'),
          require('../../assets/weixin.jpg'),
          require('../../assets/zhi.jpg')
        ],
        index: 0,
        list: [1, 4, 5],
        show: false,
        showLeft: false
      }
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
      showImg (index) {
        this.index = index
        this.show = true
      },
      toDetails () {
        this.$router.push({name: 'articleDetails'})
      }
    },
    created () {
      this.$axios.get('http://localhost:8081/').then(() => {
        debugger
      })
    },
    mounted () { },
    activated () { },
    deactivate () { },
    destroyed () { },
    components: { Bounce }
  }
</script>
<style lang="scss" scoped>
  @import '../../scss/variable.scss';
  @import '../../scss/animation.scss';
  
  
  .article {
    color: $white;
    width: 40%;
    margin: 50px auto;
    text-align: start;
  
  
    .article_item {
      background: rgba(0, 0, 0, .3);
      cursor: pointer;
      position: relative;
      padding-bottom: 20px;
      &:hover {}
      &:after {
        content: '';
        width: 80%;
        height: 2px;
        position: absolute;
        background: rgba(0, 0, 0, .2);
        transform: translateX(-50%);
        left: 50%;
        bottom: 0;
      }
      .article_item_title {
        padding: 20px;
        text-align: end;
        font-weight: bold;
        &>span {
          margin-right: 20px;
          padding: 10px;
        }
      }
      .article_item_body {
        text-align: start;
        text-indent: 2em;
        padding: 0px 20px;
      }
      .article_item_footer {
        font-size: small;
        padding: 10px 50px;
        display: flex;
        justify-content: space-between;
        & span {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
  
  .potrait {
    width: 70%;
    border-radius: 100px;
  }
  
  
  .icon {
    font-size: 2.5em;
    color: aqua;
    padding: 0 5px;
    cursor: pointer;
  }
  
  .btn_meet {
    &:hover {
      color: aqua;
      &::before {
        border-right-color: aqua;
        border-left-color: aqua;
        display: inline-block;
        transform: scale3d(1, 1, 1);
      }
    }
    &::before {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      border: 2px solid transparent;
      transform: scale3d(0, 0, 1);
      transition: transform .5s ease-in;
      transform-origin: center;
    }
  }
</style>

<style lang="scss" scoped>
 
  

  
  
  
  
  .translateX-enter-active,
  .translateX-leave-active {
    transition: tranform .5s;
    transform: translateX(-100%);
  }
  
  .translateX-enter,
  .translateX-leave-to
  /* .fade-leave-active in below version 2.1.8 */
  
  {
    transform: translateX(0%);
  }
</style>
