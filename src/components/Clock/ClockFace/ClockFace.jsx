import React from 'react'
import Arrows from './Arrows/Arrows'
import clockFace from './ClockFace.module.css'

export default function ClockFace(props) {
  
  return (
    <div className={clockFace.Face}>
        <div className={clockFace.MarkTop}></div>
        <div className={clockFace.MarkBottom}></div>
        <div className={clockFace.MarkRight}></div>
        <div className={clockFace.MarkLeft}></div>  
        <Arrows gmt={props.gmt} /> 
     </div>
  )
}