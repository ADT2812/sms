import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data);
  return (
    <div id='tasklist' className='h-[55%] flex items-center justify-start overflow-x-auto gap-5 flex-nowrap w-full py-5 mt-10'>
        
     {data.tasks.map((elem)=>{
        if(elem.active){
            return <AcceptTask/>
        }
        if(elem.newTask){
            return <NewTask/>
        }
        if(elem.completed){
            return <CompleteTask/>
        }
        if(elem.failed){
            return <FailedTask/>
        }
     })}    
    </div>
    

    
  )
}

export default TaskList