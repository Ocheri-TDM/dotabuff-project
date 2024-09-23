import React, { useState } from 'react';
import Test from './Test';

const Test2 = () => {
  const [heroName, setHeroName] = useState('juggernaut');  // Изначально выбрали "juggernaut"

  const handleHeroChange = (e) => {
    setHeroName(e.target.value);
  };

  return (
    <div>
      <h1>Выберите героя для отображения иконки:</h1>
      
      <select value={heroName} onChange={handleHeroChange}>
        <option value="juggernaut">Juggernaut</option>
        <option value="axe">Axe</option>
        <option value="crystalMaiden">Crystal Maiden</option>
        <option value="phantomAssassin">Phantom Assassin</option>
        <option value="invoker">Invoker</option>
        {/* Добавьте другие опции для выбора героев */}
      </select>
      
      <h2>Иконка героя:</h2>
      <Test heroName={heroName} />
    </div>
  );
};

export default Test2;