import { useEffect, useState } from 'react'
import Loading from './components/Loading';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css'
import axios from "axios"
import {Route, Routes} from "react-router-dom"
import CardDetail from './components/CardDetail';

function App() {
  
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${9}&skip=${9 * (pageNumber - 1)}`)
      .then((response) => {
        setData(response.data.products);
      })
  }, [pageNumber]);

  return data.length === 0 ? <Loading/> : (
    <>
      <Routes>
        <Route path= "/" element={<Home data={data} pageNumber={pageNumber} setPageNumber={setPageNumber} />}/>
        <Route path= "/detail/:id" element={<CardDetail/>}/>
      </Routes>
    
      <Footer />
    </>
  )

}

export default App
