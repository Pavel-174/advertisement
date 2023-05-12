import React from "react";
import Card from '../Card/Card';
import "./CardList.css";

function CardList() {

    return(
        <section className="photos">
            <ul className="photos__container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ul>
        </section>
    )
}

export default CardList;
