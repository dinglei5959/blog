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
          path: '/details',
          name: 'articleDetails',
          component (resolve) {
            require(['@/page/index/article-details.vue'], resolve)
          }
        }
      ]
    }
  ]
})
