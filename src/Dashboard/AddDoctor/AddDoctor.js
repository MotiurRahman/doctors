import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const AddDoctor = () => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const imgHostKey = process.env.REACT_APP_imgbb_KEY;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddDoctor = (data) => {
    //console.log(data);
    setMessage("");

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: result.data.url,
          };
          //console.log("Success:", doctor);

          fetch("http://localhost:8000/doctors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast("Doctors uploaded successfully");
                navigate("/dashboard/managedoctors");
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: () =>
      fetch("http://localhost:8000/appointmentSpeciality").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <form
        className="flex justify-items-center items-center flex-col"
        onSubmit={handleSubmit(handleAddDoctor)}
      >
        <h1 className="text-center text-2xl font-bold">Add A New Doctor</h1>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: "Name field is required",
            })}
            type="text"
            name="name"
            placeholder="enter name"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.displayName && (
            <span className="text-red-600 text-left">
              {errors.displayName.message}
            </span>
          )}
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email field is required",
            })}
            type="email"
            name="email"
            placeholder="enter email"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <span className="text-red-600 text-left">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select
            {...register("speciality", {
              required: "Select Speciality",
            })}
            name="speciality"
            className="select select-bordered w-full max-w-xs"
          >
            {specialties?.map((speciality) => (
              <option key={speciality._id} value={speciality.name}>
                {speciality.name}
              </option>
            ))}
          </select>

          {errors.speciality && (
            <span className="text-red-600 text-left">
              {errors.speciality.message}
            </span>
          )}
          <p className="text-green text-center">{message}</p>
        </div>

        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Upload Your Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="file-input input-bordered  w-full max-w-xs"
          />
          {errors.password && (
            <span className="text-red-600 text-left">
              {errors.password.message}
            </span>
          )}
          <p className="text-green text-center">{message}</p>
        </div>

        {/* <p>{data}</p> */}
        <input type="submit" className="btn btn-wide my-2" value="ADD" />
      </form>
    </div>
  );
};

/**
 * image hosting server
 * File system of your server
 * mongodb (database)
 *
 */

export default AddDoctor;
