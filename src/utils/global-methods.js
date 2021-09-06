const layouts = (path) => () => import(`@/components/Dashboard/Layout/${path}`)
const ViewPages = (path) => () => import(`@/views/${path}`)
const NotFound = () => () => import(`@/components/GeneralViews/NotFoundPage.vue`)
const Pages = (path) => () => import(`@/components/Dashboard/Views/${path}`)
const userPages = (path) => () => import(`@/components/Dashboard/Views/Pages/${path}`)
const Components = (path) => () => import(`@/components/Dashboard/Views/Components/${path}`)
const Forms = (path) => () => import(`@/components/Dashboard/Views/Forms/${path}`)
const Tables = (path) => () => import(`@/components/Dashboard/Views/Tables/${path}`)
const Maps = (path) => () => import(`@/components/Dashboard/Views/Maps/${path}`)

export {layouts, ViewPages, NotFound, Pages, userPages, Components, Forms, Tables, Maps}
