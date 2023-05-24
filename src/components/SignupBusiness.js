import '../styling.css'


function SignupBusiness() {

    return (
        <>

            <div className='sing-up-container'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-12 col-md-12'>

                            <div className='sign-up-banner-text'>
                                <h1> CREATE A BUSINESS ACCOUNT <br /> WITH iLOGISTICS </h1>
                                <p> To register your logistics company with iLOGISTICS, <br></br> Corporate affairs commision registration number
                                <br></br> and vehicle registration number for each driver is required</p>
                            </div>

                            <div>
                                <div className='customer-signup-form'>

                                    <form className='singup-form'>
                                        <div>
                                        <label className='form-label'>Company Name</label><br></br>
                                        <input type='text' placeholder='input testing here' className='Lastname' />
                                        </div>

                                        <div>
                                        <label className='form-label'>phone Number</label> <br></br>
                                        <input type='text' placeholder='input testing here' className='Firstname-control' />
                                        </div>

                                        <div>
                                        <label className='form-label'>Company Email</label> <br></br>
                                        <input placeholder='kindly input any dummy email here' type='email' />
                                        </div>

                                        <div>
                                        <label className='form-label'>CAC Registration number</label><br></br>
                                        <input type='text' placeholder='input testing here' className='Lastname' />
                                        </div>

                                        <div>
                                        <label className='form-label'>Vehicle Reg No</label><br></br>
                                        <input type='text' placeholder='input testing here' className='Lastname' />
                                        <div>
                                        <button type="submit" className="button">ADD Vehicle Reg No</button>
                                        </div>
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

export default SignupBusiness