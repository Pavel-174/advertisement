import React, { FC } from "react";
import VerticalCard from "../VerticalCard/VerticalCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";

interface CardProps {
  verticalCard: boolean;
    id: number;
    address: string;
    title: string;
    price: number;
    seen: boolean;
}

const Card: FC<CardProps> = ({verticalCard, id, address, title, price, seen}) => {

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

  React.useEffect(() => {
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
  }, [isLiked]);

  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  const pictures = [
    <img 
      src="https://sportishka.com/uploads/posts/2022-03/1646741068_35-sportishka-com-p-chelovek-na-fone-peizazha-turizm-krasivo-f-57.jpg" 
      alt="" onDragStart={handleDragStart} 
      role="presentation" 
      className={verticalCard ? "photo__image" : "image__image"} 
    />,
    <img 
      src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg"     
      alt="" onDragStart={handleDragStart}    
      role="presentation"     
      className={verticalCard ? "photo__image" : "image__image"} 
    />,
    <img 
      src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663367198_11-mykaleidoscope-ru-p-novosibirsk-stolitsa-sibiri-pinterest-11.jpg"  
      alt="" 
      onDragStart={handleDragStart} 
      role="presentation" 
      className={verticalCard ? "photo__image" : "image__image"} 
    />,
  ];

    return(
        <div>
        {verticalCard ?         
            <VerticalCard
                pictures={pictures}
                cardLikeButton={cardLikeButton}
                handleLikeClick={handleLikeClick}
                id={id}
                address={address}
                title={title}
                price={price}
                seen={seen}
            /> :
            <HorizontalCard
                pictures={pictures}
                cardLikeButton={cardLikeButton}
                handleLikeClick={handleLikeClick}
                id={id}
                address={address}
                title={title}
                price={price}
                seen={seen}
            />
        }
        </div>
    )
}

export default Card;
