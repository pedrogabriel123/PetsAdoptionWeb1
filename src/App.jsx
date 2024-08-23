import React from 'react';
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import Services from './components/Services';
import PetsTable from './components/PetsTable';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Carrossel />
      <Services />
      <PetsTable />
      <Footer />
    </div>
  );
}

export default App;
