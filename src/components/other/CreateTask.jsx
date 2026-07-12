import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const {userData, setUserData} = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const data = [...userData.employees]

    data.forEach((elem) => {
      if (assignTo.trim().toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(task)
        elem.taskNumbers.newTask += 1
      }
    })

    setUserData({
      ...userData,
      employees: data,
    })

    localStorage.setItem('employees', JSON.stringify(data))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className="p-5 bg-[#1C1C1C] rounded mt-7">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-2 px-4 h-44 w-full rounded outline-none bg-transparent border border-gray-400"
          ></textarea>

          <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-sm py-3 px-5 rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask