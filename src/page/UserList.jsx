import React from 'react'
import { useUserContext } from '../JsonSerever'

const UserList = () => {
    const {datauser, isLoading} = useUserContext()
    if(isLoading) return <h1>Loding....</h1>
  return (
    <div>
        {datauser.map((user) => (
            <h1>{user.name}</h1>
        ))}
    </div>
  )
}

export default UserList