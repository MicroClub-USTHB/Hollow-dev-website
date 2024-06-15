import itLogo from '../../assets/itLogo.svg'
import pattern from "../../assets/registration/pattern.svg"
const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <img src={itLogo} width={72} alt="it section logo"  className=' '/>
        <div className=' flex flex-col items-center justify-center gap-2'>
            <img src={pattern} alt=" overtitle"
            className='w-5/6' />
            <h3 className='text-white font-CinzelDecorative text-3xl font-[600]'>Hollow-Dev Regestration  </h3>
        </div>
    </div>
  )
}

export default Header