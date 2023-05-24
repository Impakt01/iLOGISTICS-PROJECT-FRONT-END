import Navbar from "../Navbar";
import SignupBanner from "../SignupBanner";
import Howitworks from '../Howitworks'
import Footer from '../Footer'
import { useEffect } from "react";


function Signup() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Navbar />
            <SignupBanner />
            <Howitworks />
            <Footer />
        </>
    )
}

export default Signup