import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movies/MovieList'
import MusicList from '@/components/musics/MusicList'
import BookList from '@/components/books/BookList'
import PhotoList from '@/components/photos/PhotoList'
import MovieDetail from '@/components/movies/MovieDetail'
import MusicDetail from '@/components/musics/MusicDetail'
import PhotoDetail from '@/components/photos/PhotoDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: MovieList
    },
    {
      path: '/musicList',
      component: MusicList
    },
    {
      path: '/bookList',
      component: BookList
    },
    {
      path: '/photoList',
      component: PhotoList
    },
    {
      path: '/movieDetail/:id',
      component: MovieDetail
    },
    {
      path: '/musicDetail/:id',
      component: MusicDetail
    },
    {
      path: '/PhotoDetail/:idx',
      component: PhotoDetail
    }

  ]
})
