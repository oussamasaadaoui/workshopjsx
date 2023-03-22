
import './App.css';
import Nav, {Footer}  from './Components/Navbar'
import Home from './Components/Home'
import ProductList from './Components/ProductList';


function App() {
  return (
    <div className="App">
     
      <Nav/>
      <Home/>
      <ProductList/>
      <Footer/>
      
    </div>
  );
}

export default App;
