import Navbar from "../Navbar"
import Howitworks from '../Howitworks'
import Footer from '../Footer'
import SignupBusiness from "../SignupBusiness"
import { useEffect } from "react"


function BusinessSignup() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <Navbar />
            <SignupBusiness />
            <Howitworks />
            <Footer />
        </>
    )
}

export default BusinessSignup