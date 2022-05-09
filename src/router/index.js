import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
}, 
  {
  path:'/',
  name:'base',
  component: () => import('../views/Base.vue'),
  children: [{
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/topic',
    name: 'topic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Topic/Topic.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/editors/CommentEditor.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/user/Person.vue')
  }, 
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/group/group.vue')
    },
    {
      path: '/group/main',
      name: 'groupmain',
      component: () => import('../views/group/GroupMain.vue')
    },
    {
      path: '/group/addgroup',
      name: 'groupadd',
      component: () => import('../views/group/GroupAdd.vue')
    },
    {
      path: '/group/commit',
      name: 'groupcommit',
      component: () => import('../views/group/GroupCommit.vue')
    },
    {
      path: '/group/reply',
      name: 'groupreply',
      component: () => import('../views/group/GroupReply.vue')
    },
    {
      path: '/group/recommend',
      name: 'grouprecommend',
      component: () => import('../views/group/GroupRecommit.vue')
    },
  ]
},
{
  path: '/login',
  name: 'login',
  component: () => import('../views/login/Login.vue')
},
{
  path: '/register',
  name: 'register',
  component: () => import('../views/login/Register.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
