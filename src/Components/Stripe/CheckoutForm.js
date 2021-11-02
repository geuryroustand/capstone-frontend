import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
// import StatusMessages, { useMessages } from "./StatusMessages";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const [messages, addMessage] = useMessages();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    console.log("card", cardElement);
    console.log("strip", stripe);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Create payment intent on the server.

    // going to return the clientSecret

    const { clientSecret } = await fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentMethodType: "card",
        currency: "eur",
        // amount: price * 100,
      }),
    }).then((r) => r.json());

    // Confirm the payment on the client

    const { paymentIntent } = await stripe.confirmAffirmPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    // const result = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements,
    //   confirmParams: {
    //     return_url: "https://my-site.com/order/123/complete",
    //   },
    // });

    // if (result.error) {
    //   // Show error to your customer (e.g., payment details incomplete)
    //   console.log(result.error.message);
    // } else {
    //   // Your customer will be redirected to your `return_url`. For some payment
    //   // methods like iDEAL, your customer will be redirected to an intermediate
    //   // site first to authorize the payment, then redirected to the `return_url`.
    // }
  };

  const cardElementStyle = {
    style: {
      base: {
        color: "#fff",
        fontWeight: "500",
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87BBFD",
        },
      },
      invalid: {
        color: "green",
        iconColor: "green",
      },
      // complete: {},
      hidePostalCode: true,
    },
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="card-element"> Cart</label>
        <CardElement options={cardElementStyle} id="card-element" />
        <button>Pay</button>
      </form>
      {/* <StatusMessages messages={messages} /> */}
    </>
  );
};

export default CheckoutForm;
