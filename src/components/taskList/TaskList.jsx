import React from 'react'
import AcceptTask from './acceptTask'
import NewTask from './newTask'
import CompleteTask from './completeTask'
import FailedTask from './failedTask'

const TaskList = ({data}) => {
    
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        {data.tasks.map((elem, idx) => {
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}
    </div>
    
  )
}

export default TaskList