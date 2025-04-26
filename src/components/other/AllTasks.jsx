import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const [userData, setUserData] = useContext(AuthContext)

  return (
    <div id='allTask' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='py-2 px-4 flex justify-between rounded bg-red-400 mb-2 '>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>

        <div className='' id='employeeSlide'>
        {userData.map(function(elem, idx){
            return <div key={idx} className='py-2 px-4 flex justify-between rounded border-2 border-emerald-500 mb-2 '>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 !text-blue-600'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 !text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 '>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-red-600'>{elem.taskCount.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTasks