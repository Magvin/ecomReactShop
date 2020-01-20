import React from 'react'
// Third Parties
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    let displaySuccess = false;
    const priceForPrice = price *100;
    const publishableKey = 'pk_test_TAj6VyBrp6zSFGfsIH21OvhU00kdQudPHB';

    const onToken = token => {
        console.log(token)
        displaySuccess = true;
        setTimeout(()=>{
            displaySuccess = false
        },500)
    }
    
    return (
        <div className="">
        <StripeCheckout 
        label="Pay Now"
        name=" CRWN CLothing Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForPrice}
        token={onToken}
        stripeKey ={ publishableKey}
        />
        {displaySuccess ? <div>Payment Successful</div> : null}
        </div>

    )
}
export default StripeCheckoutButton;