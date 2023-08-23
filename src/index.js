import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nopage } from './CompPages/Nopage';
import Header from "./Header";
import HomePage from "./CompPages/HomePage";
import Product from "./CompPages/Product";
import Cardpg2 from "./CompPages/Cardpg2";
import EbookShowByCard from "./CompPages/EbookShowByCard";
import Music from "./CompPages/Music";
import Videos from "./CompPages/Videos";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}>
          <Route path = "Header" element = {<Header />}/>
          <Route path = "home" element = {<HomePage/>}/>
          <Route path = "HomePage" element = {<HomePage/>}/>
          <Route path = "Product" element = {<Product />}/>
          <Route path = "Cardpg2" element = {<Cardpg2 />}/>
          <Route path = "EbookShowByCard" element = {<EbookShowByCard />}/>
          <Route path = "Music" element = {<Music />}/>
          <Route path = "Videos" element = {<Videos />}/>
          <Route path = "*" element = {<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
