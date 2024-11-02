import { createContext, useContext, useEffect, useState } from "react";

export const UserCon = createContext(null)

const UserContext = ({ children}) => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        const handleApi = async () => {
            try {
                const apiJson = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await apiJson.json()
                setData(data)
            } catch (error) { 
                console.error(error)
            }
        }

        handleApi()
    })


    return (
        <UserCon.Provider value={{ data }}>
            { children }
        </UserCon.Provider>
    )
}


export const CreateUser = () => useContext(UserCon)


export default UserContext