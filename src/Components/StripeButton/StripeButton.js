import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IvnELAK4hYPkV878TXLsS6MwbLQbUKR4wpKEJ1MybC1Ynvuh06D84sRBYAuQBVPoXxI2Ktj1YAKpUzEKIUxoPlj00or5GqJM2';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckOut
      label='Pay Now'
      name='CRWM Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
