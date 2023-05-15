import React, { FC } from 'react';

interface AdProps {
    card: any;
}

const Ad: FC<AdProps> = ({card}) => {

  return (
    <div className="Ad">
        <ul>
            <li>
                <img></img>
            </li>
            <li>
                <img></img>
            </li>
            <li>
                <img></img>
            </li>
        </ul>
        <h2>Yfpdfybt</h2>
        <p>Text {card.id}</p>
    </div>
  );
}

export default Ad;

