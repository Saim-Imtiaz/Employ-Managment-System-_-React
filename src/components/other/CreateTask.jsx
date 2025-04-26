import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
    
        const createdTask = {
            title: taskTitle,
            date: taskDate,
            description: taskDescription,
            category: category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };
    
        const data = userData;
    
        data.forEach(function(elem) {
            if (assignTo === elem.firstName) {
                elem.tasks.push(createdTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
            }
        });
    
        setUserData(data);

        setAssignTo('');
        setCategory('');
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
    };
    

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e)=> submitHandler(e)} className='flex items-start justify-between w-full flex-wrap'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder='Make a Ui Design' className='text-sm py-2 px-3 w4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w-[80%]'/>
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} type="date" className='text-sm py-2 px-3 w4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w-[80%]'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} type="text" placeholder='Employee Name' className='text-sm py-2 px-3 w4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w-[80%]'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder='design, ui, etc' className='text-sm py-2 px-3 w4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w-[80%]'/>
                    </div>
                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={((e) => setTaskDescription(e.target.value))} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full cursor-pointer'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask