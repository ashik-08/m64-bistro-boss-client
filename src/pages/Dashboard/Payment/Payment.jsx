import { Helmet } from "react-helmet-async";
import Title from "../../../components/Dashboard/Title/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Make Payment</title>
      </Helmet>
      <section>
        <Title subHeading={"---Make it---"} heading={"payment"} />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </section>
    </>
  );
};

export default Payment;
