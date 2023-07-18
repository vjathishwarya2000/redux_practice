import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBars from './NavBars';
import {Provider} from 'react-redux';
import store from '../Store/store';

const RootLayout = () => {
  return (
    <Provider store={store}>
        <NavBars />
        <main>
            <Outlet />
        </main>
    </Provider>
  )
}

export default RootLayout