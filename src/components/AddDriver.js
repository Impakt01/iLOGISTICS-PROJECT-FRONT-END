import '../styling.css'

function AddDriver() {

    return (
        <>
            <div className='driver-form'>
                <h1 className='add-driver-title'>ADD DRIVER </h1>
                <p> Driver's password is driver012345. by default. Your Driver can change this at soon as he log in </p>
            <form>
                <div className='mb-3'>
                    <label class="form-label">
                        Driver's Name
                    </label>
                    <input type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Driver's Phone Number
                    </label>
                    <input type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Driver's Email
                    </label>
                    <input type='email' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Vehicle Reg No
                    </label>
                    <input type='text' className='form-control' placeholder='the Reg No of the vehicle attached to the driver' />
                </div>

                <button type="submit" class="btn btn-primary">ADD DRIVER</button>
            </form>
            </div>

        </>
    )
}

export default AddDriver