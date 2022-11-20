import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Components/Loading/Loading";
import ConfirmationModal from "../../Pages/Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:8000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const handleDelete = (data) => {
    console.log(data._id);
    const URL = `http://localhost:8000/doctors?id=${data._id}`;

    fetch(URL, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast("Doctor Deleted Successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <h1>ManageDoctors: {doctors?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>
                  <label
                    htmlFor="confirmationModal"
                    onClick={() => setDeletingDoctor(doctor)}
                    className="btn btn-danger"
                  >
                    Delete
                  </label>
                  {/* <button
                    onClick={() => handleDelete(doctor._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deletingDoctor && (
          <ConfirmationModal
            title={"Are you sure you want to delete?"}
            message={`if you delete ${deletingDoctor.name}. It can not be undone`}
            successAction={handleDelete}
            modalData={deletingDoctor}
            closeModal={closeModal}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
