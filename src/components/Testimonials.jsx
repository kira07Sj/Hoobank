import { people01,people02 ,people03 } from "../assets"
import styles from "../style"
import FeedbackCard from './FeedbackCard'
import { feedback } from "../constants"

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY}
     ${styles.flexCenter} flex-col relative w-[86%] xxs`}>

      <div className=" absolute z-[0] w-[60%] h-[60%]
       -right-[50%] rounded-full blue__gradient"/>

      <div className="flex w-full flex-wrap justify-between items-center ">
      <h2 className='text-white sm:w-[470px] sm:text-[48px] text-[30px] font-poppins
         sm:leading-[76px] font-semibold  mb-5 '>What people are 
         saying about us</h2>
         <p className=' text-white max-w-[400px] sm:text-[18px]
          sm:leading-[28px] mb-5  '>
         Everything you need to accept card payments 
         and grow your business anywhere on the planet.
         </p>
      </div>

      <div className={`flex flex-wrap sm:justify-start justify-center
         w-full feadback-container relative z-[1]`}>
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card}/>
          ))}
         </div>

    </section>
  )
}

export default Testimonials
