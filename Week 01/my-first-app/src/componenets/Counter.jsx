import React, { useState } from 'react';
import Button from './Button';  // Import the Button component

const Counter = () => {
  const [count, setCount] = useState(0);
  const multi = count * 2;
  const divide = count / 2;

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* <h3>Counter: {multi}</h3>
      <h3>Counter: {divide}</h3> */}
      <Button onClick={handleDecrement} label="Decremrrrent" />
      <Button onClick={handleIncrement} label="Incremdddent" />
    </div>
  );
};

export default Counter;

// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// };

// export default Counter;





//without useState
// import React from 'react';
// import Button from './Button'; // Import the Button component

// const Counter = () => {
//   let count = 0;
//   let multi = count * 2;

//   // Function to update the DOM directly
//   const updateCounter = () => {
//     const counterElement = document.getElementById('counter-value');
//     if (counterElement) {
//       counterElement.textContent = `Counter: ${count}`;
//     }
//   };

//   const handleIncrement = () => {
//     count += 1;
//     updateCounter(); // Update the DOM
//   };

//   const handleDecrement = () => {
//     count -= 1;
//     updateCounter(); // Update the DOM
//   };

//   return (
//     <div>
//       <h1 id="counter-value">Counter: {count}</h1>
//       <h1 id="multiply-value">Multiply by two: {multi}</h1>
//       <Button onClick={handleDecrement} label="Decrement" />
//       <Button onClick={handleIncrement} label="Increment" />
//     </div>
//   );
// };

// export default Counter;