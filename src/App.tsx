import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [errormessage, setErrormessage] = useState(false)

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
      setValue(e.currentTarget.value)
      setErrormessage(false)
    } else {
      setErrormessage(true)
    }
  }

  return (
    <div className="content">
      <span className='inputLabel'>Enter American Zip Code</span>
      <input className="inputField" value={value} onChange={handleInput} placeholder="" />
      <span className={errormessage ? 'inputError' : 'inputErrorNone'}>Only numbers are allowed</span>
    </div>
  );
}

export default App;
