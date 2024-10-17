import React from 'react'
import JsonSerever from './JsonSerever'
import UserList from './page/UserList'

const App = () => {
  return (
    <JsonSerever>
      <UserList/>
    </JsonSerever>
  )
}

export default App