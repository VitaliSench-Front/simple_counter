import React, {useState} from 'react';
import './App.css';
import ButtonInc from "./Components/ButtonInc/ButtonInc";
import ButtonRes from "./Components/ButtonRes/ButtonRes";
import Counter from "./Components/Counter";


function App() {

    const [count, setCount] = useState(0);

    const counterInc = () => {
        if (count < lastValue) {
            setCount(count + 1)
        }
    }

    const counterRes = () => {
        setCount(startValue)
    }

    const startValue = 0
    const lastValue = 5



    return (
        <div className="App">
            <div className="counter">
                <Counter count={count}/>
            </div>
            <div className="buttons">
                <ButtonInc name={"Inc"} callback={counterInc} isDisabled={lastValue === count}/>
                <ButtonRes name={"Reset"} callback={counterRes} isDisabled={startValue === count}/>
            </div>
        </div>
    );
}

export default App;
