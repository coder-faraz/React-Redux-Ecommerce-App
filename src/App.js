import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={ <ProductListing /> } />
        <Route exact path="/product/:productId" element={ <ProductDetails /> } />
        <Route> 404 Not Found </Route>
      </Routes>
    </Router>
  );
}

export default App;
