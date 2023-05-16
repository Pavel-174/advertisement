/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC } from "react";
import VerticalCard from "../VerticalCard/VerticalCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import { Item } from "../App/App";
import { Link } from "react-router-dom";

interface CardProps {
  verticalCard: boolean;
    id: never;
    address: string;
    title: string;
    price: number;
    seen: boolean;
    onCardClick: any;
    card: Item;
    handleProceed: (event: any) => void;
}

const Card: FC<CardProps> = ({verticalCard, id, address, title, price, seen, onCardClick, card, handleProceed}) => {

  const [isLiked, setIsLiked] = React.useState(false);
  const [likedItems, setLikedItems] = React.useState([]);

  const items = [...likedItems];

  const handleLikeClick = () => {
    !isLiked ? addToList() : deleteFromList();
  }

  const addToList = () => {
    items.push(id);
    setIsLiked(true);
    setLikedItems(items);
    localStorage.setItem("items", JSON.stringify(items));
  }

  const deleteFromList = () => {
    const index = items.indexOf(id);
    index > -1 ? items.splice(index, 1) : ' ';
    setIsLiked(false);
    setLikedItems(items);
    localStorage.setItem("items", JSON.stringify(items));
  }

  const cardLikeButton = (
    `photo__like ${isLiked ? 'photo__like_active' : ''}`
  );

  React.useEffect(() => {
    try {
      const likedItems: any = localStorage.getItem("items");
      setLikedItems(JSON.parse(likedItems));
      likedItems.includes(id) ? setIsLiked(true) : setIsLiked(false);
    } catch (error) {
      window.location.reload();
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [id, items, likedItems]);

  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  const pictures = [
    <Link to={`advertisement/ad/${id}`}>
      <img 
        src="https://sportishka.com/uploads/posts/2022-03/1646741068_35-sportishka-com-p-chelovek-na-fone-peizazha-turizm-krasivo-f-57.jpg" 
        alt="" 
        onDragStart={handleDragStart} 
        role="presentation" 
        className={verticalCard ? "photo__image" : "image__image"} 
      />
    </Link>,
    <Link to={`advertisement/ad/${id}`}>
      <img 
        src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg"     
        alt="" 
        onDragStart={handleDragStart}    
        role="presentation"     
        className={verticalCard ? "photo__image" : "image__image"} 
      />
    </Link>,
    <Link to={`advertisement/ad/${id}`}>
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
        <div key={id}>
        {verticalCard ?         
            <VerticalCard
                pictures={pictures}
                cardLikeButton={cardLikeButton}
                handleLikeClick={handleLikeClick}
                address={address}
                title={title}
                price={price}
                seen={seen}
                handleClick={handleClick}            
            /> :
            <HorizontalCard
                pictures={pictures}
                cardLikeButton={cardLikeButton}
                handleLikeClick={handleLikeClick}
                address={address}
                title={title}
                price={price}
                seen={seen}
                handleClick={handleClick}
            />
        }
        </div>
    )
}

export default Card;
