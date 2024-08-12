import {apple,bill,google} from '../assets'
import styles, {layout} from '../style'

const Billing = () =>  (
    <section id='product' className={`${layout.sectionReverse}
      w-[86%] gap-10`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className='w-full h-full
         relative z-[5]' />
         <div className='absolute z-[3] -left-1/2 top-0
         w-[50%] h-[50%] rounded-full white__gradient' />
         <div className='absolute z-[0] -left-1/2 bottom-0
         w-[50%] h-[50%] rounded-full pink__gradient' />
         
      </div>

      <div className={`${layout.sectionInfo} sm:ml-[4.3rem] `}>
        <h2 className='text-white sm:text-[48px] text-[30px] font-poppins
         sm:leading-[76px] font-semibold  mb-5 '>Easily control your billing 
         & invoicing.</h2>
         <p className=' text-white max-w-[470px] sm:text-[18px]
          sm:leading-[28px]  '>
         Elit enim sed massa etiam. Mauris eu 
         adipiscing ultrices ametodio aenean neque. Fusce 
         ipsum orci rhoncus aliporttitor integer platea placerat.
         </p>

         <div className={`${styles.flexCenter} mt-10 gap-5`}>
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
         </div>
      </div>
    </section>
  )


export default Billing
