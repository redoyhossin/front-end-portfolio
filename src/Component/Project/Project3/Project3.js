import React from 'react';
import lern from '../../../Assets/lerncode/lern1.png'
import lern2 from '../../../Assets/lerncode/lern2.png'
import lern3 from '../../../Assets/lerncode/lern3.png'

const Project3 = () => {
    return (
        <div>


            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Learn code</h2>
                            <ul className="ml-4 space-y-1 list-disc ">
                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">frameworks libraries <br />
                                    tailwind css Flowbite React Components</h1>
                                </li>

                                <li>
                                <h1 rel="noopener noreferrer" href="#" className="hover:underline">site feature programme basic to advance site</h1>
                                </li>
                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">home page blog site courses blog site some question</h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">and ans the question topic courses </h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">site programme language tropic instructions etc </h1>
                                </li>
                            </ul>
                            <a target='_blank' className='mx-3' href="https://github.com/redoyhossin/learn-code.git"><button className=" mt-4 btn btn-outline">See Github</button></a>
                                <a target='_blank' href="https://learn-code-494e1.web.app/"><button className="btn btn-outline btn-accent mr-3">See live</button></a>
                        </div>


                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className='p-1 rounded bg-black' >

                                        <img src={lern} alt="" />
                                    </div>


                                    <div className="p-1 rounded bg-red-300 rounded shadow-md dark:bg-gray-900">

                                        <img src={lern2} alt="" />
                                    </div>


                                </div>
                                <div className="grid content-center gap-4">


                                    <div className=" rounded shadow-md   dark:bg-gray-900">

                                        <div className="flex items-center  mt-4 space-x-4">
                                            <img className='border-2 border-y-fuchsia-500 border-x-green-400' src={lern3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project3;