import Navbar from "../Navbar"
import Footer from '../Footer'
import { useEffect } from "react"
import LoginUser from "../LoginUser"


function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Navbar />
            <LoginUser />
            <Footer />
        </>
    )
}

export default Login