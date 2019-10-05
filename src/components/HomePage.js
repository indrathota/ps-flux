import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className='jumbotron'>
      <h1>Indra Mohan Thota</h1>
      <h5>Passionate UI Developer, Adept in JS, Angular developer.</h5>
      <Link to='about' className='btn btn-primary'>
        About
      </Link>
    </div>
  );
}

export default HomePage;
