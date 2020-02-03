import React from 'react';

export default [
  {
    name: 'Home',
    path: '/',
    component: () => <div>HOME</div>
  },
  {
    name: 'Not Found',
    path: '*',
    component: () => <div>Not Found</div>
  }
];
