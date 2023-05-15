import React, { FC } from "react";
import Card from '../Card/Card';
import "./CardList.css";
import StateButtons from '../StateButtons/StateButtons';
import { Item } from "../App/App";

interface CardListProps {
    items: Item[];
    onCardClick: (card: any) => void;
}

const CardList: FC<CardListProps> = ({items, onCardClick}) => {

    const [verticalCard, setVerticalCard] = React.useState(() => {
        const save: any = localStorage.getItem("verticalCard");
        const value = JSON.parse(save);
        return value || false
      });

    function handleHorizontalCardButton () {
        setVerticalCard(false);
    }

    function handleVerticalCardButton () {
        setVerticalCard(true);
    }

    React.useEffect(() => {
        localStorage.setItem("verticalCard", JSON.stringify(verticalCard));
      }, [verticalCard]);

    return(
        <div>
            <StateButtons 
                handleVerticalCardButton={handleVerticalCardButton} 
                handleHorizontalCardButton={handleHorizontalCardButton} 
                verticalCard={verticalCard}
            />
            <section className="photos">
                <ul className={`photos__container ${!verticalCard ? 'photos__container_active' : ''}`}>  
                    {items.map(card => (
                        <Card 
                            verticalCard={verticalCard}     
                            id={card.id} 
                            address={card.address} 
                            title={card.title}
                            price={card.price}
                            seen={card.seen}
                            onCardClick={onCardClick}
                            card={card}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default CardList;
