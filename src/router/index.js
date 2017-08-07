import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/page/guide'

Vue.use(Router)

export default new Router({
  mode: 'hash', //   "hash" | "history" | "abstract";
  base: '/', // 默认值: "/",应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component (resolve) {
        require(['@/page/index.vue'], resolve)
      },
      children: [
        {
          path: '/',
          name: 'article',
          component (resolve) {
            require(['@/page/index/article-list.vue'], resolve)
          }
        },
        {
          path: '/details/:id',
          name: 'articleDetails',
          component (resolve) {
            require(['@/page/index/article-details.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require(['@/page/manager/manage_login.vue'], resolve)
      }
    },
    {
      path: '/manage/articleList',
      name: 'manageArticleList',
      component (resolve) {
        require(['@/page/manager/manage_article-list.vue'], resolve)
      }
    },
    {
      path: '/manage/articleAdd',
      name: 'manageArticleAdd',
      component (resolve) {
        require(['@/page/manager/manage_article-add.vue'], resolve)
      }
    }
  ]
})
