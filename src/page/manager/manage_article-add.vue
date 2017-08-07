<template>
  <article class="article_add">
    <section class="article_add_setTitle">
      <div>
        <span>标题：</span>
        <input type="text">
      </div>
      <div>
        <span>标签：</span>
        <input type="text">
      </div>
    </section>
    <section class="article_add_setContent">
      <textarea name="" id="" cols="30" rows="50"></textarea>
    </section>
    <section class="article_add_operation">
      <div class="submit">
        提交
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'manageArticleAdd',
    data () {
      return {
  
      }
    },
    props: {},
    watch: {},
    computed: {},
    methods: {},
    created () {
  
    },
    mounted () { },
    activated () { },
    deactivate () { },
    destroyed () { },
    components: {}
  }
</script>
<style lang="scss" scoped>
  .article_add{
    width: 40%;
    margin: 30px auto;
    display: block;
    font-size: small;
    .article_add_setTitle{
      background:#fff;
      padding: 10px;
      border-radius: 10px;
      &>div{
        &>span{
          font-size: large;
          font-weight: bold;
        }
        &>input{
          margin: 5px 0;
          border: 2px solid #999;
          line-height: 2em;
          width: 80%;
          border-radius: 5px;
          text-indent: 1em;
        }
      }
    }
    .article_add_setContent{
      margin: 30px 0;
      &>textarea{
        width: 100%;
        border-radius: 10px;
        padding: 15px;
        box-sizing: border-box;
      }
    }
    .article_add_operation{
      .submit{
        font-size: xx-large;
        color: white;
        user-select: none;
      }
    }
  }
</style>
