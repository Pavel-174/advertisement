import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Card.css";

function Card() {

    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked)
    }
  
    const cardLikeButtonClassName = (
      `photo__like ${isLiked ? 'photo__like_active' : ''}`
    );

    const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

const items = [
  <img src="https://sportishka.com/uploads/posts/2022-03/1646741068_35-sportishka-com-p-chelovek-na-fone-peizazha-turizm-krasivo-f-57.jpg" alt="" onDragStart={handleDragStart} role="presentation" className="photo__image" />,
  <img src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg" alt="" onDragStart={handleDragStart} role="presentation" className="photo__image" />,
  <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663367198_11-mykaleidoscope-ru-p-novosibirsk-stolitsa-sibiri-pinterest-11.jpg" alt="" onDragStart={handleDragStart} role="presentation" className="photo__image" />,
];

    return(
            <li className="photo__box" id="element-li">
                <AliceCarousel mouseTracking items={items} disableButtonsControls={true} />
                <div className="photo__text-box">
                    <div className="photo__price-box">
                        <p className="photo__text" id="photo__text">
                            0 000 ₽
                        </p>
                        <button 
                            className={cardLikeButtonClassName} 
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

export default Card;
