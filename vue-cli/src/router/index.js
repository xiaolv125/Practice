import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import subTest1 from '@/components/subTest1'
import subTest2 from '@/components/subTest2'
import test111 from '@/components/test111'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode:'history',
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
    },
    {
      path:'/test111/:name/:age',
      name:'test111',
      component:test111
    },
    {
      path:'/count',
      component:Count
    }
  ]
})
