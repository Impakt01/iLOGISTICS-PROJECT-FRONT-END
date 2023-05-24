import '../styling.css'
import { useState, useRef, useEffect } from 'react'

function Price() {
    const inputRef = useRef(null)


    const [settlement, setSettlement] = useState({
        pay: 2000,
        settle: 1950
    })

    function calculate(event) {
        var pay = event.target.value
        var settle = ''

        if (pay > 0 && pay <= 2500) {
            settle = pay - 50
        } else if (pay >= 2500 && pay <= 5000) {
            settle = pay - 150
        } else if (pay > 5000) {
            settle = pay - 200
        } else if (!pay || pay === 0) {
            settle = 0
        }

        setSettlement({
            pay,
            settle
        })
    }

    useEffect(() => {
      inputRef.current.focus()
    }, [])
    


    return (
        <>
            <div className='price-container'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-12 col-md-12 col-12'>
                            <div className='pricing'>

                                <div className='pricing-heading'>
                                    <h1> PRICING <br></br> (for business account) </h1>
                                    <p> iLOGISTICS operates on pay as you go basis. <br></br> This implies that you only pay us when you make money.</p>
                                </div>

                                <div className='price'>
                                    <h4>FOR DELIVERY CHARGED BETWEEN <br></br>#2,500 AND BELOW</h4>
                                    <h5> iLOGISTICS charges you #50 per delivery</h5>
                                </div>

                                <div className='price'>
                                    <h4>FOR DELIVERY CHARGED BETWEEN <br></br> #2,500 AND #5,000</h4>
                                    <h5> iLOGISTICS charges you #150 per delivery</h5>
                                </div>

                                <div className='price'>
                                    <h4>FOR DELIVERY CHARGE OF <br></br> #5,000 OR MORE</h4>
                                    <h5> iLOGISTICS charges you #200 per delivery</h5>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='for-pricing-bg'>
                        <div className='price-calculator'>
                            <h1> DO THE MATH </h1> <br />
                            <div>
                                <div>
                                    <h5> IF YOUR CUSTOMER PAYS; </h5>
                                    <input ref={inputRef} type='text' value={settlement.pay} onChange={calculate} />
                                </div>
                            </div>
                        </div> <br />

                        <div className='s-and-pay'>

                            <div>
                                <h5>
                                    WE SETTLE YOU
                                </h5>
                                <p> # {settlement.settle} </p>
                            </div>

                            <div>
                                <h5>
                                    iLOGISTICS FEES
                                </h5>
                                <p> # {settlement.pay - settlement.settle} </p>
                            </div>

                        </div>
                        <p className='price-note'>  iLOGISTICS fees include transfer charges </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Price