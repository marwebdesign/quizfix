import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Quiz } from './Quiz';
import { About } from './About';
import { Form } from './Form';
import { Home } from './Home';

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}