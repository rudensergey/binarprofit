import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./index.css";
import "./sum.css";
import Indicators from "./Indicators";

class Sum extends React.Component {
    constructor(props) {
        super(props);

        this.handleDrag = this.handleDrag.bind(this)
        this.svg = (
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
        );
    }

    handleDrag(e) {
        
        console.log(e)
    }

    render() {
        return (
            <div className="term">
                <div className="term-blocks">
                    <div className="block">
                        <p>{this.svg}100</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}250</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}500</p>
                    </div>

                    <div className="block">
                        <p>{this.svg}1000</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}2500</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}5000</p>
                    </div>

                    <div className="block">
                        <p>{this.svg}10 000</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}20 000</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}35 000</p>
                    </div>

                    <div className="block">
                        <p>{this.svg}50 000</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}75 000</p>
                    </div>
                    <div className="block">
                        <p>{this.svg}100 000</p>
                    </div>
                </div>

                <div className="term__line">
                    <Slider
                        min={0}
                        defaultValue={1}
                        onChange={this.handleDrag}
                        marks={{
                            0: 100,
                            7: 250,
                            15: 500,
                            23: 1000,
                            32: 2500,
                            40.5: 5000,
                            50: 10000,
                            60: 20000,
                            69: 35000,
                            79: 50000,
                            89: 75000,
                            100: 100000,
                        }}
                        step={null}
                    />
                </div>
            </div>
        );
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
