import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../../Assets/picself/header1.jpg'

const Aboutheder = () => {

    return (
        <div>
            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Hello, my name is <code className='mx-6 shadow-2xl '>Redoy</code>Hossin</h1>
                        <p>
                            And
                        </p>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">My study background is diploma in engineering</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to="/">
                                <button className="btn btn-outline btn-accent">Back To Home page</button>
                            </Link>

                        </div>
                    </div>
                </div>
                <img src={header} alt="" className=" border-4 border-r-teal-600 border-l-lime-500 shadow-2xl shadow-stone-50 w-3/5 h-2/4 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Aboutheder;