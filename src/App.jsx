import React from 'react'
import UserList from './page/UserList'
import UseContextUser from './UseContextUser'

const App = () => {
  return (
    <UseContextUser>
      <UserList/>
    </UseContextUser>
  )
}

export default App