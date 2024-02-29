import React, { useState } from 'react'
import './Calc.scss'

const Calc = () => {

  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value) => {
    if (value === '=') {
      // try {
        setResult(eval(input))
      // } catch (error) {
      //   setResult('Error')
      // }
    } else if (value === 'C') {
      setInput('')
      setResult('')
    } else {
      setInput((prevInput) => prevInput + value)
    }
  }

  return (
    <div className="calc">
      <input type="text" value={input} disabled />
      <input type="text" value={result} disabled />

      <div className="row" style={{ marginTop: '10px' }}>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>

      <div className="row">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>

      <div className="row">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>

      <div className="row">
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('=')}>=</button>
      </div>

      <div className="row row-last">
        <button onClick={() => handleClick('C')}>Clear</button>
      </div>

    </div>
  )
}

export default Calc