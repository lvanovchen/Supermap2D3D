import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta: {
        title: 'herox',
        auth: false,
        keepAlive: false
      },
      component: () => import('@/views/index.vue')
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        title: 'test',
        auth: false,
        keepAlive: false
      },
      component: () => import('@/views/Test.vue')
    },
    {
      path: '/supermap3d',
      name: 'supermap3d',
      meta: {
        title: '超图',
        auth: false,
        keepAlive: false
      },
      component: () => import('@/views/Supermap3D.vue')
    },
    {
      path: '/',
      name: 'supermap2d',
      meta: {
        title: '超图2d',
        auth: false,
        keepAlive: false
      },
      component: () => import('@/views/Supermap2D.vue')
    }
  ]
});

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 权限校验
  if (to.meta.auth) {
    // TODO: 实现登录验证逻辑
    next();
  } else {
    next();
  }
});

router.afterEach(() => {
  // 页面切换后的操作
});

export default router;