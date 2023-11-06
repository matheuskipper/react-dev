import { useEffect, useState } from 'react'
import './App.css'
import Logo from './img/calc.png'
import Numbers from './img/numbers.png'

function App() {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState('')


  return (
    <>
    <div className='header-imgs'>
     <img className='imgs' src={Logo} alt="Logo calculadora" />
     <img className='imgs'  src={Numbers} alt="" />
    </div>
      <h1>React Calc</h1>
      <div className="card">
        <label>Primeiro número</label>
        <input value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
        <label>Segundo número</label>
        <input value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
          <div className='math-btn'>
            <button onClick={() => setResultado(parseFloat(num1 + num2))}  className='op-btn'>+</button>
            <button onClick={() => setResultado(parseFloat(num1 - num2))}  className='op-btn'>-</button>
            <button onClick={() => setResultado(parseFloat(num1 * num2))}  className='op-btn'>x</button>
            <button onClick={() => setResultado(parseFloat(num1 / num2))}  className='op-btn'>/</button>
          </div>
          <label className='info-resultado'>Resultado: {resultado}</label>
      </div>
    </>
  )
}

export default App
