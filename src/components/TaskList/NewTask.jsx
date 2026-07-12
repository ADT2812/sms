import React from 'react'

const NewTask = ({data}) => {

    return (
        <div className='bg-blue-400 rounded-xl p-5'>

            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
                    {data.category}
                </h3>

                <h4 className='text-sm'>
                    {data.taskDate}
                </h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>
                {data.taskTitle}
            </h2>

            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>

            <button className='mt-5 bg-green-500 px-3 py-1 rounded'>
                Accept Task
            </button>

        </div>
    )
}

export default NewTask