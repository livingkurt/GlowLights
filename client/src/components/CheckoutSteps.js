import React from 'react'


const CheckoutSteps = (props) => {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''}> Sign-In </div>
    <div className={props.step2 ? 'active' : ''}> Shipping</div>
    <div className={props.step3 ? 'active' : ''}> Payment</div>
    <div className={props.step5 ? 'active' : ''}> Place Order</div>
  </div>

}
export default CheckoutSteps