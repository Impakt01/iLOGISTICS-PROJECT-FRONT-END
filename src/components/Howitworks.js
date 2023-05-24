import '../styling.css'
import {Link} from 'react-router-dom'


function Howitworks() {

    return (
        <>
            <div className='howitworks-container'>
                <div className='container'>

                    <h1 className='how-h1'>
                        HOW IT WORKS
                    </h1> <br /> <br />

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <h4 className='how-h1'>
                                FOR BUSINESS
                            </h4>
                            <div className='for-business-hw'>

                                <div>
                                    <i class="fa-solid fa-user-plus fa-4x"></i> <br /> <br />
                                    <p>
                                        Create an account with
                                        <br />iLOGISTICS in few minutes.
                                    </p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-certificate fa-4x"></i><br /> <br />
                                    <p>
                                        Wait for your Business Verification.
                                        <br />This averagely takes one working day.
                                    </p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-file-arrow-up fa-4x"></i><br /> <br />
                                    <p>
                                        Start Uploading your driver's and vehicle's informations. <br />
                                        You can also post discount sales after your business verification.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div> <br /> <br /> <br />

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <h4 className='how-h1'>
                                FOR CUSTOMERS
                            </h4>
                            <div className='for-business-hw'>

                                <div>
                                    <i class="fa-solid fa-user-plus fa-4x"></i> <br /> <br />
                                    <p>
                                        Create an account with
                                        <br /> iLOGISTICS in few minutes.
                                    </p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-file-arrow-up fa-4x"></i><br /> <br />
                                    <p>
                                        Start posting delivery requests in real-time. <br />
                                        Drivers on iLOGISTICS will see and be able to accept the request
                                    </p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-tags fa-4x"></i><br /> <br />
                                    <p>
                                        Get access to various available discoount
                                        <br />from iLOGISTICS companies.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div> <br /> <br /> <br />

                    <div>
                        <ul className='banner-list-group'>
                            <li className='banner-list'> <Link className='banner-link' to='/signup'> Singup </Link></li>
                        </ul>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Howitworks