import React, { useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import APIS from './Api.jsx';
import MainPage from './MainPage';

export default function App() {
  const [data] = useState(APIS);
  return (
    <section className='main-div'>
      <h1>REACT QUESTIONS</h1>
      {data.map((currElem) => {
        const { id } = currElem;
        return <MainPage key={id} {...currElem} />
      })}
    </section>
  )
}
