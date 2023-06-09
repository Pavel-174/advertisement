import React, { FC } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./VerticalCard.css";

interface VerticalCardProps {
    pictures: JSX.Element[] | undefined;
    cardLikeButton: any;
    handleLikeClick: () => void;
    address: string;
    title: string;
    price: number;
    seen: boolean; 
    handleClick: () => void;
}

const VerticalCard: FC<VerticalCardProps> = ({ pictures, cardLikeButton, handleLikeClick, address, title, price, seen, handleClick}) => {

    const cardSeenElementClassName = (
        `photo__seen ${seen ? 'photo__seen_visible' : ''}`
      );

    return(
        
        <li className="photo__box" onClick={handleClick}>
            <AliceCarousel mouseTracking items={pictures} disableButtonsControls={true} />
            <span className={cardSeenElementClassName}>Просмотренно</span>
            <div className="photo__text-box">
                <div className="photo__price-box">
                    <p className="photo__text" id="photo__text">
                        {price} ₽
                    </p>
                    <button 
                        className={cardLikeButton} 
                        type="button" 
                        aria-label="кнопка лайк" 
                        onClick={handleLikeClick}
                    >     
                    </button>
                </div>
                <h2 className="photo__header">{title}</h2>
                <div className="photo__city-box">
                    <span>Город</span>
                    <span>{address}</span>
                </div>
            </div>
        </li>
    )
}

export default VerticalCard;