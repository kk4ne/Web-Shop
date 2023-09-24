import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { CategoryList } from "./components/page/CategoryList";
import { CategoryForm } from "./components/page/CategoryForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/category-list',
    element: <CategoryList />
  },
  {
    path: 'category-form',
    element: <CategoryForm />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
