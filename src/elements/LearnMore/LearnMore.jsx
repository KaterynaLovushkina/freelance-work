import React from 'react'
import elipse from '../../assets/main/elipse.png'
import arrow from '../../assets/main/arrow.png'
import './styles.scss'

export default function LearnMore({text}) {
  return (
    <div className="more">
       <img src={elipse} alt="" className='img-elipse'/>
       <button type='submit'>{text}</button>
       <img src={arrow} alt="" className='img-arrow' />
    </div>
  )
}
