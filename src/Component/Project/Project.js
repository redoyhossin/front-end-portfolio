import React from 'react';
import workout from '../../Assets/project/workout.png';
import program from '../../Assets/project/basicprogram.png';
import lerncode from '../../Assets/project/learncode.png';
import UseTitle from '../../Hooks/UseTitle/UseTitle';

const Project = () => {
    UseTitle('Project')
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={workout} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                           
                            <h3 className="text-3xl font-bold">Workout-Gym-Clube</h3>
                            <p className="my-6 dark:text-gray-400">An exercise to test or improve one's fitness for athletic competition, ability, or performance practice web-site</p>

                            <div className='flex'>
                                <a target='_blank' className='mx-3' href="https://github.com/redoyhossin/Workout-Gym-Clube.git"><button className="btn btn-outline">See Github</button></a>

                                <a target='_blank' href="https://prismatic-gnome-f157f4.netlify.app/"><button className="btn btn-outline btn-accent">See live</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={program} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                           
                            <h3 className="text-3xl font-bold">Learning-Basic-Programe</h3>
                            <p className="my-6 dark:text-gray-400">My design feature Learning-Basic-Programe online programming quize practice and developed skills many feature and home page quize part see practice like your Quize part quize topics</p>

                            <div className='flex'>
                                <a target='_blank' className='mx-3' href="https://github.com/redoyhossin/Learning-Basic-Programe.git"><button className="btn btn-outline">See Github</button></a>

                                <a target='_blank' href="https://relaxed-cocada-4d2190.netlify.app/"><button className="btn btn-outline btn-accent">See live</button></a>
                            </div>


                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={lerncode} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                           
                            <h3 className="text-3xl font-bold">Learn code</h3>
                            <p className="my-6 dark:text-gray-400">this site feature programme basic to advance site home page blog site courses blog site some question and ans the question topic courses site programme language tropic instructions etc</p>

                            <div className='flex'>
                                <a target='_blank' className='mx-3' href="https://github.com/redoyhossin/learn-code.git"><button className="btn btn-outline">See Github</button></a>
                                <a target='_blank' href="https://learn-code-494e1.web.app/"><button className="btn btn-outline btn-accent">See live</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;