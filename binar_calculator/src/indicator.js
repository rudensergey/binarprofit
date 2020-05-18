import React from "react";
import "./indicator.css";

export default class Indicator extends React.Component {
    render() {
        return (
            <div className="indincator">
                <p className="indicator__name">{this.props.name + ":"}</p>

                <p className="indicator__result">
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
                    {this.props.result}
                </p>
            </div>
        );
    }
}
