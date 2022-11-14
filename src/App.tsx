import React from 'react';
import { Form } from './components/Form';
import { FormTwo } from './components/FormTwo';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/info" element={<FormTwo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;

