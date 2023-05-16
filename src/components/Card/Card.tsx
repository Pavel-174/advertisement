import React, { FC } from "react";
import VerticalCard from "../VerticalCard/VerticalCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import { Item } from "../App/App";
import { Link } from "react-router-dom";

interface CardProps {
  verticalCard: boolean;
    id: number;
    address: string;
    title: string;
    price: number;
    seen: boolean;
    onCardClick: any;
    card: Item;
    handleProceed: (event: any) => void;
}

const Card: FC<CardProps> = ({verticalCard, id, address, title, price, seen, onCardClick, card, handleProceed}) => {

  const [isLiked, setIsLiked] = React.useState(() => {
    const saved: any = localStorage.getItem("isLiked");
    const initialValue = JSON.parse(saved);
    return initialValue || false
  });

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  }

  const cardLikeButton = (
    `photo__like ${isLiked ? 'photo__like_active' : ''}`
  );

  React.useEffect(() => {
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
  }, [isLiked]);

  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  const pictures = [
    <Link to={`/ad/${id}`}>
      <img 
        src="https://sportishka.com/uploads/posts/2022-03/1646741068_35-sportishka-com-p-chelovek-na-fone-peizazha-turizm-krasivo-f-57.jpg" 
        alt="" 
        onDragStart={handleDragStart} 
        role="presentation" 
        className={verticalCard ? "photo__image" : "image__image"} 
      />
    </Link>,
    <Link to={`/ad/${id}`}>
      <img 
        src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg"     
        alt="" 
        onDragStart={handleDragStart}    
        role="presentation"     
        className={verticalCard ? "photo__image" : "image__image"} 
      />
    </Link>,
    <Link to={`/ad/${id}`}>
      <img 
        src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663367198_11-mykaleidoscope-ru-p-novosibirsk-stolitsa-sibiri-pinterest-11.jpg"  
        alt="" 
        onDragStart={handleDragStart} 
        role="presentation" 
        className={verticalCard ? "photo__image" : "image__image"} 
      />
    </Link>,
  ];

  function handleClick() {
    onCardClick(card);
  }

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
                handleClick={handleClick}
                handleProceed={handleProceed}              
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
                handleClick={handleClick}
                handleProceed={handleProceed}
            />
        }
        </div>
    )
}

export default Card;
