import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from '../Component/AboutMe/AboutMe';
import Blogs from '../Component/Blogs/Blogs';
import Contacts from '../Component/Contacts/Contacts';
import Handleerror from '../Component/Handleerror/Handleerror';
import Home from '../Component/Home/Home';
import Project from '../Component/Project/Project';
import Project1 from '../Component/Project/Project1/Project1';
import Project2 from '../Component/Project/Project2/Project2';
import Project3 from '../Component/Project/Project3/Project3';
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
                {
                    path: 'Blogs',
                    element:<Blogs/>
                },
                {
                    path: 'Project1',
                    element:<Project1/>
                },
                {
                    path: 'Project2',
                    element:<Project2/>
                },
                {
                    path: 'Project3',
                    element:<Project3/>
                }
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