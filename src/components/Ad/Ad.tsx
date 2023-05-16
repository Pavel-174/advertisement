import React, { FC } from 'react';
import './Ad.css';

interface AdProps {
    card: any;
}

const Ad: FC<AdProps> = ({card}) => {

  return (
    <div className="Ad">
        <ul className='add__image-list'>
            <li>
                <img
                    className='ad__image'
                    src="https://sportishka.com/uploads/posts/2022-03/1646741068_35-sportishka-com-p-chelovek-na-fone-peizazha-turizm-krasivo-f-57.jpg" 
                    alt=""
                />
            </li>
            <li>
                <img 
                    className='ad__image'
                    src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg"     
                    alt="" 
                />
            </li>
            <li>
                <img 
                    className='ad__image'
                    src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663367198_11-mykaleidoscope-ru-p-novosibirsk-stolitsa-sibiri-pinterest-11.jpg"  
                    alt="" 
                />
            </li>
        </ul>
        <h2>Yfpdfybt</h2>
        <p>Text {card.id}</p>
    </div>
  );
}

export default Ad;

