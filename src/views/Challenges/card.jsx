import Down from '../../assets/about-down.png'
export default function Card(props) {
  return(
    <div className=" border-2  relative rounded-sm  h-72">
      <img src={props.url} className=' w-48 h-full  opacity-60 '/>
      <div className=' absolute top-2 left-3 text-2xl font-sedan'>
        {props.id}
      </div>
      <div className={`flex flex-col justify-center items-center absolute ${props.color} w-40 rounded-md bg-opacity-45 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 `}>
        <h1 className=' font-font text-center text-sm'>{props.name}</h1>
        <img src={Down}/>
      </div>
    </div>
  )
}