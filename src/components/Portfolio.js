import React from 'react';
import jump from 'jump.js';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='tech'>
        <div className='welcome'><h1>Welcome</h1>
{/* jump function when is clicked it jumps to the div tag that is been passed as an argument of the jump().*/}
          <h2 className='jump'onClick={() => jump('.links')}>Here are some small projects that I have developed</h2>
        </div>
      <div className='links'>
        <div className='memoryGame'>
          <a href="http://playreact.herokuapp.com">Memory Game</a>
          <p><a href="https://github.com/carlacfw/memory-game">GitHub Code</a></p>
        </div>

        <div className='sizzle'>
          <a href="https://sizzzle.herokuapp.com">Sizzle</a>
          <p><a href="https://github.com/SizzleDevelopers/sizzle">GitHub Code</a></p>
        </div>

        <div className='upsetkiwi'>
          <a href=" https://upsetkiwi.herokuapp.com">UpsetKiwi</a>
          <p><a href="https://github.com/carlacfw/upsetkiwi">GitHub Code</a></p>
        </div>

        <div className='calculator'>
          <a href="https://codepen.io/carlacfw/pen/MomqOe">MyCalculator</a>
        </div>
      </div>
      {/*jump(-1000) means negative pixels so it goes up instead of rolling down*/}
        <footer onClick={() => jump(-1000)}>Go Up</footer>
    </div>
    )
  }
}
export default Portfolio
