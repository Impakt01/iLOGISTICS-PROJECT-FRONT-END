import '../styling.css'

function OrdersTable(props) {

    return (
        <>

            <div className='table-bg'>
                <h5 className='dashboard-title'>PENDING ORDERS</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Pickup Status</th>
                            <th scope="col">Delivery Status</th>
                            <th scope="col">pickup time</th>
                            <th scope="col">Parcel weight</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><span class="material-symbols-outlined">
                                done
                            </span></th>
                            <td><span class="material-symbols-outlined">
                                done
                            </span></td>
                            <td> 9:00</td>
                            <td> 1kg </td>
                            <td> <p className='order-start' onClick={props.forButton}>Start Order</p> </td>
                        </tr>
                        <tr>
                            <th scope="row"><span class="material-symbols-outlined">
                                done
                            </span></th>
                            <td><span class="material-symbols-outlined">
                                done
                            </span></td>
                            <td> 9:00 </td>
                            <td>1kg</td>
                            <td> <p className='order-start'>Start Order</p> </td>
                        </tr>
                        <tr>
                            <th scope="row"><span class="material-symbols-outlined">
                                done
                            </span></th>
                            <td><span class="material-symbols-outlined">
                                done
                            </span></td>
                            <td> 3:30</td>
                            <td>0.2kg</td>
                            <td> <p className='order-start'>Start Order</p> </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default OrdersTable