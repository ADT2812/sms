import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage'
import { setLocalStorage } from '../../utils/localStorage'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard