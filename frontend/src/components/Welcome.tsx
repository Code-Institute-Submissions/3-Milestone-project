import React from 'react';
import { Link } from 'react-router-dom';
// aditional css styles imported here
import { Container } from '../styles/Welcome';

const Welcome: React.FC = () => {
  return (
    <>
      <Container>
        <div className="card card-body col-sx">
          <h1>Helth Clinic</h1>
          <br />
          <p>Database management interface as simple as ever!</p>
          <br />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-success btn-lg btn-block">
              Get Started
            </button>
          </Link>
          <Link to="/help" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-danger btn-lg btn-block">
              User Instructions
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Welcome;
