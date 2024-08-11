import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6
       bg-blue-gradient font-poppins text-[18px]
       font-medium outline-none
       ${styles} rounded-xl`}>Get Started</button>
  )
}

export default Button
