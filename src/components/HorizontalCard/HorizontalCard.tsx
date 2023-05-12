import React, { FC } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./HorizontalCard.css";

interface HorizontalCardProps {
    items: JSX.Element[] | undefined;
    cardLikeButton: any;
    handleLikeClick: () => void;
}

const HorizontalCard: FC<HorizontalCardProps> = ({ items, cardLikeButton, handleLikeClick }) => {

    return(
            <li className="image__box" id="element-li">
                <div className="">
                    <AliceCarousel mouseTracking items={items} disableButtonsControls={true} />
                </div>
                <div className="image__text-box">
                    <div className="image__price-box">
                        <p className="image__text" id="image__text">
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
                    <h2 className="image__header">Название товарной позиции</h2>
                    <div className="image__city-box">
                        <span>Город</span>
                        <span>00.00.00, 00.00</span>
                    </div>
                </div>
            </li> 
    )
}

export default HorizontalCard;