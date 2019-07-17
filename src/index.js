import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NasaGrid from "./components/NasaGrid";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {

    return (
        <div className="App">
            <h1>NASA Photo of the Day</h1>
            <section>
                <b>"So much universe and so little time." -Terry Pratchett</b>
                <NasaGrid limit={10} />
            </section>
        </div>
    )
}


