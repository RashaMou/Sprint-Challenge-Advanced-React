import  { useState } from 'react';

const useColorChanger = (colors, initialColor) => {

  const lenColors = colors.length
  const [color, setColor] = useState(initialColor)

  const changeColor = (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * lenColors)
    const pickedColor = colors[index]
    setColor(pickedColor)
    const header = document.querySelector('.hero')
    const title = document.querySelector('.title')
    const subtitle = document.querySelector('.subtitle')
    title.style.color = 'white'
    subtitle.style.color = 'white'
    header.style.backgroundColor = color
  }
  return [color, changeColor]
}  

export default useColorChanger