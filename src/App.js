import React from "react";
import {useForm} from "react-hook-form";


function App() {
  const {register , handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>имя</label>
          <input type="text" {...register('name')} placeholder="your name"/>

          <label>фамилия</label>
          <input type="text" {...register('surname')} placeholder='your surname'/>

          <label>отчество</label>
          <input type="text" {...register('fathers-name')} placeholder="your father-name"/>

          <label>год рождения</label>
          <input type="number" {...register('born')} placeholder="your born"/>

          <label>номер телефона</label>
          <input type="tel" {...register('tel')} placeholder="your num"/>

          <label>email</label>
          <input type="text" {...register('email')} placeholder="your email"/>
          
          <label>ваш пол</label>
          <select {...register('gender')}>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
          </select>
          <input type="submit" style={{marginTop:10}}/>

          
      </form>
  )
}

export default App;
