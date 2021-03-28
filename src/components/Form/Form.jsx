import React from 'react'
import form from './Form.module.css'

export default function Form(props) {
 
    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit()
      
    }

    const onInputChange = (e) => {     
       props.onChange(e);
    }

    return (
    <form className={form.formClock} onSubmit={onSubmit}> 
        <label>Населенный пункт
            <input className={form.inputClock} name="city" onChange={onInputChange} value={props.city || props.name}/>
        </label>
        <label>Временная зона
            <input className={form.inputClock} name="zone" onChange={onInputChange} value={props.zone || props.name} />
        </label>
        <button className={form.buttonClock}>Добавить</button>
    </form>
    )

}

