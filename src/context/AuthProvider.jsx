import React , {createContext} from 'react'
export const AuthContext = createContext()
import { useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { useEffect } from 'react'
import { useContext } from 'react'
import { setLocalStorage } from '../utils/localStorage'





const AuthProvider = ({children}) => {
    //localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(()=>{
        setLocalStorage() 
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])



  return (
    <div>
        <AuthContext.Provider value={{userData,setUserData}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider