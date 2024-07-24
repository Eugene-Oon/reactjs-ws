import { useState } from "react"

const Header = () => {
    // var counter = 0
    const [counter, setCounter] = useState(0) // start from 0, use array


    const Increment = () => {
        setCounter(counter + 1) // update counter live
        // console.log(counter) // inspect element
    }
    return ( 
        <div>   
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <button onClick={() => Increment()}>Increment by one</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease by one</button>
        </div>
    );
}
 
export default Header;