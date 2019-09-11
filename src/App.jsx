import React from 'react';
import './App.css';
import Django from './LogosPNG/Django-logo2.png';
import MongoDB from './LogosPNG/MongoDB3.png';
import CSS from './LogosPNG/css3.png';
import HTML from './LogosPNG/html5.png';
import JS from './LogosPNG/javascript.png';
import NodeJS from './LogosPNG/nodejs.png';
import Postgres from './LogosPNG/postgres.png';
import ReactImg from './LogosPNG/react.png';
import Sequelize from './LogosPNG/sequelize.png';
import TS from './LogosPNG/ts.png';
import Miguel from './LogosPNG/Miguel_self.jpg'


function App() {
  return (
    <div className="App">
      <img src={Miguel} alt="Miguel Floresca-Cravens" className="self"/>
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </nav>
      <table className='trans'>yo</table>
      <div className="shortBio">
        <h2 className="Hello">Hello, my name is Miguel!</h2>
        <h3>I am a full stack developer with background in finance.I have learned many valuable skills that
          I look forward to transitioning in to software development!
        </h3>
      </div>
      <br/>
      <br/>
      <h1>Skills</h1>
      <div className="iconsList">
        <img className="icons" src={ReactImg} alt="React"/>
        <img className="icons" src={MongoDB} alt="MongoDB"/>
        <img className="icons" src={JS} alt="JS"/>
        <img className="icons" src={TS} alt="TypeScript"/>
        <img className="icons" src={CSS} alt="CSS"/>
        <img className="icons" src={HTML} alt="HTML"/>
        <img className="icons" src={Sequelize} alt="Sequelize"/>
        <img className="icons" src={NodeJS} alt="NodeJS"/>
        <img className="icons" src={Postgres} alt="Postgres"/>
        <img className="icons" src={Django} alt="Django"/>
      </div>
      <h2>Projects</h2>
      <h3>TODO: add pictures/gifs of projects, add nice CSS design</h3>
      <div className="projectsList">
        <div className="project">
          <h3>Title: "War!"</h3>
          <img src="" alt=""/>
        </div>
        <div className="project">
          <h3>Title: "Runtime Terror - Drink Dictionary"</h3>
          <img src="" alt=""/>
        </div>
        <div className="project">
          <h3>Title: </h3>
          <img src="" alt=""/>
        </div>
      </div>


    </div>
  );
}

export default App;
