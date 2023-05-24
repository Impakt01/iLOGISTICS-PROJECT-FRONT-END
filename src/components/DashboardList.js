import React from 'react'
import '../styling.css'

function DashboardList() {


    return (

        <>

            <div className='top-bg'>
                <h1 className='dashboard-title'> Dashboard </h1>

                <div className='boards'>

                    <div>
                        <h3> Driver </h3>
                        <ul>
                            <li><i class="fa-solid fa-circle"></i> 10 Drivers Active</li>
                            <li><i class="fa-solid fa-circle"></i> 2 Drivers Inactive</li>
                        </ul>
                    </div>

                    <div>
                        <h3> Discount </h3>
                        <ul>
                            <li><i class="fa-solid fa-circle"></i> 7 Active</li>
                            <li><i class="fa-solid fa-circle"></i> 3 Subscription</li>
                        </ul>
                    </div>

                    <div>
                        <h3> Earnings </h3>
                        <ul>
                            <li><i class="fa-solid fa-circle"></i> Total #20,000</li>
                            <li><i class="fa-solid fa-circle"></i> % to drivers 5 per ride</li>
                            <li><i class="fa-solid fa-circle"></i> settlement #17,000</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='table-bg'>
                <h5 className='dashboard-title'>DRIVERS</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">staus</th>
                            <th scope="col">Total orders</th>
                            <th scope="col">Ave. Rating</th>
                            <th scope="col">% Success</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Active</th>
                            <td>100</td>
                            <td>5 <span class="material-symbols-outlined">
                                star
                            </span></td>
                            <td>90%</td>
                            <td>check comments on driver</td>
                            <td><span class="material-symbols-outlined">
                                edit
                            </span></td>
                        </tr>
                        <tr>
                            <th scope="row">Active</th>
                            <td>650</td>
                            <td>5 <span class="material-symbols-outlined">
                                star
                            </span></td>
                            <td>97%</td>
                            <td>check comments on driver</td>
                            <td><span class="material-symbols-outlined">
                                edit
                            </span></td>
                        </tr>
                        <tr>
                            <th scope="row">Active</th>
                            <td>500</td>
                            <td>5 <span class="material-symbols-outlined">
                                star
                            </span></td>
                            <td>99.9%</td>
                            <td>check comments on driver</td>
                            <td><span class="material-symbols-outlined">
                                edit
                            </span></td>
                        </tr>
                    </tbody>
                </table>
            </div> 


        </>
    )
}

export default DashboardList
