/* eslint-disable @typescript-eslint/no-unused-expressions */
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

  const [isLiked, setIsLiked] = React.useState(false);
  const [likedItems, setLikedItems] = React.useState([]);

  const items = [...likedItems];

  const handleLikeClick = () => {
    // setIsLiked(!isLiked);
    // const saved: any = localStorage.getItem("isLiked");
    // const initialValue = JSON.parse(saved);
    // return initialValue
    // localStorage.setItem("isLiked", JSON.stringify(isLiked));
    const likedItems: any = localStorage.getItem("isLiked");
    console.log(likedItems);
    !isLiked ? addToList() : deleteFromList();
  }

  const addToList = () => {
    console.log(likedItems, items, 'aye12');
    // const items = [...likedItems];
    console.log(likedItems, items, 'aye13');
    items.push(id);
    console.log(items, 'aye14')
    items.includes(id) ? null :  setLikedItems(items);
    setIsLiked(true);
    console.log(likedItems, 'aye88')
    localStorage.setItem("isLiked", JSON.stringify(items));
  }
  
  const deleteFromList = () => {
    console.log(likedItems, 'aye1');
    // const items = [...likedItems];
    console.log(likedItems, 'aye2'); 
    const index = items.indexOf(id);
    index > -1 ? items.splice(index, 1) : null;
    isLiked ? setLikedItems(items) : null;
    setIsLiked(false);
    localStorage.setItem("isLiked", JSON.stringify(items));
  }

  const cardLikeButton = (
    `photo__like ${isLiked ? 'photo__like_active' : ''}`
  );

  React.useEffect(() => {
    const likedItems: any = localStorage.getItem("isLiked");
    setLikedItems(JSON.parse(likedItems));
    likedItems.includes(id) ? setIsLiked(true) :  setIsLiked(false)
  });

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
            />
        }
        </div>
    )
}

export default Card;
