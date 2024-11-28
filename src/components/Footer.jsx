import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () =>{ 
    return (
    <section className={`${styles.flexCenter} ${styles.paddingY}
     w-full flex-col`}>

      <div className="w-[86%] flex md:flex-row
       flex-col mb-8 ">
        <div className="flex-1 flex flex-col justify-center">
          <img src={logo} alt="logo"  className="w-[266px]
          h-[72px] object-contain"/>
          <p className=" text-dimWhite sm:text-[18px]
           xs:w-[312px] mt-5 "
          >A new way to make the payments 
            easy, reliable and secure.</p>
        </div>


      <div className="flex flex-[1.5] flex-row 
      justify-between items-start flex-wrap md:mt-0
       mt-10">
        {footerLinks.map((footerlink)=>(
          <div key={footerlink} className="flex flex-col
           ss:my-0 my-4 min-w-[150px]">
            <h4 className="text-white text-[18px]
            font-poppins mb-3 ">{footerlink.title}
            </h4>

            <ul>
              {footerlink.links.map((link)=>(
                <li key={link.name} className={`font-poppins
                font-normal text-[16px] text-dimWhite
                hover:text-secondary cursor-pointer mb-3 `}>
                  {link.name}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
       </div>
      <div className="flex md:flex-row flex-col border-t
      items-center justify-between w-[86%] mt-10 xxs xxs-title
      border-dimWhite">
        <p className=" text-dimWhite sm:text-[18px]
         max-xs:text-[14px] mt-10 max-sm:mb-5 max-xs:text-center">
          Copyright © 2024 HooBank. All 
          Rights Reserved.</p>

        <div className={`${styles.flexCenter}  `}>
          {socialMedia.map((icon)=>(
            <a className="ml-6 sm:mt-10" key={icon.id}  href={icon.link}>
              <img src={icon.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
     </section>
  )
}

export default Footer
