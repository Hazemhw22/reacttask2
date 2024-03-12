import React, { useState } from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  const changecounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button 
           style={{
            
            display: 'flex', 
            justifyContent: 'center',
             alignItems: 'center',
              height: '10vh',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            
          }}
      className="counter-button" onClick={changecounter}>
        جمال: {count}
      </button>
    </div>
  );
}

export default App;
