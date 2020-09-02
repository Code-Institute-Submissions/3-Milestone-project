import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// aditional css styles imported here
import { Container } from '../styles/Welcome';

const Welcome: React.FC = () => {
  return (
    <>
      <Container>
        <div className="card card-body col-sx">
          <h1>Health Clinic</h1>
          <br />
          <p>Database management interface as simple as ever!</p>
          <br />
          <Link to="/patient" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-success btn-lg btn-block">
              Get Started
            </button>
          </Link>
          <Link to="/help" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-danger btn-lg btn-block">
              User Instructions
            </button>
          </Link>
          <div className="col">
            <div className="row" style={{ padding: '10px' }}>
              <a href="https://github.com/diebraga" target="blank">
                <AiFillGithub size={30} />
              </a>
              &nbsp; &nbsp;
              <a href="https://www.instagram.com/diebraga/" target="blank">
                <AiFillInstagram size={30} />
              </a>
              &nbsp; &nbsp;
              <a href="https://www.linkedin.com/in/diebraga/" target="blank">
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Welcome;
