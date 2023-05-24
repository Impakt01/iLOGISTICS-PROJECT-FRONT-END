import '../styling.css'

function AddDiscount() {

    return (
        <>

<div className='driver-form'>
                <h1 className='add-driver-title'>ADD DISCOUNT </h1>
            <form>
                <div className='mb-3'>
                    <label class="form-label">
                        Weight Limit
                    </label>
                    <input type='text' className='form-control' placeholder='set optional weight limit'/>
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                       Set Distance's Instance
                    </label>
                    <input type='text' className='form-control' placeholder='pickup'/>
                    <input type='text' className='form-control' placeholder='destination'/>
                    <span>Price set for this distance would be used as your defualt price for this discount</span>
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Location
                    </label>
                    <input type='email' className='form-control' placeholder='for people around ikeja and environs'/>
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Normal Price
                    </label>
                    <input type='text' className='form-control' placeholder='Price for the distance instance' />
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        percentage distance
                    </label>
                    <input type='text' className='form-control' placeholder='e.g reduce normal price by 10%' />
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Discount Expiration Date
                    </label>
                    <input type='date' className='form-control'/>
                </div>

                <div className='mb-3'>
                    <label class="form-label">
                        Description
                    </label>
                    <input type='text' className='form-control' placeholder='New year sale' />
                </div>

                <button type="submit" class="btn btn-primary">UPLOAD DISCOUNT</button>
            </form>
            </div>
        
        </>
    )
}

export default AddDiscount