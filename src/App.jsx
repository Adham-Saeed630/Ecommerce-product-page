import { useSelector } from 'react-redux';

import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Body from './components/body.jsx';
import LightBox from './components/LightBox.jsx';


function App(){

  const isOpen = useSelector( state => state.lightbox.isOpen)

  return (
    <BrowserRouter>
      <div className="relative flex flex-col min-h-screen">
        {isOpen && <LightBox />}
        <Nav />
        <Routes>
          <Route path="/Ecommerce-product-page/" element={<Body />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;