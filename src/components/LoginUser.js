import '../styling.css'

function LoginUser() {

    return (
        <>
            <div className='login-container'>
                <div className='container'>

                    <div className='row'>

                        <div className='col-12 col-md-12 col-12'>

                            <div className='customer-signup-form'>

                                <h1 className='login-as'>LOGIN AS</h1>
                                <form>
                                    <input type='radio' value='business' id='business' name='login' />
                                    <label for='business'>as business</label> 

                                    <input type='radio' value='driver' id='driver' name='login' />
                                    <label for='driver'>as driver</label>

                                    <input type='radio' value='customer' id='customer' name='login' />
                                    <label for='customer'>as customer</label> 
                                </form>
                                <br/>

                                <form className='singup-form'> 

                                    <div>
                                        <label className='form-label'>email</label><br></br>
                                        <input type='email' placeholder='input the reg dummy email here' className='email' />
                                    </div>
                                    <div>
                                        <label className='form-label'>password</label> <br></br>
                                        <input type='password' placeholder='input test12345' className='password' />
                                    </div>
                                    <div>
                                        <button type="submit" className="button">Login</button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginUser