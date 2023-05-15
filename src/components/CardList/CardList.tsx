import React, { FC } from "react";
import Card from '../Card/Card';
import "./CardList.css";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import { Item } from "../App/App";

interface CardListProps {
    items: Item[];
}

const CardList: FC<CardListProps> = ({items}) => {

    // const [active, setActive] = React.useState(true);
    const [active, setActive] = React.useState(() => {
        const save: any = localStorage.getItem("active");
        const value = JSON.parse(save);
        return value || false
      });

    function twoCards () {
        setActive(false);
    }

    function fourCards () {
        setActive(true);
    }

    React.useEffect(() => {
        localStorage.setItem("active", JSON.stringify(active));
      }, [active]);

    return(
        <section className="photos">
            <button 
                className={`photos__button ${active ? 'photos__button_active' : ''}`} 
                onClick={fourCards}
            >
                <GridViewOutlinedIcon fontSize="large" />
            </button>
            <button 
                className={`photos__button ${!active ? 'photos__button_active' : ''}`} 
                onClick={twoCards}
            >
                <ViewStreamOutlinedIcon fontSize="large" />
            </button>
            <ul className={`photos__container ${!active ? 'photos__container_active' : ''}`}>  
                {/* {!items || items.length === 0 ? <p>Нет данных.</p> : <Card active={active} />} */}
                {items.map(card => (
                    <Card 
                        active={active}     
                        id={card.id} 
                        address={card.address} 
                        title={card.title}
                        price={card.price}
                    />
                ))}
            </ul>
        </section>
    )
}

export default CardList;
