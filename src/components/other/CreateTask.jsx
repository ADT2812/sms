import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    setTask(newTask)

    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function (elem) {

      if (assignTo.trim().toLowerCase() === elem.firstName.toLowerCase()) {
        console.log("Employee Found")

        elem.tasks.push(newTask)

        // Update task count
        elem.taskNumbers.newTask += 1

        console.log(elem)
      }
    })

    // Save updated employees back to localStorage
    localStorage.setItem("employees", JSON.stringify(data))

    console.log("Updated Employees:", data)

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className='p-5 bg-[#1C1C1C] rounded mt-7'>
      <form
        onSubmit={submitHandler}
        className='flex flex-wrap w-full items-start justify-between'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="date"
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder="Employee name (e.g. Aarav)"
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='text-sm py-2 px-4 h-44 w-full rounded outline-none bg-transparent border-[1px] border-gray-400'
          ></textarea>

          <button className='w-full mt-4 hover:bg-emerald-600 bg-emerald-500 text-sm py-3 px-5 rounded'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask