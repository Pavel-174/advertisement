import React from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import axios from 'axios'
import NoData from '../NoData/NoData';
import { Routes, Route } from 'react-router-dom';
import Ad from '../Ad/Ad';

export type Item = {
  id: number;
  about: string;
  address: string;
  price: number;
  seen: boolean;
  title: string;
}

const baseURL = "https://testguru.ru/frontend-test/api/v1/items";

function App() {

  const [items, setItems] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data.items);
      console.log(response.data.items)
    });
  }, []);

  function handleCardClick(card: any) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={!items || items.length === 0 ? <NoData/> : <CardList items={items} onCardClick={handleCardClick}/>} />
        <Route path="/id" element={<Ad card={selectedCard} />}></Route>
        {/* сделать 404 */}
        <Route path="*" element={<NoData />} /> 
      </Routes>
    </div>
  );
}

export default App;
