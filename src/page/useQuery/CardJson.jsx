import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CardJson = () => {
    const [data, setData] = useState([])

   const dataApi = async () => {
    const dataApiJson = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUser = await dataApiJson.json()
    setData(dataUser)
    if(dataUser) {
        console.info('data succes')
    } else {
        console.info("data not found")
    }
   }

   console.info(data)


    useEffect(() => {
        dataApi()
    }, [])

  return (
    <div className='header' >
        {
            data.map((e) => (
                <div key={e.id} className='card-header' >
                    <div className='card-children' >
                        <h1>{e.name}</h1>
                        <Link to={`/detail/${e.id}`} >detail</Link>
                    </div>
                        <h1>{e.email}</h1>
                    <div className='btn-children' >
                        <button>Edit</button>
                        <button>Hapus</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CardJson