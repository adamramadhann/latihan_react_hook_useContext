    import React, { useEffect, useState } from 'react'




    const CardProduck = () => {
        const [dataProduck, setDatProduck] = useState([])
        const [select, setSelect] = useState([])


        
        const data = [
            {
            id: 1,
            product_name: 'Product 1',
            quantity: 2,
            },
            {
            id: 2,
            product_name: 'Product 2',
            quantity: 10,
            },
            {
            id: 3,
            product_name: 'Product 3',
            quantity: 4,
            },
        
            {
            id: 4,
            product_name: 'Product 4',
            quantity: 3,
            },
        ]


        function tambah(id)  {
            const result = dataProduck.map((val) => {
            if(val.id === id) {
                return {
                ...val,
                quantity: val.quantity + 1
                }
            }
            return val
            })

            setDatProduck(result)
        }

        function kurang (id) {
            const result = dataProduck.map((val) => {
                if(val.id === id) {
                    if(val.id === 1) {
                        return val
                    }

                    return {
                        ...val,
                        quantity : val.quantity -1
                    }
                }
                return val
            })
            setDatProduck(result)
        }


        function kurang(id)  {
            const result = dataProduck.map((val) => {
                if(val.id === id) {
                    if(val.quantity === 1) {
                        return val
                    }
                    return {
                        ...val,
                        quantity: val.quantity - 1
                    }
                } 
                return val
            })
            setDatProduck(result)
        }
        
        function handleSelect(id)  {
            const result = dataProduck.map((val) => {
                if(val.id === id) {
                    return {
                        ...val,
                        is_selected: true
                    }
                } 

                return val
            })
            setDatProduck(result)
        }


        function ButtonAll() {

            const selectedProduct = dataProduck.filter((val) => {
                return val.is_selected
            })
            console.log(selectedProduct)
        }
        


        useEffect(() => {
            setDatProduck(data)
        },[])
    return (
        <div>
            <div>
                {
                    dataProduck?.map((e) => (
                        <div key={e.id} >
                            <div style={{display:"flex", alignItems:"center", gap:"30px"}} >
                            <input type="checkbox" 
                            value={e?.is_selected}
                            onChange={() => handleSelect(e.id)}
                            />
                                <h1>{e.product_name}</h1>
                                <div>
                                    <button onClick={() => tambah(e.id)} >+</button>
                                    <button onClick={() => kurang(e.id)} >-</button>
                                </div>
                            </div>
                            <h1>{e.quantity}</h1>
                        </div>
                    ))
                }
                <button onClick={() => ButtonAll()} >All Data</button>
            </div>
        </div>
    )
    }

    export default CardProduck