import Vue from 'vue';
import VueRouter from 'vue-router';
import { layouts, NotFound, Pages } from '@/utils/global-methods';
import guide from './guide';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: layouts('CleanLayout.vue'),
    redirect: '',
    children: [
      {
        path: '',
        name: 'Main',
        component: Pages('Main/Index.vue'),
      },
      {
        path: '/summary',
        component: Pages('Pages/Summary/index.vue'),

        children: [
          {
            path: '',
            name: 'summary',
            component: Pages('Pages/Summary/Summary.vue'),
          },
          {
            path: 'Show-Reports',
            name: 'Show-Reports',
            component: Pages('Pages/Summary/Show-Reports.vue'),
          },
        ],
      },
    ],
  },
  ...guide,
  { path: '*', component: NotFound() },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
