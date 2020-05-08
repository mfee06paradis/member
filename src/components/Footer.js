import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/navbar.scss';

function Footer() {
  return (
    <>
      <div id="backtotop"></div>
      <footer className="footer navbar-fixed-bottom">
        <hr className="hr-white"></hr>
        <div className="footer-width">
          <Row>
            <Col md={4} className="footer-deco-left"></Col>
            <Col md={4}>
              <Row>
                <Col md={12} className="footer-logo"></Col>
                <Col xs md={4} className="footer-fb"></Col>
                <Col xs md={4} className="footer-ig"></Col>
                <Col xs md={4} className="footer-twitter"></Col>
              </Row>
            </Col>
            <Col md={4} className="footer-deco-right"></Col>
          </Row>
        </div>
      </footer>
    </>
  );
}

export default Footer;
