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


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={props.data} changeUser={props.changeUser}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard