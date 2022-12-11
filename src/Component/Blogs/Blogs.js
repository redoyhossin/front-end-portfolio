import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <h1 className=' text-2xl font-semibold text-center my-5'>Coming</h1>
            <div className='flex justify-center'>
                <div className="bg-black w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"><code className='text-2xl font-semibold text-red-400'>Soon</code>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className="bg-red-200 flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                    <div className="h-48 rounded-t dark:bg-gray-700"></div>
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;