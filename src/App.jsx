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
import Miguel from './LogosPNG/Miguel_self.jpg';
import Runtime from './Runtime.png';
import TheHacks from './TheHacks.png';
import Mars from './Mars.png';


function App() {
  return (
    <div className="App">
      <img src={Miguel} alt="Miguel Floresca-Cravens" className="self"/>
      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </nav>
      <table className='trans'></table>
      <section className="sectionArea">
        <h1 className="about">About Me</h1>
        <div className="shortBio">
          <h2 className="Hello">Hello, my name is Miguel!</h2>
          <h3>I am a full stack developer with background in finance. I have learned many valuable skills that
            I look forward to transitioning in to software development!
          </h3>
        </div>
      </section>
      <br/>
      <br/>
      <section className="sectionArea">
        <h1>Contact</h1>
        <div className="contact">
          <div className="Github">
            <a href="https://github.com/Guelito1">Miguel on Github</a>
            <img src="" alt=""/>
          </div>
          <div className="LinkedIn">
            <a href="https://www.linkedin.com/in/miguelfloresca-cravens/">Miguel on LinkedIn</a>
            <img src="" alt=""/>
          </div>
        </div>
      </section>
      <section className="sectionArea">
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
      </section>
      <section className="sectionArea">
        <h2>Projects</h2>
        <div className="projectsList">
          <div className="project">
              <h3>Title: "Runtime Terror - Drink Dictionary"</h3>
              <img className="projectPic" src={Runtime} alt=""/>
              <p>Info: A drink information website that stores your favorite cocktails. Click here to see the site: <a href="https://desolate-coast-19668.herokuapp.com">Runtime-Terror on Heroku</a> or on Github <a href="https://github.com/Guelito1/project2">here</a></p>
          </div>
          <div className="project">
            <h3>Title: "Mars"</h3>
            <img className="projectPic" src={Mars} alt="Mars Project"/>
            <p>Info: A site built to allow comments by users to interact with Mars rovers using NASA's Mars Rover API.</p>
          </div>
          <div className="project">
            <h3>Title: "The Hacks"</h3>
            <img className="projectPic" src={TheHacks} alt="The Hacks"/>
            <p>Info: A collaborative social site where users can categorize Hacker News stories in a free form format. Click here to see the site: <a href="https://github.com/Guelito1/project2">Github repo</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
