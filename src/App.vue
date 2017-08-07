<template>
    <div id="app">
        <div class="blog_nav">
    
        </div>
        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    
        <transition name="fade">
            <article class="modal" v-show="show" @click="show=false">
                <img :src="img[index]" alt="">
            </article>
        </transition>
    
        <section class="article_nav">
            
            <div @click="showLeft=!showLeft">
                <i class="iconfont icon-details-peo" style="font-size:larger;"></i>
            </div>
            <div @click="toManage">
                <i class="iconfont icon-tubiaozhizuomoban" style="font-size:larger;"></i>
            </div>
            <div @click="toHome">
                <i class="iconfont icon-homepage" style="font-size:larger;"></i>
            </div>
            <div >
                <i class="iconfont icon-xiangce" style="font-size:larger;"></i>
            </div>
            <div >
                <i class="iconfont icon-yinle" style="font-size:larger;"></i>
            </div>
        </section>
       
    
        <transition name="bounce">
            <section v-show="showLeft" class="article_left">
                <div>
                    <img src="./assets/lei.jpg" class="" class="potrait" alt="">
                </div>

                 <div class="footer">
                    <i></i>
                    <span>
                        2017-2018 All Rights Reserved.
                    </span>
                    <span>
                        Designed by dinglei.皖ICP备52506号.
                    </span>
                </div>

                <div>
                    <div class="title">丁磊</div>
                    <div>前端攻城狮&&dotaer</div>
                    <div>浙江~杭州</div>
                    <div class="fbtn" @click="toGitHub">Follow me</div>
                    <div>
                        <i @click="showImg(0)" class="iconfont icon-qq icon"></i>
                        <i @click="showImg(1)" class="iconfont icon-weixin icon"></i>
                        <i @click="showImg(2)" class="iconfont icon-zhifubao icon"></i>
                    </div>
                </div>
               
            </section>
        </transition>

       
    
    </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
          showLeft: false,
          show: false,
          index: 0,
          img: [
            require('./assets/qq.jpg'),
            require('./assets/weixin.jpg'),
            require('./assets/zhi.jpg')
          ]
        }
      },
      methods: {
        toHome () {
          this.$router.push({name: 'index'})
        },
        showImg (index) {
          this.index = index
          this.show = true
        },
        toGitHub () {
          window.location.href = 'https://github.com/dinglei5959'
        },
        toManage () {
          this.$router.push({name: 'login'})
        }
      }
    }
</script>

<style lang="scss">
    @import './scss/index.scss';
    @import './scss/font.css';
    @import './scss/variable.scss';
    @import './scss/animation.scss';
    
    html {}
    
    body {
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
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .2);
        .content {
            height: 100%;
            width: 100%;
            overflow: auto;
        }
        @media screen and (max-width: $mobileWidth) {
            .blog_nav {
                display: none;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .article_nav {
        position: fixed;
        left: 0;
        top: 0px;
        padding: 10px;
        font-size: xx-large;
        cursor: pointer;
        z-index: 101;
        &>div{
          transition: transform .3s ease-in;
          &:hover {
            transform: rotate(360deg) scale(1.5);
            color:#000;
          }
        }
    }
    
    .article_left {
        z-index: 100; //transform: translateX(-100%);
        position: fixed;
        height: 100vh;
        overflow: hidden;
        background: rgba(0, 0, 0, .7);
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        .footer {
            position: fixed;
            bottom: 10px;
            color: #fff;
            font-size: smaller;
        }
        &>div {
    
            &:first-child {
                width: 40%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &:last-child {
                .fbtn {
                    border: 1px solid #000;
                    display: inline-block;
                    padding: 10px 30px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                width: 60%;
                &>div {
                    padding: 10px;
                }
                .title {
                    font-size: xx-large;
                }
            }
        }
    }
    
    
    
    .modal {
        // display: none;
        z-index: 102;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, .4);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        cursor: pointer;
        &>img {
            margin: 10px auto;
        }
    }
    
    .icon {
        font-size: 3em;
    }
    
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    
    @keyframes bounce-in {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
</style>
