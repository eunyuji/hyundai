import { layouts, NotFound, Pages } from 'src/utils/global-methods.js'
import guide from 'src/routes/guide'
const routes = [
  {
    path: '/',
    component: layouts('CleanLayout.vue'),
    redirect: '',
    children: [
      {
        path: '',
        name: 'Main',
        component: Pages('Main/Index.vue')
      }
    ]
  },
  ...guide,
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
