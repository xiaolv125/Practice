import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import subTest1 from '@/components/subTest1'
import subTest2 from '@/components/subTest2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test/',
      name: 'test1',
      component: test1,
      children:[
        {
          path:'/subTest1/',
          component:subTest1,
        },
        {
          path:'/subTest2/',
          component:subTest2,
        }
      ]
    }
  ]
})
