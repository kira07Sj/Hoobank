import { features } from "../constants"
import styles, {layout} from "../style"
import Button from './Button'
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'


const FeatureCard = ({icon,title,content, index}) =>{
  return(
  <div className={`flex flex-row p-6 rounded-[20px] max-sm:-ml-6
  ${index !== features.length -1 ? "mb-6" : "mb-0"}
     feature-card xxs-carddeals`} data-aos="fade-left">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}
     bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%]
       object-contain " />
    </div>
    <div className=" flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold  text-white text-[18px] 
      leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px]
      leading-[24px] mb-1 
      ">{content}</p>
    </div>
  </div>
)
}

const Business = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <section id="features" className={`${layout.section} view  w-[86%]`}>
      <div className={`${layout.sectionInfo} appearanime`} >
        <h2 className={`${styles.heading2} max-xs:text-[33px]`
         } data-aos="fade-right" data-aos-delay="100">You do the business,
          <br className=" sm:block" /> we’ll handle 
          the money.</h2>
        <p className={`${styles.paragraph} max-w-[570px]
         max-xs:text-[15px] mt-5`} data-aos="fade-right">
          With the right credit 
         card, you can improve your financial life by 
          building credit, earning rewards and saving
           money. But with hundreds of credit cards 
           on the market.</p>
         <div data-aos="fade-right" >
          <Button styles=" mt-10"/ >
          </div>
      </div>

      <div className={`${layout.sectionImg} flex-col
      `} >
        {features.map((item,index)=>(
          <FeatureCard   key={item.id} {...item}
           indexs={index}/>
        ))}
      </div>
       
    </section>
  )
}

export default Business
