import React, { useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import '../styles/home.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="FirstSlide"></div>
        <Carousel.Caption>
          <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="SecondSlide"></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ThirdSlide"></div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Home() {
  return (
    <>
      <ControlledCarousel />
      {/* second */}
      <div className="bg-white view-height">
        <hr className="hr-pink"></hr>
        <div className="home-second">
          {/* title */}
          <div className="main-title-before"></div>
          <div className="main-title">
            <h2>Best Hit</h2>
            <h4>熱賣商品</h4>
          </div>
          <div className="main-title-after"></div>
        </div>
        <div>
          <Row xs={1} md={3} className="home-second-width">
            <Col className="home-second-hover">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP1</p>
              </div>
              <div className="home-second-item"></div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
            <Col className="home-second-hover">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP2</p>
              </div>
              <div className="home-second-item"></div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
            <Col className="home-second-hover">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP3</p>
              </div>
              <div className="home-second-item"></div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* third */}
    </>
  );
}

export default Home;
