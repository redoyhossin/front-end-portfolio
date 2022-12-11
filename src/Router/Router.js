import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from '../Component/AboutMe/AboutMe';
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
                    element: <Project />
                },
                {
                    path: 'Contacts',
                    element: <Contacts />
                },
            ]
        },
        {
            path: 'AboutMe',
            element: <AboutMe />
        },
        {
            path: '*',
            element: <Handleerror />
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