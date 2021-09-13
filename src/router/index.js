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
        path: 'summary',
        name: 'summary',
        component: Pages('Pages/summary.vue'),
      },
    ],
  },
  ...guide,
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
