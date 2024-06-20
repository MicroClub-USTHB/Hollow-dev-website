import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput, } from "../../types/types";
import emailIcon from "../../assets/registration/mail-24.svg";
import userIcon from "../../assets/registration/person-24.svg";
import drop from "../../assets/registration/Drop.svg";
import "../../views/Registration/style.css";
import SubmitArrow from "../../assets/registration/SubmitArrow.svg";
import { useUser } from "../../hooks/useUser";


const Form: React.FC = () => {
  const {user,setUser} = useUser()
  const navigate = useNavigate()

  // Initialize the useForm hook
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
    
  // Define the submit handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/registre',{
        method:'POST',
        credentials:"include",
        body:JSON.stringify(data),
        headers:{
          'content-type':'application/json'
        }
      })
      const result = await response.json()
      console.log(result);
      if(result.status != "failed") {
        setUser({...user,isRegistred:true,successRegistre:true})
        navigate('/')       
      }
    } catch (error) {
      console.log(error);
      
    }
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-2 pb-0 md:px-16 w-5/6 text-white space-y-4 z-10"
      >
        {/* full name + email div */}
        <div className="flex flex-col md:flex-row  justify-center gap-6">
          {/* Full Name */}
          <div className="w-full md:w-1/2 ">
            <div className="relative">
              <input
                type="text"
                id="UserName"
                placeholder="Full Name"
                className={`w-full font-CinzelDecorative rounded-2xl border-1 border-customBorder bg-[#00020E]/70 ${!errors.fullName ? "shadow-custom" : "shadow-customError focus:ring-red-500"} text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText`}
                {...register("fullName", { required: "Full Name is required" })}
              />
              <span className="pointer-events-none absolute w-fit h-fit top-1/2 right-3 -translate-y-1/2 end-0 grid  place-content-center text-gray-400">
                <img src={userIcon} alt="" className="size-4" />
              </span>
            </div>
            {errors.fullName && (
              <p className="text-red-500 font-CinzelDecorative pt-2 pl-3">{errors.fullName.message}</p>
            )}
          </div>
          {/* Email */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                id="UserEmail"
                placeholder="Your Email"
                className={`w-full font-CinzelDecorative rounded-2xl border-1 border-customBorder bg-[#00020E]/70 ${!errors.email ? "shadow-custom" : "shadow-customError focus:ring-red-500"} text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <span className="pointer-events-none absolute w-fit h-fit top-1/2 right-3 -translate-y-1/2 end-0 grid place-content-center text-gray-400">
                <img src={emailIcon} alt="" className="size-4" />
              </span>
            </div>
            {errors.email ? (
              <p className="text-red-500 font-CinzelDecorative pt-2 pl-3">{errors.email.message}</p>
            ):<p></p>}
          </div>
        </div>
        {/* Team Name + MC Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Team Name */}
          <div className=" w-full md:w-1/2">
            <div className="relative">
            <input
              type="text"
              id="TeamName"
              placeholder="Team Name"
              className={`w-full font-CinzelDecorative rounded-2xl border-1 border-customBorder bg-[#00020E]/70 ${!errors.teamName ? "shadow-custom" : "shadow-customError focus:ring-red-500"} text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText`}
              {...register("teamName", { required: "Team Name is required" })}
            />
            <span className="pointer-events-none absolute w-fit h-fit top-1/2 right-3 -translate-y-1/2 end-0 grid place-content-center text-gray-400">
              <img src={userIcon} alt="team icon" className="size-4" />
            </span>
            </div>
            {errors.teamName && (
              <p className="text-red-500 font-CinzelDecorative pt-2 pl-3">{errors.teamName.message}</p>
            )}
          </div>
          {/* MC Section */}
          <div className=" w-full md:w-1/2">
            <div className="relative">
            <select
              id="section"
              className={`w-full font-CinzelDecorative rounded-2xl border-1 border-customBorder bg-[#00020E]/70 ${!errors.mcSection ? "shadow-custom" : "shadow-customError focus:ring-red-500"} text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] appearance-none`}
              {...register("mcSection", { required: "MC Section is required" })}
            >
              <option value="">MC Section</option>
              <option value="IT">IT</option>
              <option value="GAME DEV">GAME DEV</option>
              <option value="ROBOTIC">ROBOTIC</option>
            </select>
            <span className="pointer-events-none absolute w-fit h-fit top-1/2 right-3 -translate-y-1/2  end-0 grid place-content-center text-gray-400">
              <img src={drop} alt="" className="size-4" />
            </span>
            </div>
            {errors.mcSection && (
              <p className="text-red-500 font-CinzelDecorative pt-2 pl-3">{errors.mcSection.message}</p>
            )}
          </div>
        </div>
        {/* Did you attend the workshop */}
        <div>
          <div className={`w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/70 ${!errors.isAttended ? "shadow-custom" : "shadow-customError focus:ring-red-500"} text-[#EBEBEB66]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out flex flex-row justify-between items-center radiotext`}>
            <label htmlFor="" className="font-CinzelDecorative">Did you attend the workshop?</label>
            <div className="flex flex-row items-center justify-center gap-2">
              <input
                type="radio"
                id="yes"
                value="yes"
                className="appearance-none font-CinzelDecorative size-5 checked:bg-white border-[1.5px] border-[#EBEBEB66]/60 rounded-full transition duration-500 ease-in-out"
                {...register("isAttended",{required:"Please make sure to answer the question"})}
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="no"
                value="no"
                className="appearance-none size-5 checked:bg-white border-[1.5px] border-[#EBEBEB66]/60 rounded-full transition duration-500 ease-in-out"
                {...register("isAttended",{required:"Please make sure to answer the question"})}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {errors.isAttended && (
              <p className="text-red-500 font-CinzelDecorative pt-2 pl-3">{errors.isAttended.message}</p>
            ) }
        </div>
        {/* Motivation text area */}
        <div>
        <textarea
          id="motivation"
          className={`w-full font-CinzelDecorative min-h-20 max-h-32 rounded-2xl border-1 border-customBorder bg-[#00020E]/70 ${!errors.motivation ? "shadow-custom" : "shadow-customError focus:ring-red-500"} text-[#EBEBEB66]/60 px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText`}
          placeholder="What is your motivation for participating in this hackathon?"
          {...register("motivation", { required: "Motivation is required" })}
        ></textarea>
        {errors.motivation && (
          <p className="text-red-500 font-CinzelDecorative pt-2 pl-3">{errors.motivation.message}</p>
        )}
        </div>
        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="group rounded-2xl font-CinzelDecorative border-1 border-customBorder shadow-custom text-[#EBEBEB66]/900 px-4 py-2 hover:ring-2 hover:ring-[#EBEBEB66]/900 hover:bg-[#00020E]/60 transition duration-500 ease-in-out flex flex-row gap-2 justify-center items-center text-[#EBEBEB66]/60 text-[20px]"
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
