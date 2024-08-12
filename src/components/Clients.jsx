import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter}
     my-4 w-[95%] `}>
      <div className={`${styles.flexCenter} flex-wrap
       w-full justify-evenly`}>
        {clients.map((client)=>(
          <div key={client.id} className="max-sm:w-[120px] max-sm:h-[43px]
           flex items-center justify-center rounded 
            ">
            <img src={client.logo} alt="clientLogo"
            className="sm:w-[192px] w-[100px] object-cover
            clientHover
            " />
          </div>
        ))}
       </div>
     </section>
  )
}

export default Clients
