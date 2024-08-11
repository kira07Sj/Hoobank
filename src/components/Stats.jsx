import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row 
     flex-wrap sm:mb-20 gap-20  `}>
      {stats.map((stat)=>(
        <div key= {stat.id} className={`text-white  ${styles.flexCenter}
         `}>
          <h4 className="font-semibold font-poppins
           xs:text-[40px] text-[30px] xs:leading[53px]
            leading-[43px] ">{stat.value}</h4>
          <p className="font font-poppins
           xs:text-[20px] text-[15px] xs:leading[26px]
           leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
      
    </section>
  )
}

export default Stats
