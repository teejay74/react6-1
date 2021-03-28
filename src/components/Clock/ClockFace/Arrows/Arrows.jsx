import React, { useEffect, useState } from 'react'
import Arrow from './Arrow/Arrow'
import arrows from './Arrows.module.css'

const timeToDegree = (time) => time * 6 - 90

export default function Arrows(props) {

  const [time, setTime] = useState(new Date())
  const seconds = time.getSeconds() + time.getMilliseconds() / 1000
  const minutes = time.getMinutes() + time.getSeconds() / 60
  const hours = time.getUTCHours() + Number(props.gmt) + minutes / 60

  useEffect(() => {
     const teak = setTimeout(() => setTime(() => new Date()), 1000 / 60)
    return () => {
      clearTimeout(teak)
    }
  })

  return (
    <div>
      <Arrow class={arrows.ArrowSecond} deg={timeToDegree(seconds)}/>
      <Arrow class={arrows.ArrowMinutes} deg={timeToDegree(minutes)}/>
      <Arrow class={arrows.ArrowHours} deg={timeToDegree(hours) * 5}/>
    </div>
  )
}
