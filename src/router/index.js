import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Liste articles',
    component: Listing
  },
  {
    path: '/articles/categorie/:categorie',
    name: 'Artciles de catégorie',
    component: Listing
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: Article
  }
]

const router = new VueRouter({
  routes
})

export default router
