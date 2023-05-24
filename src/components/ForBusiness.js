import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styling.css'


function ForBusiness() {
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const reveal = document.getElementById('opacity')

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

            <div className='for-business-gc remove' id='opacity'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-lg-6 col-md-6'>
                            <img src='./forbusiness.png' alt='img' className='for-business-img img-fluid animate-2' />
                        </div>

                        <div className='col-lg-6 col-md-6'>

                            <div className='adjust-for-business'>
                                <div className='animate-1'>

                                    <h1 className='for-business-h1'>
                                        iLOGISTICS <br /> FOR BUSINESS
                                    </h1> <br />

                                    <div>
                                        <h4 className='manage-drivers'> MANAGE DRIVERS </h4>
                                        <p className='manage-drivers-details'>
                                            Add drivers and view their activities on your dashboard. <br />
                                            Automate payments per orders to your drivers
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className='manage-drivers'> POST DISCOUNT </h4>
                                        <p className='manage-drivers-details'>
                                            Are you doing special sales?. Post it on iLOGISTICS where
                                            a pool of potential customers can view and subscribe in real time.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className='manage-drivers'> DRIVERS RATING </h4>
                                        <p className='manage-drivers-details'>
                                            See what your customers are saying about your drivers through their ratings.
                                        </p>
                                    </div> <br />

                                    <Link className='for-business-signup' to="/businessSignup"> Signup For Free </Link>


                                </div>
                            </div>




                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default ForBusiness