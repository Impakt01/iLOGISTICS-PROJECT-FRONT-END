import { Link } from 'react-router-dom'
import '../styling.css'


function Banner() {
    return (
        <>

    <div className='banner-container-1'>
        <div className='container-fluid'>
        <div className='banner-container'>

        <div className='row'>

        <div className='col-lg-12 col-md-12 col-12'>
            <div className='banner-texts'>
            <h1 className='banner-text'>
                LOGISTICS <br/> MADE EASY
            </h1>
            <p className='banner-text-2'>
                iLOGISTICS is a digital market place for intra-logisttics.<br/>Our solution helps logistic companies
                manage orders and drivers easily <br/>while also making pickup and deliveries swift for customers
            </p>
            </div>
        </div>
        
        <div className='banner-img'>
        <img src='./banner1-img.png' className='img1' alt='img'/>
        </div>
            
            <ul className='banner-list-group'>
                <li className='banner-list'> <Link className='banner-link' to='/signup'> Signup </Link></li>
            </ul> 

        </div>

        </div>
        </div>
        </div>
            
        </>
    )
}


export default Banner