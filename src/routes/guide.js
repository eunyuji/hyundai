import {layouts, userPages, Components, Forms, Tables, Maps, Pages} from 'src/utils/global-methods.js'

let componentsMenu = {
  path: '/components',
  component: layouts('DashboardLayout.vue'),
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Components('Buttons.vue')
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: Components('GridSystem.vue')
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Components('Panels.vue')
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: Components('SweetAlert.vue')
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Components('Notifications.vue')
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Components('Icons.vue')
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Components('Typography.vue')
    }

  ]
}
let formsMenu = {
  path: '/forms',
  component: layouts('DashboardLayout.vue'),
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: Forms('RegularForms.vue')
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: Forms('ExtendedForms.vue')
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: Forms('ValidationForms.vue')
    },
    {
      path: 'wizard',
      name: 'Wizard',
      component: Forms('Wizard.vue')
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: layouts('DashboardLayout.vue'),
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: Tables('RegularTables.vue')
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: Tables('ExtendedTables.vue')
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      component: Tables('PaginatedTables.vue')
    }]
}

let mapsMenu = {
  path: '/maps',
  component: layouts('DashboardLayout.vue'),
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: Maps('GoogleMaps.vue')
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: Maps('FullScreenMap.vue')
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: Maps('VectorMapsPage.vue')
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: layouts('DashboardLayout.vue'),
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: userPages('UserProfile.vue')
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: userPages('TimeLinePage.vue')
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: userPages('Login.vue')
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: userPages('Register.vue')
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: userPages('Lock.vue')
}

const routes = [
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  {
    path: 'calendar',
    name: 'Calendar',
    component: Pages('Calendar/CalendarRoute.vue')
  },
  {
    path: 'charts',
    name: 'Charts',
    component: Pages('Charts.vue')
  },
  {
    path: '/admin',
    component: layouts('DashboardLayout.vue'),
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Pages('Dashboard/Overview.vue')
      },
      {
        path: 'stats',
        name: 'Stats',
        component: Pages('Dashboard/Stats.vue')
      }
    ]
  }
]

export default routes
