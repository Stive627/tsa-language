import React from 'react'
import Buble from './Bulble'
import './buble.css'

function Bubles() {
  return (
    <div className=' top-4 fixed'>
      <Buble color='white' heigh='28px' width='28px' className={'bubleAnimation1'}/>
      <Buble color='rgba(251, 118, 32, 0.55)' heigh='35px' width='35px' className={'bubleAnimation2'}/>
      <Buble color='#1c398e' heigh='40px' width='40px' className={'bubleAnimation3'}/>
      <Buble color='white' heigh='28px' width='28px' className={'bubleAnimation4'}/>
      <Buble color='rgba(251, 118, 32, 5.25)' heigh='35px' width='35px' className={'bubleAnimation5'}/>
      <Buble color='rgba(3, 112, 62, 5.26)' heigh='40px' width='40px' className={'bubleAnimation6'}/>
    </div>
  )
}

export default Bubles