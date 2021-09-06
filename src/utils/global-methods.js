const layouts = (path) => () => import(`@/views/Dashboard/Layout/${path}`);
const NotFound = () => () =>
  import(`@/components/GeneralViews/NotFoundPage.vue`);
const Pages = (path) => () => import(`@/views/Dashboard/Views/${path}`);
const userPages = (path) => () =>
  import(`@/views/Dashboard/Views/Pages/${path}`);
const Components = (path) => () =>
  import(`@/views/Dashboard/Views/Components/${path}`);
const Forms = (path) => () => import(`@/views/Dashboard/Views/Forms/${path}`);
const Tables = (path) => () => import(`@/views/Dashboard/Views/Tables/${path}`);
const Maps = (path) => () => import(`@/views/Dashboard/Views/Maps/${path}`);

export { layouts, NotFound, Pages, userPages, Components, Forms, Tables, Maps };
