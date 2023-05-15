import React, { FC } from "react";
import "./StateButtons.css";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import { Item } from "../App/App";

interface StateButtonsProps {
    verticalCard: boolean;
    handleVerticalCardButton: () => void;
    handleHorizontalCardButton: () => void;
}

const StateButtons: FC<StateButtonsProps> = ({verticalCard, handleVerticalCardButton, handleHorizontalCardButton}) => {

    return(
        <div className="buttons">
            <button 
                className={`buttons__button ${verticalCard ? 'buttons__button_active' : ''}`} 
                onClick={handleVerticalCardButton}
            >
                <GridViewOutlinedIcon fontSize="large" />
            </button>
            <button 
                className={`buttons__button ${!verticalCard ? 'buttons__button_active' : ''}`} 
                onClick={handleHorizontalCardButton}
            >
                <ViewStreamOutlinedIcon fontSize="large" />
            </button>
        </div>
    )
}

export default StateButtons;