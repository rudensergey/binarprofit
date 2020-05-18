import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import Indicator from "./indicator"

class Main extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "#F8FCFF" }}>
                <Indicator name={"Выбранный пакет"} result={"200"} />
                <Indicator name={"Ежедневное начисление"} result={"200"} />
                <Indicator name={"Премия за продажи с 1-ой линии"} result={"200"} />
                <Indicator name={"Текущая базовая ставка доходности"} result={"200"} />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
