import '../styling.css'
import { useState } from 'react'
import OrderDetail from './OrderDetail'
import OrdersTable from './OrdersTable'

function PendingOrders() {
    const [state, setstate] = useState({ isActive: '' })

    const startNow = (e) => {
        var val = e.target.innerText
        setstate({ isActive: val })
    }

    return (
        <>
            {state.isActive === 'Start Order' ? <OrderDetail/> : <OrdersTable forButton = {startNow}/> }
        </>
    )
}

export default PendingOrders