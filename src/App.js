import React, { useState } from 'react';
import data from './data';

const url = 'https://api.chucknorris.io/jokes/random';
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <section>
      <div>
        <h2 className='title'>LOREM IPSUM GENERATOR</h2>
        <form action='' onSubmit={handleSubmit}>
          <label htmlFor=''>Paraghraphs : </label>
          <input
            type='number'
            name='amount'
            id='number'
            onChange={handleChange}
          />
          <button className='btn'>Generate</button>
        </form>
        <div className='lorem-paraghraphs'>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default App;
