import '../styling.css'

function Bikeman() {

    return (
        <>

            <div className='bikeman-general-container'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-3 col-md-3'>
                            
                            <div className='bikeman-texts'>
                                <div>
                                    <h4> PICKUPS AND DELIVERIES MADE EASY FOR DRIVERS </h4>
                                </div>
                                <div>
                                    <p>
                                        With our real-time routing, mapping and geolocation technology. Drivers can now combine booked pickups and deliveries
                                        loocations to get the best route.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 justify-bikeman'>
                            <div>
                            <img src='./bikeman.png' className='img-fluid bikeman-animation' alt='img' />
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-3'>
                            <div className='bikeman-texts'>
                                <div>
                                    <h4> BETTER TIME MANAGEMENTS FOR DRIVERS </h4>
                                </div>
                                <div>
                                    <p>
                                       Drivers can now accept delivery requests with pickup time from customers. Drivers can easily scroll through 
                                       available customer delivery requests and accept as much as possible base on the driver's availabilty
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

           

        </>
    )
}

export default Bikeman