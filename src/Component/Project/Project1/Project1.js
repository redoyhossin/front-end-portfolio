import React from 'react';
import work1 from '../../../Assets/workout/work1.PNG'
import work2 from '../../../Assets/workout/work2.PNG'
import work3 from '../../../Assets/workout/work3.png'

const Project1 = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Workout-Gym-Clube</h2>

                            <ul className="ml-4 space-y-1 list-disc ">
                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">part of Exercise Details Exercise time Break time</h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline"> use pure javascript </h1>
                                </li>
                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline"> Workout steps Push-up,plank,Side plank,Jumping jacks,Set up onto chair etc </h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">calculate all steps Exercise   Exercise min you have done</h1>
                                </li>

                                <li>
                                    <h1 rel="noopener noreferrer" href="#" className="hover:underline">some question ans example JavaScript works?,React component props?,usieffect is for side-effects usieffect</h1>
                                </li>
                            </ul>
                            <a target='_blank' className='mx-3' href="https://github.com/redoyhossin/Workout-Gym-Clube.git"><button className="mt-3 btn btn-outline">See Github</button></a>

                            <a target='_blank' href="https://prismatic-gnome-f157f4.netlify.app/"><button className="btn btn-outline btn-accent mr-3">See live</button></a>

                        </div>


                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className='p-1 rounded bg-black' >

                                        <img src={work1} alt="" />
                                    </div>


                                    <div className="p-1 rounded bg-red-300 rounded shadow-md dark:bg-gray-900">

                                        <img src={work2} alt="" />
                                    </div>


                                </div>
                                <div className="grid content-center gap-4">


                                    <div className=" rounded shadow-md   dark:bg-gray-900">

                                        <div className="flex items-center  mt-4 space-x-4">
                                            <img className='border-2 border-y-fuchsia-500 border-x-green-400' src={work3} alt="" />
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

export default Project1;