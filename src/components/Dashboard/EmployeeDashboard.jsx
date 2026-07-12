import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'


const EmployeeDashboard = (props) => {

    const { userData } = useContext(AuthContext)

    const employee = userData?.employees?.find(
        (emp) => emp.id === props.data.id
    )


    console.log("Updated Employee Data:", employee)


    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>

            <Header 
                data={employee}
                changeUser={props.changeUser}
            />

            <TaskListNumbers 
                data={employee}
            />

            <TaskList 
                data={employee}
            />

        </div>
    )
}


export default EmployeeDashboard