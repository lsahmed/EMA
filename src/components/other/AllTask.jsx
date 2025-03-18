import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5'>
         <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className=' text-lg font-medium w-1/5 '>Employee Name</h2>
                <h3 className=' text-lg font-medium w-1/5 '>New Task</h3>
                <h5 className=' text-lg font-medium w-1/5'>Completed Task</h5>
                <h5 className=' text-lg font-medium w-1/5'>Accepted Task</h5>
                <h5 className=' text-lg font-medium w-1/5'>Failed Task</h5>
            </div>

        <div className=''>
            { userData.employees.map((elem, idx) => {
                return <div key={idx} className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded h-17'>
                    <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 '>{elem.taskCounts.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.accepted}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.failed}</h5>
                </div>
            }) }
        </div>

    </div>
  )
}

export default AllTask