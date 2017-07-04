<template>
    <div id="app">
        <div class="blog_nav">

        </div>
        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import './scss/index.scss';
    body{
        overflow: hidden;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        .blog_nav{
            position: fixed;
            width: $navWidth;
            height: 100vh;
            background: rgba(0,0,0,.6);
        }
        .content{
            height: 100%;
            width: 100%;
        }
        @media screen and (max-width: 600px){
            .blog_nav{
                display: none;
            }
        }
    }
</style>
