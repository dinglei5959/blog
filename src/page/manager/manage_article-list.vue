<template>
  <arctile class="manage_article_list">
    <section class="manage_article_list_item">
      <div>谁能笑看人生?</div>
      <i class="iconfont icon-fengexian" style="font-size:large;"></i>
      <div>能够认真思考人生的人，始终能够避免...</div>
      <i class="iconfont icon-fengexian" style="font-size:large;"></i>
      <div>2017-07-02</div>
      <i class="iconfont icon-fengexian" style="font-size:large;"></i>
      <div>5</div>
      <i class="iconfont icon-fengexian" style="font-size:large;"></i>
      <div>6</div>
      <i class="iconfont icon-fengexian" style="font-size:large;"></i>
      <div>
        <i @click="toAdd" class="iconfont icon-tianjia"></i>
        <i class="iconfont icon-bianji"></i>
        <i class="iconfont icon-shanchu"></i>
      </div>
    </section>
  </arctile>
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
    methods: {
      toAdd () {
        this.$router.push({name: 'manageArticleAdd'})
      }
    },
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
  .manage_article_list{
    width: 40%;
    margin: 30px auto;
    display: block;
    color:aliceblue;
    font-size: small;
    .manage_article_list_item{
      background: rgba(0,0,0,.5);
      width: 100%;
      display: flex;
      line-height: 2em;
      border-radius: 3px;
      padding: 5px 20px;
      &>i{
        padding: 0 15px;
      }
      &>div:last-child{
        i{
          font-size: x-large;
          cursor: pointer;
        }
      }
    }
  }
</style>
