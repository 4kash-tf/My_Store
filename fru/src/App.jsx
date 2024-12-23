import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Iteam from './components/Iteam';

function App() {
  return (
    <>
      <Navbar /><br /><br />
      <Routes>
        <Route path="/pro" element={<Product />} /> 

        <Route path="/itm" element={<Iteam />} />
      </Routes>
    </>
  );
}

export default App;
