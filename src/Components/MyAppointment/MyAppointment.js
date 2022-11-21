import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../AuthContext/AuthContext";

const MyAppointment = () => {
  const { user, logout } = useContext(AuthUserContext);
  const url = `https://doctors-server-motiurrahman.vercel.app/bookings?email=${user.email}`;
  // console.log("Token", localStorage.getItem("accessToken"));
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      if (data.status === 401) {
        logout();
        return;
      }
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl text-left">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full my-5">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book.patient}</td>
                <td>{book.treatment}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
                <td>
                  {book.price && !book.paid && (
                    <Link to={`/dashboard/payment/${book._id}`}>
                      {" "}
                      <button className="btn btn-primary">Pay</button>
                    </Link>
                  )}
                  {book.price && book.paid && (
                    <samp className="text-primary">Paid</samp>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
