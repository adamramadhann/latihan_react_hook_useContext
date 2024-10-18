import React, { createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext()

const UseContextUser = ({children}) => {
    const [dataUser, setDataUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getDataUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const userData = await response.json()
                setDataUser(userData)
                console.info(userData)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }

        getDataUser()
    }, [])

  return (
    <userContext.Provider value={{dataUser, loading}} >
        {children}
    </userContext.Provider>
  )
}

export const useDataUserJson = () => {
    return useContext(userContext)
}

export default UseContextUser