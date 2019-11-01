import React from 'react';
import useColorChanger from './hooks/useColorChanger';

const Header = () => {
  const colors = ['#E91E63', '#C2185B', '#F8BBD0', '#03A9F4', '#212121', '#757575', '#00BCD4', '#607D8B']
  
  const [color, changeColor] = useColorChanger(colors, 'black')

  return (
    <header className='hero'>
      <div className='hero-body'>
        <h1 className='title is-1'>Women's World Cup</h1>
        <h2 className='subtitle is-3'>Player Ranking by Searches</h2>
        <button onClick={changeColor} className='button'>Change header color</button>
      </div>
    </header>
  )

}

export default Header