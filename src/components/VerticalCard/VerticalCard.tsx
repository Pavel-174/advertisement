import React, { FC } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./VerticalCard.css";
import { Link } from "react-router-dom";

interface VerticalCardProps {
    pictures: JSX.Element[] | undefined;
    cardLikeButton: any;
    handleLikeClick: () => void;
    id: number;
    address: string;
    title: string;
    price: number;
    seen: boolean; 
    handleClick: () => void;
    handleProceed: (event: any) => void;
}

const VerticalCard: FC<VerticalCardProps> = ({ pictures, cardLikeButton, handleLikeClick, id, address, title, price, seen, handleClick, handleProceed}) => {

    const cardSeenElementClassName = (
        `photo__seen ${seen ? 'photo__seen_visible' : ''}`
      );

    return(
        
        <li className="photo__box" key={id} onClick={handleClick}>
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
                <Link to={`/ad/${id}`} onClick={handleProceed}>
                    <h2 className="photo__header">{title}</h2>
                </Link>
                <div className="photo__city-box">
                    <span>Город</span>
                    <span>{address}</span>
                </div>
            </div>
        </li>
    )
}

export default VerticalCard;