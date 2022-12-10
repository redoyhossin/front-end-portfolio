import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from '../Component/Contacts/Contacts';
import Handleerror from '../Component/Handleerror/Handleerror';
import Home from '../Component/Home/Home';
import Project from '../Component/Project/Project';
import Main from '../Layout/Main';

const Router = ({ children }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'Project',
                    element:<Project/>
                },
                {
                    path: 'Contacts',
                    element:<Contacts/>
                }
            ]
        },
        {
            path: '*',
            element:<Handleerror/>
       }
    ])
    return (
        <div>
            <RouterProvider router={router}>
                {children}
            </RouterProvider>
        </div>
    );
};

export default Router;