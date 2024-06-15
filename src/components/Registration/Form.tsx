import emailIcon from "../../assets/registration/mail-24.svg";
import userIcon from "../../assets/registration/person-24.svg";
import drop from "../../assets/registration/Drop.svg";
import "../../views/Registration/style.css"
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
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
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
              className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
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
              className=" rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out w-full customText"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400 ">
              <img src={emailIcon} alt="" className="size-4" />
            </span>
          </div>
          {/* MC section */}
          <div className="relative  w-1/2">
            <select
              name="section"
              id="section"
              className=" w-full  rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] appearance-none "
              aria-placeholder="Your MC Section"
            >
              <option value="MC">MC Section</option>
              <option value="AI">AI</option>
              <option value="Web">Web</option>
              <option value="Game">Game</option>
              <option value="Design">Design</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400 ">
              <img src={drop} alt="" className="size-4" />
            </span>
          </div>
        </div>
        {/* did you attend the workshop */}
        <div className="w-full rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-3   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out flex flex-row justify-between items-center radiotext">
          <label htmlFor="" className="">Did you attend the workshop?</label>
          <div>
            <input type="radio" name="attended" id="attended" />
            <label htmlFor="" >yes</label>
            <input type="radio" name="attended" id="attended" className=" w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 aprearance-none "/>
            <label htmlFor="">no</label>
          </div>
          
        </div>
        {/* motivation text area same styli as the input */}
        <textarea
          name="motivation"
          id="motivation"
          className="w-full min-h-20 max-h-32 rounded-2xl border-1 border-customBorder bg-[#00020E]/55 shadow-custom text-[#EBEBEB66]/60 px-4 py-2   focus:outline-none focus:ring-2  focus:border-transparent focus:bg-[#00020E] transition duration-500 ease-in-out customText"
          placeholder="What is your motivation for participating in this hackathon?"
        ></textarea>
        {/* submit button same style asa the input */}
        <div className=" flex justify-end">
            <button className=" rounded-2xl border-1 border-customBorder  shadow-custom text-[#EBEBEB66]/900 px-4 py-2
        hover:ring-2 hover:ring-[#EBEBEB66]/900 hover:bg-[#EBEBEB66]/900  transition duration-500 ease-in-out 
        ">
          Submit
        </button>
        </div>
      </form>
    </>
  );
};

export default Form;
