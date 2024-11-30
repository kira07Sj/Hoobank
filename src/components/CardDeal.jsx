import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

const CardDeal = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <section id="products" className={`${layout.section} w-[95%]`}>
      <div className={`${layout.sectionInfo} sm:ml-[4.3rem] `}>
        <h2 className='text-white sm:text-[48px] text-[30px] font-poppins
         sm:leading-[76px] font-semibold  mb-5 '
         data-aos="fade-right" >Find a better card 
         deal in few easy steps.</h2>
         <p className=' text-white max-w-[470px] sm:text-[18px]
          sm:leading-[28px] mb-5' data-aos="fade-right" >
         Arcu tortor, purus in mattis at sed integer 
         faucibus. Aliquet quis aliquet eget mauris 
         tortor.ç Aliquet ultrices ac, ametau.
         </p>

         <div data-aos="fade-right" >
         <Button/>
         </div>
      </div>

      <div className={`${layout.sectionImgReverse}`}
      data-aos="zoom-in">
        <img src={card} alt="bill" className='w-full h-full
         relative z-[5]' />
         
         
      </div>

    </section>
  )
}
export default CardDeal
