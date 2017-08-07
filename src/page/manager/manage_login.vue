<template>
  <article class="manage_login">
    <section class="manage_login_body">
      <div>
        <div>
          <span>用户名：</span>
          <div>
            <div class="input"><input  type="text"></div>
          </div>
        </div>
        <div>
          <span>密码：</span>
          <div >
            <div class="input"><input  type="password"></div>
          </div>
        </div>
       
      </div>
      <div>
        <div @click="toBackStage" style="display:block;padding:3px 30px;margin-top:10px;" class="submit">登录</div>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
      }
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
      toBackStage () {
        this.$router.push({name: 'manageArticleList'})
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
  .manage_login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .manage_login_body {
      border: 2px solid rgba(0,0,0,.3);
      padding: 30px 40px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &>div {
        display: inline-table;
        line-height: 2em;
        &>div {
          display: table-row;
          &>span {
            display: table-cell;
          }
          &>div {
            display: table-cell;
          }
        }
      }
    }
  }


  
  .input {
    background: transparent;
    border: 1px solid rgba(0,0,0,.3);
    //box-shadow: inset 0 0 0 2px #f45e61;
    outline: 0;
    border-radius: 5px;
    position: relative;
    &>input{
      background: transparent;
      border: 0;
      outline: 0;
      text-indent: 1em;
    }

    &::after,&::before{
      text-indent: 0;
      box-sizing: border-box;
      border: 2px solid transparent;
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      transition:border-color #60daaa 0s,width 100% .1s ease,height 100% .1s ease .1s;
      
    }

    &:focus{
      &::before{
       width: 100%;
       height: 100%;
       border-color:#60daaa;
      }
    }

    &::before{
      top: 0;
      left: 0;
      
    }
    &::after{
      bottom: 0;
      right: 0;
    }
  }


  @keyframes circle{
    0%{
      color: #60daaa;
      width: 0;
      height: 0;
    }
    50%{
      color: #60daaa;
      width: 100%;
      height: 0;
    }
    100%{
      color: #60daaa;
      width: 100%;
      height: 100%;
    }
  }
</style>
