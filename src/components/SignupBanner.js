import '../styling.css'
import { Link } from 'react-router-dom'


function SignupBanner() {

    return (
        <>

            <div className='sing-up-container'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-12 col-md-12'>

                            <div className='sign-up-banner-text'>
                                <h1> CREATE A CUSTOMER ACCOUNT <br /> WITH iLOGISTICS </h1>
                                <p> Are you a logistics company? <Link to='/BusinessSignup'>create business account</Link></p>
                            </div>

                            <div>
                                <div className='customer-signup-form'>

                                    <form className='singup-form'>
                                        <div>
                                        <label className='form-label'>Lastname</label><br></br>
                                        <input type='text' placeholder='input testing here' className='Lastname' />
                                        </div>

                                        <div>
                                        <label className='form-label'>Firstname</label> <br></br>
                                        <input type='text' placeholder='input testing here' className='Firstname-control' />
                                        </div>

                                        <div>
                                        <label className='form-label'>Email</label> <br></br>
                                        <input placeholder='kindly input any dummy email here' type='email' />
                                        </div>

                                        <div>
                                        <label className='form-label'>Create Password</label> <br></br>
                                        <input type='password' placeholder='input test12345 here' className='Password-control' />
                                        </div>

                                        <div>
                                        <label className='form-label'>Confirm Password</label> <br></br>
                                        <input type='password' placeholder='input test12345 here' className='Confirm-password-control' />
                                        </div>

                                        <div>
                                        <button type="submit" className="button">Submit</button>
                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SignupBanner