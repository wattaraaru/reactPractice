import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLiading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      setLiading(false);
    };
    fetchPokemonData();
  },[]);
  return (
    <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ):(
      <>
      <h1>ポケモンデータを取得しました</h1>
      </>
    )}
    </div>
  );
}

export default App;
