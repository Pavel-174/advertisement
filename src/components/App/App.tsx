import React from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import axios from 'axios'

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

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data.items);
      console.log(response.data.items)
    });
  }, []);

  return (
    <div className="App">
      <CardList items={items}/>
    </div>
  );
}

export default App;
