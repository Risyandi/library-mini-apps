/**
 * created by : Risyandi
 * 2021
 */

import React from 'react';

const Homepage = React.lazy(() => import('./Home'))

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Homepage',
        component: Homepage,
        typeLayout: 'full-layout'
    }
]

export default routes;