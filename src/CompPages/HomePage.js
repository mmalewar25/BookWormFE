import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="row">
          <div className="col-md-6">
            <div class="content-container">
              <h1>Welcome to BookWorm</h1>
              <p>
                We offer you a wide range of eBooks to suit your needs. Explore
                our collection and find something that interests you.
              </p>
              {/* <button className="btn btn-secondary">Browse eBooks</button> */}
            </div>
          </div>
          <div className="col-md-6">
            <br></br>
            <div class="content-container">
              <img
                src="./Images/HomePage.jpeg"
                alt="Homepage Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container text-center">
          <span className="text-muted">
            &copy; {new Date().getFullYear()} BookWorm.  All rights reserved.

          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;