// 어디서든 쉽고 빠르게 AuthContext에 접근할 수 있도록 커스텀 훅을 만들어준다. 

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}