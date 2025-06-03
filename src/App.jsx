import { useEffect, useState } from 'react'
import Loading from './components/Loading';
import Footer from './components/Footer';
import './App.css'
import axios from "axios"
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${10}&skip=0`)
      .then((response) => {
        setData(response.data.products);
      })
  }, []);

  return data.length === 0 ? <Loading/> : (
    <>
      <BrowserRouter>
        hi
      </BrowserRouter>

      <Footer />
    </>
  )

}

export default App
