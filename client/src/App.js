

// Import the Header component with a capitalized name
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import DetailView from './details/DetailView';
import DataProvider from './context/DataProvider';
import Cart from './Components/cart/Cart';
import {Box} from '@mui/material';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style = {{ marginTop: 54}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<DetailView/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
