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
    @import './scss/font.css';
   
    html{
        
    }
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
        display: fixed;
        top:0;
        left: 0;
        background: rgba(0,0,0,.2);
        .content{
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        @media screen and (max-width: $mobileWidth){
            .blog_nav{
                display: none;
            }
        }
    }
</style>
