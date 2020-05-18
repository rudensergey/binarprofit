import React from "react";
import "./indicators.css";
import Indicator from "./Indicator";

export default class Indicators extends React.Component {
    render() {
        return (
            <div className="indicators">
                <Indicator
                    name={"Выбранный пакет"}
                    result={"200"}
                    curr={true}
                />
                <Indicator
                    name={"Текущая базовая ставка доходности"}
                    result={"1.02%"}
                />
                <Indicator
                    name={"Надбавка к базовой ставке доходности"}
                    result={"0.02%"}
                />
                <Indicator
                    name={"Ежедневное начисление"}
                    result={"1.04"}
                    curr={true}
                />
                <Indicator name={"Период работы"} result={"200 Дней"} />
                <Indicator
                    name={"Бинарная премия с меньшей ноги"}
                    result={"5%"}
                />
                <Indicator
                    name={"Премия за продажи с 1-ой линии"}
                    result={"3%"}
                />
                <Indicator
                    name={"Премия за продажи со 2-ой линии"}
                    result={"0%"}
                />
                <Indicator
                    name={"Премия за продажи с 3-ей линии"}
                    result={"0%"}
                />

                <Indicator
                    name={"Итого за весь период вы получите:"}
                    result={"200%"}
                    final={true}
                />
            </div>
        );
    }
}
