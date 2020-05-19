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
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDrag(e) {
        if (e === 0) this.props.handleFunc(100);
        if (e === 7) this.props.handleFunc(250);
        if (e === 15) this.props.handleFunc(500);
        if (e === 23) this.props.handleFunc(1000);
        if (e === 32) this.props.handleFunc(2500);
        if (e === 40.5) this.props.handleFunc(5000);
        if (e === 50) this.props.handleFunc(10000);
        if (e === 60) this.props.handleFunc(20000);
        if (e === 69) this.props.handleFunc(35000);
        if (e === 79) this.props.handleFunc(50000);
        if (e === 89) this.props.handleFunc(75000);
        if (e === 100) this.props.handleFunc(100000);
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
                            0: 0,
                            7: 0,
                            15: 0,
                            23: 0,
                            32: 0,
                            40.5: 0,
                            50: 0,
                            60: 0,
                            69: 0,
                            79: 0,
                            89: 0,
                            100: 0,
                        }}
                        step={null}
                    />
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 100,
        };
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(num) {
        this.setState({ value: num }, () => console.log(this.state));
    }

    render() {
        return (
            <div className="main">
                <h2 className="main__topic">Калькулятор доходности</h2>
                <Sum handleFunc={this.updateValue} />
                <Indicators value={this.state.value} />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
