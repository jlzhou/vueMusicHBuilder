import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import recommend from '@/view/recommend'
import ranking from '@/view/ranking'
import singer from '@/view/singer'
import search from '@/view/search'
import newRanking from '@/components/ranking/newRanking'
import allRanking from '@/components/ranking/allRanking'
import musicList from '@/components/music-list/music-list'
import mvList from '@/components/mv/mvList'
import mvPlay from '@/components/mv/mvPlay'
import singerDetail from '@/components/singer/singerDetail'
import cusA from '@/components/audio/customAudio'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mvList',
      name: 'mvList',
      component: mvList,
      children: [{
        path: '/mvList/mvPlay',
        name: 'mvPlay',
        component: mvPlay
      }]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend,
      children: [{
        path: '/recommend/musicList',
        name: 'musicList',
        component: musicList
      }]
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking,
      children: [{
          path: '/ranking/newRanking',
          name: 'newRanking',
          component: newRanking
        },
        {
          path: '/ranking/allRanking',
          name: 'allRanking',
          component: allRanking
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [{
          path: '/singer/singerDetail',
          name: 'singerDetail',
          component: singerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/cusA',
      name: 'cusA',
      component: cusA
    }
  ]
})