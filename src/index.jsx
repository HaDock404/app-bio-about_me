import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
// remplacement de BrowserRouter par HashRouter pour l'utilisation de github page

import './styles/normalize.css'

import HomePageFR from './pages/HomePage_FR';
import HomePageEN from './pages/HomePage_EN';
import Redirection from './pages/Redirection';
import ErrorPage from './components/ErrorPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Article from './pages/Article';

import { LanguageProvider } from './components/LanguageContext';

import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Redirection />}/>
        <Route path="/Home_FR" element={<HomePageFR />}/>
        <Route path="/Home_EN" element={<HomePageEN />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/article/:articleId" element={<Article />} />
        
        <Route path="/app-bio-about_me/Test" element={<Home />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </LanguageProvider>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();