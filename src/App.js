import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Contacts from './Contacts';
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";


function App() {

  let ref = React.createRef();
  let refOutput = React.createRef();
  const [output, setOutput] = useState('hello');

  function f1() {
    console.log('Button click')
  }

  function f2(arg) {
    console.log('DBL Button click' + arg)
  }

  function showInput(event) {
    console.log('event target value: ' + event.target.value)
    console.log('ref current value: ' + ref.current.value)
    refOutput.current.innerHTML = ref.current.value;
    setOutput(ref.current.value)

  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <Comp1 />
      <hr />
      <Comp2 />

      <section>
        <h2>Button</h2>
        <button onClick={f1}>Pushes</button>
      </section>

      <section>
        <h2>Double click + mouse move</h2>
        <div className='orange' onDoubleClick={() => f2(4)}></div>
      </section>

      <section>
        <p>Text</p>
        <input type="text" onInput={showInput} ref={ref} defaultValue={'hi'} />
        <p className='output' ref={refOutput}></p>
        <h3>{output}</h3>
      </section>


    </div>
  );
}

export default App;
