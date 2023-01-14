
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Component/Counter';

function App() {
  const [counter, setCounter] = useState(0)
  const [isNegative, setIsNegative] = useState(false)

  useEffect(() => {
    console.log(counter)
  }, [counter])
  
  
  return (
    <div className="App">
     <Counter counter={counter} setCounter = {setCounter} isNegative = {isNegative} setIsNegative={setIsNegative}/>
    </div>
  );
}

export default App;
