import Hollow from '../../assets/challenges/hollow.svg'
import Ghost from '../../assets/challenges/ghost.svg'
import MC from '../../assets/mcLogo.svg'
import IT from '../../assets/itlogo.svg'
import Arrow from '../../assets/challenges/Vector.svg'
import Down from '../../assets/about-down.png'
import Card from './card.tsx'
import { Link } from 'react-router-dom'
export default function Challenges() {
  
  const cards = [
    {
      id : "I",
      name : "False knight",
      url: "./challenge images/1.jpg",
      color: "bg-black",
      shadow: "hover:shadow-cyan-950",
      link: "",
      difficulty: "easy"
    },
    {
      id : "II",
      name : "Hornet",
      url: "./challenge images/2.jpg",
      color: "bg-stone-950",
      shadow: "hover:shadow-stone-500",
      link: "",
      difficulty: "easy"
    },
    {
      id : "III",
      name : "Mantis Lords",
      url: "./challenge images/3.jpg",
      color: "bg-green-950",
      shadow: "hover:shadow-green-900",
      link: "",
      difficulty: "mid"
    },
    {
      id : "IV",
      name : "Watcher knight",
      url: "./challenge images/4.jpg",
      color: "bg-black",
      shadow: "hover:shadow-stone-700",
      link: "",
      difficulty: "mid"
    },
    {
      id : "V",
      name : "Broken Vessel",
      url: "./challenge images/5.jpg",
      color: "bg-orange-950",
      shadow: "hover:shadow-orange-900",
      link: "",
      difficulty: "mid"
    },
    {
      id : "VI",
      name : "Traitor Lord",
      url: "./challenge images/6.jpg",
      color: "bg-blue-950",
      shadow: "hover:shadow-blue-900",
      link: "",
      difficulty: "mid"
    },
    {
      id : "VII",
      name : "king grimm",
      url: "./challenge images/7.jpg",
      color: "bg-red-950",
      shadow: "hover:shadow-red-900",
      link: "",
      difficulty: "hard"
    },
    {
      id : "VIII",
      name : "Hollow knight",
      url: "./challenge images/8.jpg",
      color: "bg-gray-900",
      shadow: "hover:shadow-purple-950",
      link: "",
      difficulty: "hard"
    },
    {
      id : "IX",
      name : "The radiance",
      url: "./challenge images/9.jpg",
      color: "bg-yellow-950",
      shadow: "hover:shadow-yellow-900",
      link: "",
      difficulty: "hard"
    },
  
  ]
  return (
    <div className='relative'>
      <img src={Ghost} className=' absolute w-36 right-0 top-20 z-[-1]'/>
      <img src={Ghost} className=' absolute w-36 xl:left-20 left-0 scale-x-[-1] top-1/2 z-[-1]'/>
      <img src={Ghost} className=' absolute w-36 xl:right-96 sm:right-0 md:right-56 right-0 bottom-10 z-[-1]'/>
      <div className=' p-5 min-h-[100vh] flex flex-col items-center gap-10  '>
        <div className=' flex items-center justify-around w-full'>
              <Link to={'/'}>
                <img src={Arrow} className=' size-6' />
              </Link>
            <div className=' flex items-center flex-col'>
                <h1 className=' text-2xl font-font'>Challenges</h1>
                <img src={Down} className=' w-64' />
            </div>
            <div className=' opacity-0'>t</div>
        </div>
          <div>
            <img src={Hollow} className=' w-40' />
            <div className=' grid gap-12 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
              {cards.map((card) => {
                return (
                  <Card 
                  id={card.id}
                  name={card.name}
                  url={card.url}
                  color={card.color}
                  link={card.link}
                  difficulty={card.difficulty}
                  shadow={card.shadow}
                  />
                )
              })}
            </div>
          </div>
            <div className=' flex gap-5 pb-5 items-center justify-center'>
              <img src={IT} className=' w-20' />
              <img src={MC} className=' w-20' /> 
            </div>
      </div>
    </div>
  );
}
