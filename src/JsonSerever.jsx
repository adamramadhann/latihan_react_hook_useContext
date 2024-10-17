import React, { createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext()

const JsonSerever = ({children}) => {
    const [datauser, setDataUser] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = async () => {
            try {
                const jsonUser = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await jsonUser.json()
                setDataUser(data)
                console.info(data)
            } catch (error) {
                console.error(error)
            }
            setIsLoading(false)
        }
        result()
    }, [])
  return (
    <userContext.Provider value={{datauser, isLoading}}>
        {children}
    </userContext.Provider>
  )
}

export const useUserContext = () => {
    return useContext(userContext)
}

export default JsonSerever