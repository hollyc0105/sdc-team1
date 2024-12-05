import {useState} from "react";
import {Link} from "react-router-dom";

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
            <h1 class={"downsize"}>
                Information
            </h1>
            <center>
                <input placeholder="Name"
                   value={val}
                    // stores the input in val
                   onChange={(event) => setVal(event.target.value)}
                />
                <br/>
                {/*value stored in val is displayed on screen in an alert*/}
                <Link to={"/page1"}><button>Next</button></Link>
            </center>

        </div>
    );
}