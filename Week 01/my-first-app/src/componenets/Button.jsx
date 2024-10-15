// function Button({text}) {
//     return (
//       <button className="button">text</button>
//     );
// }

// export default Button;
import React from 'react';

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;