import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nopage } from './CompPages/Nopage';
import Header from "./CompPages/Navbars/Header";
import Home from "./CompPages/Home/Home";
import Product from "./CompPages/product/Product";
import LanguagePage from "./CompPages/product/LanguagePage";
import EbookShowByCard from "./CompPages/product/EbookShowByCard";
import Music from "./CompPages/product/Music";
import Videos from "./CompPages/product/Videos";
import Feedback from "./Feedback";
import Search from "./CompPages/Navbars/Search";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Account from './CompPages/account/Account';
import Library from './CompPages/library/Library';
import Myshelf from './CompPages/shelf/Myshelf';
import SignIn from './CompPages/signin/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}>
          <Route path = "Header" element = {<Header />}/>
          <Route path = "Home" element = {<Home/>}/>
          <Route path = "Product" element = {<Product />}/>
          <Route path = "SignIn" element = {<SignIn />}/>
          <Route path = "LanguagePage" element = {<LanguagePage />}/>
          <Route path = "EbookShowByCard" element = {<EbookShowByCard />}/>
          <Route path = "Music" element = {<Music />}/>
          <Route path = "Videos" element = {<Videos />}/>
          <Route path = "Aboutus" element = {<Aboutus />}/>
          <Route path = "Contactus" element = {<Contactus />}/>
          <Route path = "Feedback" element = {<Feedback />}/>
          <Route path = "Search" element = {<Search />}/>
          <Route path="Myshelf" element={<Myshelf />} />
          <Route path="Account" element={<Account />} />
          <Route path="Library" element={<Library />} />
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
