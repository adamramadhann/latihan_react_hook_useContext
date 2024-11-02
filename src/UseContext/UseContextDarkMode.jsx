import { createContext, useContext, useEffect, useState } from "react";

const UseContextDark = createContext(null)


const HandleUseContext = ( { children }) => {
    const [dark, setDark] = useState(false)
    const [light, setLight] = useState(false)

    
}

export const darkMode = useContext(UseContextDark)

export default HandleUseContext