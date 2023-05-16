import React from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import axios from 'axios'
import NoData from '../NoData/NoData';
import { Routes, Route, useNavigate, generatePath } from 'react-router-dom';
import Ad from '../Ad/Ad';

export type Item = {
  id: never;
  about: string;
  address: string;
  price: number;
  seen: boolean;
  title: string;
}

const baseURL = `https://testguru.ru/frontend-test/api/v1/items?size=20`;

function App() {

  const [items, setItems] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [id, setId] = React.useState();
  const navigate = useNavigate();

  const handleProceed = (event: any) => {
    id && navigate(generatePath("/ad/:id", { id }));
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data.items);
    });
  }, []);

  function handleCardClick(card: any) {
    setSelectedCard(card);
    setId(card.id)
  }

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element = { !items || items.length === 0 ? <NoData/> : <CardList items={items} onCardClick={handleCardClick} handleProceed={handleProceed}/>} />
        <Route path="/ad/:id" element={<Ad card={ selectedCard } />}></Route>
        <Route path="*" element={ <NoData /> } /> 
      </Routes>
    </div>
  );
}

export default App;
