import React, { useContext } from 'react'
import { themeContext, userContext } from '../App'


const DarkMode = () => {

    const data = useContext(userContext)
    const theme = useContext(themeContext)

  return (
    <div>
      <h1>
        data : {data.nama}
      </h1>
    </div>
  )
}

export default DarkMode