import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'

const App = () => 
  (

    <div className=' bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-blue-400  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          hero
        </div>
      </div>

      <div className={`bg-blue-400 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
        </div>
      </div>



  </div>
   
  )



export default App
