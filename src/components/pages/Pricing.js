import Navbar from "../Navbar"
import Howitworks from '../Howitworks'
import Footer from '../Footer'
import Price from '../Price'
import { useEffect } from "react"


function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Navbar />
            <Price />
            <Howitworks />
            <Footer />
        </>
    )
}

export default Pricing