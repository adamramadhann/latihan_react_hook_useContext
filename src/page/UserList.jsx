import React from 'react'
import { useDataUserJson } from '../UseContextUser'

const UserList = () => {
  const {dataUser, loaidng} = useDataUserJson()
  return (
    <div>
      {
        dataUser.map((e) => (
          <h1>{e.name}</h1>
        ))
      }
    </div>
  )
}

export default UserList