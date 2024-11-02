    import React, { useEffect, useState } from 'react'

    const GetAll = () => {
        const [data, setData] = useState([])
        const [openFormEdit, setOpenFormEdit] = useState(null)
        const [name,setName] = useState('')
        const [email, setEmail] = useState('')

        const GetAllBro = async () => {
            const dataAll = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const dataJson = await dataAll.json()
            setData(dataJson)

            if(dataJson) {
                console.info(dataJson.map(prev => prev.name))
            } else (
                console.error("data undifind")
            )
        }


        const DeleteById = async (id) => {
            
            const consf = window.confirm("are you sure delete data ?? ")
            if(!consf) return

            try {
                const deleteData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    method : "DELETE",
                })
                setData(data.filter(user => user.id !== id))
                console.info(`delete data to ${id} success `)
            } catch (error) {
                console.error(error)
            }
        }

        const handleEditBtn = (e) => {
            setOpenFormEdit(e.id)
            setName(e.name)
            setEmail(e.email)
        }


        const handleSUbmit = async (e) => {
            e.preventDefault()
            const dataUser = {name, email}
            try {
                const dataEdit = await fetch(`https://jsonplaceholder.typicode.com/users/${openFormEdit}`, {
                    method : "PUT",
                    headers : {
                        "Content-type" : "application/json"
                    },
                    body : JSON.stringify(dataUser)
                })

                const dataEditJson = await dataEdit.json()
                setData(data.map(prev => prev.id === openFormEdit ? dataEditJson : prev))
                setOpenFormEdit(null)
                console.info(`data succes updeted`)
            } catch (error) {
                console.info(error)
            }
        }


        useEffect(() => {
            GetAllBro()
        }, [])


    return (
        <div style={{display: "flex"}} >
            <div style={{display:"grid", gap: "100px", flexGrow:"1"}} >
            {
                data.map((e) => (
                    <div key={e.id} style={{fontSize: "9px", color:"red"}} >
                        <h1>{e.name}</h1>
                        <h1>{e.email}</h1>
                        <div>
                            <button onClick={() => handleEditBtn(e)} >edit</button>
                            <button onClick={() => DeleteById(e.id)} >delete</button>
                        </div>
                        {
                            openFormEdit === e.id && (
                                <form onSubmit={handleSUbmit} >
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <button type='submit'>Submit</button>
                                </form>
                            )
                        }
                    </div>
                ))
            }
            </div>
        <div style={{display:"flex", flexDirection:"column", gap:"100px", flexGrow:"1"}} >
        {
                data.map((e) => (
                    <div style={{fontSize: "9px", color:"red"}} >
                        <h1>{e.name}</h1>
                        <h1>{e.email}</h1>
                    </div>
                ))
            }
        </div>
        </div>
    )
    }

    export default GetAll