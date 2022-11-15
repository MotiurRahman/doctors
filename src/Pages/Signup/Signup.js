import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <div className="lg:w-1/2 m-auto ">
      <form
        className="flex justify-items-center items-center flex-col"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>
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
          {errors.name && (
            <span className="text-red-600 text-left">
              {errors.name.message}
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
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be six cahracter long",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                message:
                  "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
              },
            })}
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && (
            <span className="text-red-600 text-left">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* <p>{data}</p> */}
        <input type="submit" className="btn btn-wide my-2" value="Submit" />
        <p>
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
      </form>
      <div className="divider">OR</div>
      <button className="btn btn-outline btn-wide">Continue with Google</button>
    </div>
  );
};

export default Signup;
