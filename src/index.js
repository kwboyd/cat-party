import React from "react";
import ReactDOM from "react-dom";

class AppContainer extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h1>Hello</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<AppContainer />, App);