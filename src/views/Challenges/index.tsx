// import Hollow from '../../assets/challenges/hollow.svg'
// import Ghost from '../../assets/challenges/ghost.svg'
import Down from '../../assets/about-down.png'
import Card from '../Challenges/card.jsx'
import { useState } from 'react'
export default function Challenges() {
  
  const [cards , setCards] = useState([
    {
      id : "I",
      name : "False knight",
      url: "./img/1.jpg",
      color: "bg-red-300"
    },
    {
      "id" : "II",
      "name" : "Hornet",
      url: "./2.jpg"
    },
    {
      "id" : "III",
      "name" : "Mantis Lords",
      url: "./3.jpg"
    },
    {
      "id" : "IV",
      "name" : "Watcher knight",
      url: "./4.jpg"
    },
    {
      "id" : "IV",
      "name" : "Broken Vessel",
      url: "./5.jpg"
    },
    {
      "id" : "IV",
      "name" : "Traitor Lord",
      url: "./6.jpg"
    },
    {
      "id" : "IV",
      "name" : "king grimm",
      url: "./7.jpg"
    },
    {
      "id" : "IV",
      "name" : "Hollow knight",
      url: "./8.jpg"
    },
    {
      "id" : "IV",
      "name" : "The radiance",
      url: "./9.jpg"
    },
  
  ])

  return (
    <div className=' p-5 min-h-[100vh] flex flex-col items-center gap-10 '>
      <div className=' flex items-center flex-col'>
        <h1 className=' text-xl font-font'>Challenges</h1>
        <img src={Down} className=' w-64' />
      </div>
      <div className=' grid gap-12 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-16'>
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
  );
}
