import React, { FC } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./HorizontalCard.css";

interface HorizontalCardProps {
    pictures: JSX.Element[] | undefined;
    cardLikeButton: any;
    handleLikeClick: () => void;
    address: string;
    title: string;
    price: number;
    seen: boolean;
    handleClick: () => void;
}

const HorizontalCard: FC<HorizontalCardProps> = ({ pictures, cardLikeButton, handleLikeClick, address, title, price, seen, handleClick }) => {

    const cardSeenElementClassName = (
        `image__seen ${seen ? 'image__seen_visible' : ''}`
      );

    return(
        <li className="image__box" onClick={handleClick}>
            <AliceCarousel mouseTracking items={pictures} disableButtonsControls={true} />
            <span className={cardSeenElementClassName}>Просмотренно</span>
            <div className="image__text-box">
                <div className="image__price-box">
                    <p className="image__text" id="image__text">
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
                <h2 className="image__header">{title}</h2>
                <div className="image__city-box">
                    <span>Город</span>
                    <span>{address}</span>
                </div>
            </div>
        </li> 
    )
}

export default HorizontalCard;