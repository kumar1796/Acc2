import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handlelClick = () => {
    // if (counter === 20) setCounter(0);

    // else setCounter (20);

    console.log("BEFORE UPDATE : ", counter);
    setCounter(20);
    console.log("AFTER UPDATE : ", counter);
  }
  return (
  <div>
    <h1>Counter Value : {counter} </h1>
    <button onClick={handlelClick} >Change Value to 20 </button>
  </div>
  )
}

export default App;