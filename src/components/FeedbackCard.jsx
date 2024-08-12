import {quotes}  from '../assets'


const FeedbackCard = ({content, name, title, img}) => (
    <div className="flex justify-between flex-col
    px-10 py-12 max-xs:px-5 rounded-[20px] max-w-[375px]
    max-h-[395px] md:mr-10 sm:mr-5 mr-0 max-xs:max-w-full feedback-card">
      <img src={quotes} alt="quotes" className='w-[42px]
       h-[27px] object-contain xxs-img' />
       <p className='font-poppins font-normal text-[18px]
        text-white my-10 xxs-para'>{content}</p>
      <div className='flex flex-row gap-4'>
        <img src={img} alt={name} className='w-[48px] h-[48px]
         rounded-full' />
         <div className='flex flex-col '>
          <h4 className='font-poppins text-[20px] text-white
           font-normal leading-[32px] xxs-h'>{name}</h4>
          <p className='font-poppins text-[16px]
           text-dimWhite xxs-title '>{title}</p>
         </div>
      </div>
    </div>
  )


export default FeedbackCard
