import React, { FC } from "react";
import VerticalCard from "../VerticalCard/VerticalCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";

interface CardProps {
    active: boolean;
}

const Card: FC<CardProps> = ({active}) => {

    const [isLiked, setIsLiked] = React.useState(() => {
        const saved: any = localStorage.getItem("isLiked");
        const initialValue = JSON.parse(saved);
        return initialValue || false
      });

    const handleLikeClick = () => {
        setIsLiked(!isLiked)
    }
  
    const cardLikeButton = (
      `photo__like ${isLiked ? 'photo__like_active' : ''}`
    );

    const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

    React.useEffect(() => {
        localStorage.setItem("isLiked", JSON.stringify(isLiked));
      }, [isLiked]);

const items = [
  <img src="https://sportishka.com/uploads/posts/2022-03/1646741068_35-sportishka-com-p-chelovek-na-fone-peizazha-turizm-krasivo-f-57.jpg" alt="" onDragStart={handleDragStart} role="presentation" className={active ? "photo__image" : "image__image"} />,
  <img src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg" alt="" onDragStart={handleDragStart} role="presentation" className={active ? "photo__image" : "image__image"} />,
  <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663367198_11-mykaleidoscope-ru-p-novosibirsk-stolitsa-sibiri-pinterest-11.jpg" alt="" onDragStart={handleDragStart} role="presentation" className={active ? "photo__image" : "image__image"} />,
];

    return(
        <div>
        {active ?         
            <VerticalCard
                items={items}
                cardLikeButton={cardLikeButton}
                handleLikeClick={handleLikeClick}
            /> :
            <HorizontalCard
                items={items}
                cardLikeButton={cardLikeButton}
                handleLikeClick={handleLikeClick}
            />
        }
        </div>
    )
}

export default Card;
