import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
  return (
      <div className="homepage">
        <div className="row">
            <div class="homepage-container">
              <h1>Welcome to BookWorm</h1>
              <p>
                We offer you a wide range of eBooks to suit your needs. Explore
                our collection and find something that interests you.
              </p>
              {/* <button className="btn btn-secondary">Browse eBooks</button> */}
            </div>
        </div>
      </div>
  );
};

export default HomePage;