import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

//amount tracks in cents, so we ask for 500 cents or 5 dollars

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            name="Email-ee"
            description="5$ for 5 Credits"
            amount={500}
            token={token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default Payments;