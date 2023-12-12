import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import CreateProduct from './Components/User/CreateProduct';
import SingleProduct from './Components/Products/SingleProduct';
import UpdateProduct from './Components/User/UpdateProduct';
import Guest from './Components/User/Guest';
import Laptops from './Pages/Laptops';
import Desktop from './Pages/Desktop';
import Phones from './Pages/Phones';
import PcParts from './Pages/PcParts';
import Monitors from './Pages/Monitors';
import Products from './Components/Home/Products';
import Cart from './Components/Cart/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>

      <Route path='/myAccount' element={<Guest/>}/>

      <Route path='/createProduct' element={<CreateProduct/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      <Route path='/products/update/:id' element={<UpdateProduct/>}/>
      
      <Route path='/products' element={<Products/>}/>

      <Route path='/products/laptops' element={<Laptops/>}/>
      <Route path='/products/Desktop' element={<Desktop/>}/>
      <Route path='/products/Phones' element={<Phones/>}/>
      <Route path='/products/PcParts' element={<PcParts/>}/>
      <Route path='/products/Monitors' element={<Monitors/>}/>

      <Route path='/cart' element={<Cart/>}/>

    </Route>
  )
)


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
