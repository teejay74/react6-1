import ClockFace from './ClockFace/ClockFace'
import clock from './Clock.module.css'

export default function Clock(props) {
    const onDelete = (event) => {
        props.onDelete(event.target.id)
      }
    return (
        <div className={clock.ClockElement}>
            <h3 className={clock.Title}>{props.city}</h3>           
            <ClockFace gmt={props.zone} />            
            <button className={clock.ButtonDel} id={props.id} onClick={onDelete}>
                x
             </button>
        </div>
        
    )
}