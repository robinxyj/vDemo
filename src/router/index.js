import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MemoFile from '@/components/MemoFile'
import EditMemo from '@/components/EditMemo'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'MemoFile',
      component: MemoFile
    },
    {
      path:'/edit',
      name: 'EditMemo',
      component: EditMemo
    },
    {
      path:'/test',
      name:'test',
      component:test
    }
  ]
})
