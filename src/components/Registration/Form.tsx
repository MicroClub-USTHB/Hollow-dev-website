import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../../types/types";
import emailIcon from "/assets/registration/mail-24.svg";
import userIcon from "/assets/registration/person-24.svg";
import drop from "/assets/registration/Drop.svg";
import "../../views/Registration/style.css";
import SubmitArrow from "/assets/registration/SubmitArrow.svg";
import toast from "react-hot-toast";

const Form: React.FC = () => {
  // Initialize the useForm hook
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // Define the submit handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    fetch(`${process.env.VITE_API_URL}/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        reset();

        toast.success("Registration successful", {
          duration: 2000,
        });
      })
      .catch(() => {
        toast.error("Registration failed", {
          duration: 2000,
        });
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-2 md:px-16 w-5/6 text-white space-y-4"
      >
        {/* full name + email div */}
        <div className="flex flex-col md:flex-row  items-center justify-center gap-6">
          {/* Full Name */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              id="UserName"
              placeholder="Full Name"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
              {...register("fullName", { required: "Full Name is required" })}
            />
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400">
              <img src={userIcon} alt="" className="size-4" />
            </span>
            {errors.fullName && (
              <p className="text-red-500 mt-2">{errors.fullName.message}</p>
            )}
          </div>
          {/* Discord */}
          <div className="relative  w-full md:w-1/2">
            <input
              type="text"
              id="discordUsername"
              placeholder="Discord Username e.g. : ramzy1453"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
              {...register("discordUsername", {
                required: "Discord is required",
              })}
            />
            {errors.discordUsername && (
              <p className="text-red-500 mt-2">
                {errors.discordUsername.message}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="relative  w-full md:w-1/2">
            <input
              type="email"
              id="UserEmail"
              placeholder="Your Email"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400">
              <img src={emailIcon} alt="" className="size-4" />
            </span>
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
        </div>
        {/* Team Name + MC Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Team Name */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              id="TeamName"
              placeholder="Team Name"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
              {...register("teamName", { required: "Team Name is required" })}
            />
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400">
              <img src={userIcon} alt="team icon" className="size-4" />
            </span>
            {errors.teamName && (
              <p className="text-red-500 mt-2">{errors.teamName.message}</p>
            )}
          </div>
          {/* MC Section */}
          <div className="relative w-full md:w-1/2">
            <select
              id="section"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] appearance-none"
              {...register("mcSection", { required: "MC Section is required" })}
            >
              <option value="it">IT</option>
              <option value="gamedev">Game Dev</option>
              <option value="robotics">Robotics</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400">
              <img src={drop} alt="" className="size-4" />
            </span>
            {errors.mcSection && (
              <p className="text-red-500 mt-2">{errors.mcSection.message}</p>
            )}
          </div>
        </div>
        {/* Did you attend the workshop */}
        <div className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out flex flex-row justify-between items-center radiotext">
          <label htmlFor="">Did you attend the workshop?</label>
          <div className="flex flex-row items-center justify-center gap-2">
            <input
              type="radio"
              id="yes"
              value="yes"
              className="appearance-none size-5 checked:bg-white border-[1.5px] border-[#EBEBEB66]/60 rounded-full transition duration-500 ease-in-out"
              {...register("attended", { required: "Attendance is required" })}
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              value="no"
              className="appearance-none size-5 checked:bg-white border-[1.5px] border-[#EBEBEB66]/60 rounded-full transition duration-500 ease-in-out"
              {...register("attended", { required: "Attendance is required" })}
            />
            <label htmlFor="no">No</label>
          </div>
          {errors.attended && (
            <p className="text-red-500 mt-2">{errors.attended.message}</p>
          )}
        </div>
        {/* Motivation text area */}
        <textarea
          id="motivation"
          className="w-full min-h-20 max-h-32 rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
          placeholder="What is your motivation for participating in this hackathon?"
          {...register("motivation", { required: "Motivation is required" })}
        ></textarea>
        {errors.motivation && (
          <p className="text-red-500 mt-2">{errors.motivation.message}</p>
        )}
        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="group rounded-2xl border-1 border-customBorder shadow-custom text-[#EBEBEB66]/900 px-4 py-2 hover:ring-2 hover:ring-[#EBEBEB66]/900 hover:bg-[#00020E]/60 transition duration-500 ease-in-out flex flex-row gap-2 justify-center items-center text-[#EBEBEB66]/60 text-[20px]"
          >
            Submit
            <img
              src={SubmitArrow}
              alt=""
              className="group-hover:animate-pulse"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
