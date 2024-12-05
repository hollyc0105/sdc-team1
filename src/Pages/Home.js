import {useState} from "react";

export function Home() {
    const [val, setVal] = useState("");


    return (
        <div className="App">
            <header className="App-header">
                <h1>Roommate</h1>
                <h2>Finder</h2>
                <div id="scroll">
                    <p className="scroll">Scroll</p>
                    <p style={{margin: 0, padding: 0}}>↓</p>
                </div>

            </header>
            <br/>
            <br/>
            <br/>
            <p>hehe got u</p>
            <p>anyways</p>
            <input placeholder="Enter some text..."
                   value = {val}
                   onChange = {(event) => setVal(event.target.value)}
            />
            <button onClick = {() => alert(val)}>Click Me!</button>
        </div>
    );
}