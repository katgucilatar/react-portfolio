import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="./assets/googlebooks.png" alt="Google Book Search"/>
          <Carousel.Caption>
            <h3>Google Book Search</h3>
            <p>Google Book Search API created using MERN stack</p>
            <p>Check out the app <a href="https://googlebooks-graphql-api-d84fd01b5591.herokuapp.com/">here</a>!</p>
            <p>Check out the repository <a href="https://github.com/katgucilatar/mern-book-search">here</a>!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./assets/worldwire.png" alt="Worldwire News"/>  
          <Carousel.Caption>
            <h3>Worldwire News</h3>
            <p>News app using MERN stack, World News API, News API, and Mapbox GL</p>
            <p>Check out the app <a href="https://world-wire-news-17cc396433c0.herokuapp.com/">here</a>!</p>
            <p>Check out the repository <a href="https://github.com/katgucilatar/world-wire-news">here</a>!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./assets/readme.png" alt="README Generator"/>
          <Carousel.Caption>
            <h3>README Generator</h3>
            <p>README generator app using Node.JS and NPM Inquirer package</p>
            <p>Check out the repository <a href="https://github.com/katgucilatar/readme-generator">here</a>!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./assets/sqltracker.png" alt="SQL Employee Tracker"/>
          <Carousel.Caption>
            <h3>SQL Employee Tracker</h3>
            <p>Employee tracker app using MySQL and Node.JS</p>
            <p>Check out the repository <a href="https://github.com/katgucilatar/employee-tracker">here</a>!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./assets/jate.png" alt="JATE"/>
          <Carousel.Caption>
            <h3>Just Another Text Editor</h3>
            <p>Text Editor/Note Taker using Webpacks</p>
            <p>Check out the app <a href="https://pwa-text-editor-ja-te-1887c4658bde.herokuapp.com/">here</a>!</p>
            <p>Check out the repository <a href="https://github.com/katgucilatar/pwa-text-editor">here</a>!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./assets/kkij.png" alt="KKIJ Travels"/>
          <Carousel.Caption>
            <h3>KKIJ Travels</h3>
            <p>Travel app using TicketMaster API and GeoApify API</p>
            <p>Check out the repository <a href="https://github.com/ivyreed/KKIJ-Travels">here</a>!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Portfolio;
