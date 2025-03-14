import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-4 screen'>
        <div className="rounded-xl w-[45%] px-9 py-6 bg-red-400">
            <h2 className='text-3xl font-semibold'>O</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-400">
            <h2 className='text-3xl font-semibold'>O</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className="rounded-xl w-[45%] px-9 py-6 bg-green-400">
            <h2 className='text-3xl font-semibold'>O</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-400">
            <h2 className='text-3xl font-semibold'>O</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber