import React from 'react';
import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <div className='container mx-auto justify-center p-12'>
      <h2 className='text-2xl font-extrabold mb-6'>URL Shortener</h2>
      <Form />
    </div>
  );
}

export default App;
