import { Link } from 'react-router-dom'
import '../styling.css'
import { useEffect } from 'react'


function ForCustomer() {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const reveal = document.getElementById('opacity2')

                var windowHeight = window.innerHeight;
                var revealtop = reveal.getBoundingClientRect().top
                var revealPoint = 150

                if (revealtop < windowHeight - revealPoint) {
                    reveal.classList.add('animation')
                }

        })
    })

    return (
        <>

        <div className='for-business-gc remove' id='opacity2'>

            <div className='container'>

                <div className='row'>
                    <div className='col-lg-6 col-md-6'>

                        <div className='adjust-for-business'>
                            <div className='animate-1'>

                        <h1 className='for-business-h1'>
                            iLOGISTICS <br/> FOR CUSTOMERS
                        </h1> <br/> 
                        
                        <div>
                        <h4 className='manage-drivers'> POST DELIVERY REQUEST </h4>
                        <p className='manage-drivers-details'> 
                            Post request with your desired price/time and wait for drivers to accept your request.
                        </p>
                        </div>

                        <div>
                        <h4 className='manage-drivers'> ACCESS TO DISCOUNT OFFERS </h4>
                        <p className='manage-drivers-details'> 
                            Get access to available discount prices for your delivery. 
                        </p>
                        </div>

                        <div>
                        <h4 className='manage-drivers'> KNOW YOUR DRIVER </h4>
                        <p className='manage-drivers-details'> 
                            With ratings and comments from others customers on the driver's profile. You can Know more about the driver before patronising.
                        </p>
                        </div> <br/>

                        <Link className='for-business-signup'  to="/signup"> Signup For Free </Link>


                        </div>
                        </div> 

                    </div>

                    <div className='col-lg-6 col-md-6 animate-2'>
                        <img src='./forCustomers.png' alt='img' className='for-business-img img-fluid'/>
                    </div>

                </div>

            </div>

        </div> <br />  <br />

       
        
        </>
    )
}

export default ForCustomer