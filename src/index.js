import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nopage } from './CompPages/Nopage';
import Header from "./Navbars/Header";
import HomePage from "./CompPages/HomePage";
import Product from "./CompPages/Product";
import LanguagePage from "./CompPages/LanguagePage";
import EbookShowByCard from "./CompPages/EbookShowByCard";
import Music from "./CompPages/Music";
import Videos from "./CompPages/Videos";
import Feedback from "./CompPages/Feedback";
import Search from "./CompPages/Search";
import Aboutus from "./CompPages/Aboutus";
import Contactus from "./CompPages/Contactus";
import Marathipro from "./CompPages/Marathipro";

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
          <Route path = "LanguagePage" element = {<LanguagePage />}/>
          <Route path = "EbookShowByCard" element = {<EbookShowByCard />}/>
          <Route path = "Music" element = {<Music />}/>
          <Route path = "Videos" element = {<Videos />}/>
          <Route path = "Aboutus" element = {<Aboutus />}/>
          <Route path = "Contactus" element = {<Contactus />}/>
          <Route path = "Feedback" element = {<Feedback />}/>
          <Route path = "Search" element = {<Search />}/>
          <Route path = "Marathipro" element = {<Marathipro />}/>
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
