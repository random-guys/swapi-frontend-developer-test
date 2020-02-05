import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ViewContent from './Pages/ViewContent';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Content',
    path: '/:type/:id',
    component: ViewContent
  },
  {
    name: 'Not Found',
    path: '*',
    component: () => NotFound
  }
];
