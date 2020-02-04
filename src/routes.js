import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Not Found',
    path: '*',
    component: () => NotFound
  }
];
