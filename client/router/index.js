import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home';

Vue.use(Router);

// 默认保留在原页面的位置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0;
      position.y = 0;
    }
    return position;
  }
};

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: { keepAlive: true }
  }]
});
