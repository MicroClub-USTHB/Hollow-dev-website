import emailIcon from "../../assets/registration/mail-24.svg";
import userIcon from "../../assets/registration/person-24.svg";
const Form = () => {
  return (
    <>
      <form className=" p-2 px-16 w-5/6 text-white space-y-4">
        {/* full name + email div */}
        <div className=" flex flex-row items-center justify-center  gap-6 ">
          {/* -----full name ----- */}
          <div className="relative w-1/2">
            <input
              type="text"
              id="UserName"
              placeholder="Full Name"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400 ">
              <img src={userIcon} alt="" className="size-4" />
            </span>
          </div>
          {/* ---email----- */}
          <div className="relative w-1/2">
            <input
              type="text"
              id="UserEmail"
              placeholder="Your Email"
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400 ">
              <img src={emailIcon} alt="" className="size-4" />
            </span>
          </div>
        </div>
        {/* team name + mc section */}
        <div className=" flex flex-row items-center justify-center  gap-6 ">
          {/* ---- team name ------ */}
          <div className="relative  w-1/2">
            <input
              type="text"
              id="UserEmail"
              placeholder="Your Email"
              className=" rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out w-full"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400 ">
              <img src={emailIcon} alt="" className="size-4" />
            </span>
          </div>
          {/* MC section */}
          <select name="section" id="section" className=" w-1/2  rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out ">
            <option value="MC">MC</option>
            <option value="AI">AI</option>
            <option value="Web">Web</option>
            <option value="Game">Game</option>
            <option value="Design">Design</option>
          </select>
        </div>
        {/* did you attend the workshop */}
        <div className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out flex flex-row justify-between items-center ">
          <label htmlFor="">did u attend </label>
          <div><input type="radio" name="attended" id="attended" />
          <label htmlFor="">yes</label>
          <input type="radio" name="attended" id="attended" />
          <label htmlFor="">no</label></div>
        </div>
        {/* motivation text area same styli as the input */}
        <textarea
          name="motivation"
          id="motivation"
          className="w-full min-h-20 max-h-32 rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-2   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out"
          placeholder="What is your motivation for participating in this hackathon?"
        ></textarea>
        {/* submit button same style asa the input */}
        <button className=" rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-2   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
