import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPT_PK);
const Payment = () => {
  const bookings = useLoaderData();
  const navigation = useNavigation();
  if (navigation.status == "loading") {
    return <Loading></Loading>;
  }
  const {
    _id,
    appointmentDate,
    treatment,
    patient,
    slot,
    email,
    phone,
    price,
  } = bookings;
  console.log(bookings);
  return (
    <div>
      <h1>Booking for {treatment}</h1>
      <p className="text-xl">
        Please pay {price} for your appointment on {appointmentDate}
      </p>
      <div className="w-96 bg-slate-500 mt-10 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookings={bookings} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
