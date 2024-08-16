import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row 
     flex-wrap sm:mb-20 gap-20  `}>
      <div className="w-[100%] flex max-sm:flex-col items-start flex-row 
      sm:mb-20 max-sm:mb-[3rem] gap-4">
      {stats.map((stat)=>(
        <div key= {stat.id} className={`text-white  ${styles.flexCenter}
          sm:mx-12 my-5`} data-aos="fade-up" data-aos-delay={stat.delay}>
          <h4 className="font-semibold font-poppins
           xs:text-[40px] text-[30px] xs:leading[53px]
            leading-[43px] ">{stat.value}</h4>
          <p className="font font-poppins
           xs:text-[20px] text-[15px] xs:leading[26px]
           leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
      </div>
      
    </section>
  )
}

export default Stats
