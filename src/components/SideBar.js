import '../styling.css'
import AddDriver from './AddDriver'
import DashboardList from './DashboardList'
import { useState } from 'react'
import AddDiscount from './AddDiscount'


function SideBar() {
    const [state, setstate] = useState({
        isActive: 'Dashboard'
    })

    const navigate = (e) => {
        var val = e.target.innerText
        setstate({
            isActive: val
        })
    }
    
    return (
        <>

            <div className='dashboard-gen-container'>
                <div className='sidebar-gen-container'>

                    <div>
                        <h5 className='dashboard-logo'>YOUR LOGO HERE </h5>
                    </div>

                    <div className='sidebar-list'>
                        <ul>
                            <div className='active-dashboard'>
                                <span className="material-symbols-outlined">
                                    grid_view
                                </span> <li className='tabs' onClick={navigate}> Dashboard</li>
                            </div>

                            <div>
                                <span className="material-symbols-outlined">
                                    sports_motorsports
                                </span> <li className='tabs' onClick={navigate}> Add Driver</li>
                            </div>

                            <div>
                                <span className="material-symbols-outlined">
                                    new_label
                                </span> <li className='tabs' onClick={navigate}> Upload Discount</li>
                            </div>

                            {/* <div>
                                <span class="material-symbols-outlined">
                                    person
                                </span> <li> Profile </li>
                            </div> */}

                            <div>
                                <span className="material-symbols-outlined">
                                    support_agent
                                </span><li className='tabs' onClick={navigate}> Help </li>
                            </div>

                            <div className='logout'>
                                <span className="material-symbols-outlined">
                                    logout
                                </span> <li className='tabs' onClick={navigate}> Logout</li>
                            </div>
                        </ul>
                    </div>

                </div>

                <main>
    
                    {state.isActive === 'Add Driver' && <AddDriver /> }
                    {state.isActive === 'Upload Discount' && <AddDiscount /> }
                    {state.isActive === 'Dashboard' && <DashboardList />}

                </main>
            </div>

        </>
    )
}

export default SideBar