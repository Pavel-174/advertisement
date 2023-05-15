import React, { FC } from "react";
import "./NoData.css";

const NoData = () => {

    return(
        <div className="no-data">
            <h2 className="no-data__header">ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</h2>
            <p className="no-data__text">Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените характеристики</p>
        </div>
    )
}

export default NoData;