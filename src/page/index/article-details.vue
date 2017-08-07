<template>
  <article class="article_details">
    <section class="article_details_title br-5">
      <div class="path">
        <span>首页</span>
           <i>/</i>
        <span>博客</span>
           <i>/</i>
        <span>文章</span>
      </div>
      <div class="content">如何学会promise</div>
    </section>
    
     <section class="article_details_content br-10"> 
       先随便说一点
     </section>

     <section class="article_details_footer">
        <div>
          <input type="text" placeholder="评价内容">
        </div>
        <div>
          <input type="text" placeholder="姓名">
          <input type="text" placeholder="邮箱">
        </div>
        <div class="submit text-white mt-10">
          提交
        </div>
     </section>

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
    created () {
      let id = this.$route.params.id
    },
    mounted () { },
    activated () { },
    deactivate () { },
    destroyed () { },
    components: {}
  }
</script>
<style lang="scss" scoped>
  .article_details{
    .article_details_title{
      width: 40%;
      background: #fff;
      margin: 30px auto;
      height: 120px;
      padding: 20px;
      box-sizing: border-box;
      &>div.path{
        background:rgba(0,0,0,.4);
        padding: 10px;
        color:#fff;
        width: 90%;
        margin: 0 auto;
        text-align: right;
        border-radius: 10px;
        i{
          margin: 0 5px;
        }
      }
      &>div.content{
        font-size: 2em;
        font-weight: bold;
        padding-top:10px;
      }
    }
    .article_details_content{
      width: 40%;
      background: #fff;
      margin: 30px auto;
      padding: 30px;
      box-sizing: border-box;
    }

    .article_details_footer{
      width: 40%;
      background: rgba(0,0,0,.6);
      margin: 30px auto;
      padding: 30px;
      box-sizing: border-box;
      &>div{
        & input{
          line-height: 2em;
          text-indent: 2em;
          border-radius: 10px;
          outline: 0;
          border: 2px solid #17d8cf;
        }
        &:first-child{
          &>input{
            width: 100%;
            margin-bottom: 10px;
          }
        }
        &:nth-child(2){
          &>input{
            width: 40%;
          }
        }
      }
    }
  }
</style>
