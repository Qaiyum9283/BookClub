import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import products from './products'
import Product from './components/Product'


function App() {

  //console.log("safat")
  return (
    <Router>
      <Header />
      <main  >
        <Container>
          <Routes>
            <Route exact path='/' element={<HomeScreen/>} exact/>
            <Route path='/product/:id' element={<ProductScreen/>} />
          </Routes>
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
