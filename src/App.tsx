import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

interface Props {}

const App = ({  }: Props) => {
  /* 페이지 접속 시, 구글 번역 팝업창 띄우지 않기 */
  const meta = document.createElement('meta');
  meta.name = 'google';
  meta.content = 'notranslate';
  document.getElementsByTagName('head')[0].appendChild(meta);
  /* ---------------------------------- */
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;