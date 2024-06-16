import ItLogo from '../../assets/itlogo.svg'
import Logo from '../../assets/Logo.png'

function FaqItem() {
    return (
            <div className='w-60 h-80 cursor-pointer group perspective'>
                <div className='relative bg-[#07080D] preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg'>
                    <div className='absolute backface-hidden w-full h-full'>
                        <img src={ItLogo} className='absolute inset-0 m-auto items-center'/>
                    </div>
                    <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-lg'>
                        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                            <button
                                className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                                Read more
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
    )
}

export default FaqItem;