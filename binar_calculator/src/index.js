import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import Indicators from "./Indicators";


class Sum extends React.Component {
	render() {
		return (<div>

		</div>)
	}
}

class Main extends React.Component {
    render() {
        return (
            <div class="main">
				<h2 className="main__topic">Калькулятор доходности</h2>
				<Sum />
                <Indicators />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
