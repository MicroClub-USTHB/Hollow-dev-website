import Hollow from '../../assets/challenges/hollow.svg'
// import Ghost from '../../assets/challenges/ghost.svg'
import MC from '../../assets/mcLogo.svg'
import IT from '../../assets/itlogo.svg'
import Arrow from '../../assets/challenges/Vector.svg'
import Down from '../../assets/about-down.png'
import Card from '../Challenges/card.jsx'
import { Link } from 'react-router-dom'
export default function Challenges() {
  
  const cards = [
    {
      id : "I",
      name : "False knight",
      url: "./challenge images/1.jpg",
      color: "bg-black"
    },
    {
      id : "II",
      name : "Hornet",
      url: "./challenge images/2.jpg",
      color: "bg-stone-950"
    },
    {
      id : "III",
      name : "Mantis Lords",
      url: "./challenge images/3.jpg",
      color: "bg-green-950"
    },
    {
      id : "IV",
      name : "Watcher knight",
      url: "./challenge images/4.jpg",
      color: "bg-black"
    },
    {
      id : "V",
      name : "Broken Vessel",
      url: "./challenge images/5.jpg",
      color: "bg-orange-950"
    },
    {
      id : "VI",
      name : "Traitor Lord",
      url: "./challenge images/6.jpg",
      color: "bg-blue-950"
    },
    {
      id : "VII",
      name : "king grimm",
      url: "./challenge images/7.jpg",
      color: "bg-gray-950"
    },
    {
      id : "VIII",
      name : "Hollow knight",
      url: "./challenge images/8.jpg",
      color: "bg-blue-950"
    },
    {
      id : "IX",
      name : "The radiance",
      url: "./challenge images/9.jpg",
      color: "bg-yellow-950"
    },
  
  ]

  return (
    <div className=' p-5 min-h-[100vh] flex flex-col items-center gap-10  '>
      <div className=' flex items-center justify-around w-full'>
        <Link to={'/'}>
          <img src={Arrow} className=' size-6' />
        </Link>
        <div className=' flex items-center flex-col'>
            <h1 className=' text-xl font-font'>Challenges</h1>
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
              />
            )
          })}
        </div>
      </div>
      <div className=' flex gap-5 pb-5 items-center justify-center'>
        <img src={IT} className=' w-12' />
        <img src={MC} className=' w-12' /> 
      </div>
    </div>
  );
}
