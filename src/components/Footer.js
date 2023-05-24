import '../styling.css'

function Footer() {

    const d = new Date()
    const year = d.getFullYear()

    return (
        <>
            <div className='footer-container'>
                <div className='container'>

                    <div className='row'>

                        <div className='col-lg-3 col-md-3'>
                            <h1 className='banner-text'>
                                iLOGISTICS
                            </h1>
                        </div>

                        <div className='col-lg-3 col-md3 footer-texts'>

                            <h5>
                                Company
                            </h5>

                            <ul>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Careers
                                </li>
                            </ul>

                        </div>

                        <div className='col-lg-3 col-md3 footer-texts'>

                            <h5>
                                Products
                            </h5>

                            <ul>
                                <li>
                                    Deliver
                                </li>
                                <li>
                                    Intra-logidtics
                                </li>
                                <li>
                                    Inter-logistics
                                </li>
                            </ul>

                        </div>

                        <div className='col-lg-3 col-md3 footer-texts'>

                            <h5>
                                Support
                            </h5>

                            <ul>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    Help center
                                </li>
                                <li>
                                    Faqs
                                </li>
                            </ul>

                        </div>

                    </div> <br />

                    <p className='footer-lw'> <i class="fa-solid fa-copyright"></i> {year} Toluaoyewale dev. All Rights Reserved.</p>

                </div>
            </div>
        </>
    )
}

export default Footer