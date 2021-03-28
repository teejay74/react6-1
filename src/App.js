import './App.css'
import Form from './components/Form/Form'
import Clock from './components/Clock/Clock'
import { useState } from 'react'
import { nanoid } from 'nanoid'


function App() {
  const [state, setState] = useState({
    name: "",
})
  const [clocks, setClocks] = useState([])

  const change = (e) => {
    setState((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const addClock = () => {
  
    setClocks((prev) => [
      ...prev,
      {
        id: nanoid(),
        city: state.city,
        zone: state.zone,
      },
    ])

    setState(() => ({
      name: '',
    }))
      
  }
  const deleteClock = (id) => {
    setClocks(clocks.filter((o) => o.id !== id))
  }

  return (
    <div className="App">
      <Form onSubmit={addClock} onChange={change} {...state}/>
      {clocks.map((clock) => (
        <Clock {...clock} key={clock.id} id={clock.id} onDelete={deleteClock}></Clock>
      ))}
    </div>
  )
}

export default App