import React, { FC } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./VerticalCard.css";

interface VerticalCardProps {
    items: JSX.Element[] | undefined;
    cardLikeButton: any;
    handleLikeClick: () => void;
}

const VerticalCard: FC<VerticalCardProps> = ({ items, cardLikeButton, handleLikeClick }) => {

    return(
            <li className="photo__box" id="element-li">
                <AliceCarousel mouseTracking items={items} disableButtonsControls={true} />
                <div className="photo__text-box">
                    <div className="photo__price-box">
                        <p className="photo__text" id="photo__text">
                            0 000 ₽
                        </p>
                        <button 
                            className={cardLikeButton} 
                            type="button" 
                            aria-label="кнопка лайк" 
                            onClick={handleLikeClick}
                        >     
                        </button>
                    </div>
                    <h2 className="photo__header">Название товарной позиции</h2>
                    <div className="photo__city-box">
                        <span>Город</span>
                        <span>00.00.00, 00.00</span>
                    </div>

                </div>
            </li> 
    )
}

export default VerticalCard;