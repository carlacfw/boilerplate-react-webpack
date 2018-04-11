import React from 'react';
import jump from 'jump.js';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='tech'>
        <div className='welcome'><h1>Welcome</h1>
          <h2 onClick={() => jump('.links')}>Here are some small projects that I have developed</h2>
        </div>
      <div className='links'>
        <div className='memoryGame'>
          <p>Webpage: </p><a href="http://playreact.herokuapp.com">Memory Game</a>
          <p>Repo: </p><a href="https://github.com/carlacfw/memory-game">GitHub</a>
        </div>

        <div className='sizzle'>
          <p>Webpage: </p><a href="https://sizzzle.herokuapp.com">Sizzle</a>
          <p>Repo: </p><a href="https://github.com/SizzleDevelopers/sizzle">GitHub</a>
        </div>

        <div className='upsetkiwi'>
          <p>Webpage: </p><a href=" https://upsetkiwi.herokuapp.com">UpsetKiwi</a>
          <p>Repo: </p><a href="https://github.com/carlacfw/upsetkiwi">GitHub</a>
        </div>

        <div className='calculator'>
          <p>Webpage: </p><a href="https://codepen.io/carlacfw/pen/MomqOe">MyCalculator</a>
        </div>
      </div>
    </div>
    )
  }
}
export default Portfolio
