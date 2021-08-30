import SessionsListPage from '../features/SessionsList/Page'
import StatsPage from '../features/Stats'

export default [
  {
    path: "/",
    exact: true,
    component: SessionsListPage,
  },
  {
    path: "/stats",
    exact: true,
    component: StatsPage,
  },
];
