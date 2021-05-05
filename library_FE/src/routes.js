/**
 * created by : Risyandi
 * 2021
 */

import React from 'react';

const Homepage = React.lazy(() => import('./pages/Home'))
const PelangganPage = React.lazy(() => import('./pages/Pelanggan'))
const BukuPage = React.lazy(() => import('./pages/Buku'))
const TransaksiPage = React.lazy(() => import('./pages/Transaksi'))

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Homepage',
        component: Homepage,
        typeLayout: 'full-layout'
    },
    {
        path: '/create/pelanggan',
        exact: true,
        name: 'Create Pelanggan Page',
        component: PelangganPage,
        typeLayout: 'full-layout'
    },
    {
        path: '/edit/pelanggan/:id',
        exact: true,
        name: 'Edit Pelanggan Page',
        component: PelangganPage,
        typeLayout: 'full-layout'
    },
    {
        path: '/create/buku',
        exact: true,
        name: 'Create Buku Page',
        component: BukuPage,
        typeLayout: 'full-layout'
    },
    {
        path: '/edit/buku/:id',
        exact: true,
        name: 'Edit Buku Page',
        component: BukuPage,
        typeLayout: 'full-layout'
    },
    {
        path: '/create/transaksi',
        exact: true,
        name: 'Create Transaksi Page',
        component: TransaksiPage,
        typeLayout: 'full-layout'
    },
    {
        path: '/edit/transaksi/:id',
        exact: true,
        name: 'Edit Transaksi Page',
        component: TransaksiPage,
        typeLayout: 'full-layout'
    },
]

export default routes;