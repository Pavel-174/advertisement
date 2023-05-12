import React from "react";
import Card from '../Card/Card';
import "./CardList.css";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';

function CardList() {

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
            <button className={`photos__button ${active ? 'photos__button_active' : ''}`} onClick={fourCards}><GridViewOutlinedIcon fontSize="large"></GridViewOutlinedIcon></button>
            <button className={`photos__button ${!active ? 'photos__button_active' : ''}`} onClick={twoCards}><ViewStreamOutlinedIcon fontSize="large"></ViewStreamOutlinedIcon></button>
            <ul className={`photos__container ${!active ? 'photos__container_active' : ''}`}>
                <Card active={active}/>
                <Card active={active}/>
                <Card active={active}/>
                <Card active={active}/>
                <Card active={active}/>
                <Card active={active}/>
            </ul>
        </section>
    )
}

export default CardList;
