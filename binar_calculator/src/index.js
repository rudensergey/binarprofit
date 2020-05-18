import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./indicator.css";
import * as serviceWorker from "./serviceWorker";

class Indicator extends React.Component {
    render() {
        return (
            <div className="indincator">
                <p className="indicator__name">{this.props.name + ":"}</p>
                <svg
                    width="153"
                    height="152"
                    viewBox="0 0 153 152"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25 93.5L0 152H27L76 37.5L126 152H152.5L127.5 93.5H149.5V76H120L116.5 69H149.5V51.5H109L86 0H65.5L43 51.5H4.5V69H35.5L32.5 76H4.5V93.5H25Z"
                        fill="#4999EA"
                    />
                </svg>
                <p className="indicator__result">{this.props.result}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Indicator name={"Выбранный пакет"} result={"200"} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
