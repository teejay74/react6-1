export default function Arrow(props) {
  const transform = {
    transform: `translateX(0) translateY(-50%) rotate(${props.deg}deg)`
  }
   return <div style={transform} className={props.class}></div>
}

