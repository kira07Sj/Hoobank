import styles from "../style"
import Button from "./Button"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

const CTA = () =>  {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return(
   <section className={`${styles.flexCenter} w-[86%] xxs
   max-sm:flex-col sm:justify-between gap-10 
   ${styles.paddingY} ${styles.padding} rounded-[20px]
    box-shadow bg-black-gradient my-[4.2rem]`} data-aos="fade-up">
    <div >
      <h2 className="text-white sm:text-[48px]
      text-[27px] font-poppins font-semibold
      sm:leading-[67px] mb-3 ">Let’s try
       our service now!</h2>
       <p className="text-dimWhite text-[18px] sm:w-[445px]
        sm:leading-[28px]">Everything you need to accept card payments 
        and grow your business anywhere on 
        the planet.</p>
    </div>

    <Button/>
   </section>
  )
}

export default CTA
