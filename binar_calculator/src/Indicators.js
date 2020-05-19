import React from "react";
import "./indicators.css";
import Indicator from "./Indicator";

const results = {
    100: {
        first: 100,
        second: 1.02,
        third: 0.02,
        fourth: 1.03,
        fifth: 200,
        sixth: 5,
        seventh: 3,
        eight: 0,
        nineth: 0,
        tenth: 208,
    },
    250: {
        first: 250,
        second: 1.02,
        third: 0.04,
        fourth: 2.065,
        fifth: 200,
        sixth: 5.5,
        seventh: 3.5,
        eight: 0,
        nineth: 0,
        tenth: 530,
    },
    500: {
        first: 500,
        second: 1.02,
        third: 0.06,
        fourth: 5.4,
        fifth: 200,
        sixth: 6,
        seventh: 4,
        eight: 0,
        nineth: 0,
        tenth: 1080,
    },
    1000: {
        first: 1000,
        second: 1.02,
        third: 0.08,
        fourth: 11,
        fifth: 200,
        sixth: 6.5,
        seventh: 4.5,
        eight: 0.5,
        nineth: 0,
        tenth: 2200,
    },
    2500: {
        first: 2500,
        second: 1.02,
        third: 0.1,
        fourth: 28,
        fifth: 200,
        sixth: 7,
        seventh: 5,
        eight: 1,
        nineth: 5600,
    },
    5000: {
        first: 5000,
        second: 1.02,
        third: 0.12,
        fourth: 57,
        fifth: 200,
        sixth: 7.5,
        seventh: 5.5,
        eight: 1.5,
        nineth: 0,
        tenth: 11400,
    },
    10000: {
        first: 10000,
        second: 1.02,
        third: 0.14,
        fourth: 116,
        fifth: 200,
        sixth: 8,
        seventh: 6,
        eight: 1.5,
        nineth: 1,
        tenth: 23200,
    },
    20000: {
        first: 20000,
        second: 1.02,
        third: 0.16,
        fourth: 256,
        fifth: 200,
        sixth: 8.5,
        seventh: 6.5,
        eight: 2,
        nineth: 1,
        tenth: 47200,
    },
    35000: {
        first: 35000,
        second: 1.02,
        third: 0.18,
        fourth: 420,
        fifth: 200,
        sixth: 9,
        seventh: 7,
        eight: 2.5,
        nineth: 1.5,
        tenth: 84000,
    },
    50000: {
        first: 50000,
        second: 1.02,
        third: 0.2,
        fourth: 610,
        fifth: 200,
        sixth: 10,
        seventh: 7.5,
        eight: 3,
        nineth: 2,
        tenth: 122000,
    },
    75000: {
        first: 75000,
        second: 1.02,
        third: 0.22,
        fourth: 930,
        fifth: 200,
        sixth: 11,
        seventh: 8,
        eight: 3.5,
        nineth: 2.5,
        tenth: 186000,
    },
    100000: {
        first: 100000,
        second: 1.02,
        third: 0.25,
        fourth: 1270,
        fifth: 200,
        sixth: 12,
        seventh: 8.5,
        eight: 4,
        nineth: 3,
        tenth: 254000,
    },
};

export default class Indicators extends React.Component {
    render() {
        return (
            <div className="indicators">
                <Indicator
                    name={"Выбранный пакет"}
                    result={results[this.props.value].first}
                    curr={true}
                />
                <Indicator
                    name={"Текущая базовая ставка доходности"}
                    result={results[this.props.value].second + "%"}
                />
                <Indicator
                    name={"Надбавка к базовой ставке доходности"}
                    result={results[this.props.value].third + "%"}
                />
                <Indicator
                    name={"Ежедневное начисление"}
                    result={results[this.props.value].fourth + "*"}
                    curr={true}
                />
                <Indicator
                    name={"Период работы"}
                    result={results[this.props.value].fifth + " Дней"}
                />
                <Indicator
                    name={"Бинарная премия с меньшей ноги"}
                    result={results[this.props.value].sixth + "%"}
                />
                <Indicator
                    name={"Премия за продажи с 1-ой линии"}
                    result={results[this.props.value].seventh + "%"}
                />
                <Indicator
                    name={"Премия за продажи со 2-ой линии"}
                    result={results[this.props.value].eight + "%"}
                />
                <Indicator
                    name={"Премия за продажи с 3-ей линии"}
                    result={results[this.props.value].nineth + "%"}
                />

                <Indicator
                    name={"Итого за весь период вы получите"}
                    result={results[this.props.value].tenth + "*"}
                    final={true}
                    curr={true}
                />
            </div>
        );
    }
}
