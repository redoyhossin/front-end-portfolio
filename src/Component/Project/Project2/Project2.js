import React from 'react';
import basic1 from '../../../Assets/basicprogram/basic1.png'
import basic2 from '../../../Assets/basicprogram/basic2.png'
import basic3 from '../../../Assets/basicprogram/basic3.png'

const Project2 = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Learning-Basic-Programe</h2>

                            <ul className="ml-4 space-y-1 list-disc ">
                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">My design feature Learning-Basic-Programe</h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline"> online programming quize practice and developed skills</h1>
                                </li>
                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline"> home page quize part see practice like your Quize </h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">part quize topics
                                        setup router router components</h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">statices route rechart deaign blog some question answer and others feature</h1>
                                </li>
                            </ul>
                            <a target='_blank' className='mx-3' href="https://github.com/redoyhossin/Learning-Basic-Programe.git"><button className="mt-3 btn btn-outline">See Github</button></a>

                            <a target='_blank' href="https://relaxed-cocada-4d2190.netlify.app/"><button className="btn btn-outline btn-accent mr-3">See live</button></a>

                        </div>


                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className='p-1 rounded bg-black' >

                                        <img src={basic1} alt="" />
                                    </div>


                                    <div className="p-1 rounded bg-red-300 rounded shadow-md dark:bg-gray-900">

                                        <img src={basic2} alt="" />
                                    </div>


                                </div>
                                <div className="grid content-center gap-4">


                                    <div className=" rounded shadow-md   dark:bg-gray-900">

                                        <div className="flex items-center  mt-4 space-x-4">
                                            <img className='border-2 border-y-fuchsia-500 border-x-green-400' src={basic3} alt="" />
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

export default Project2;