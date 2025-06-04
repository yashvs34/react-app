import { useEffect, useState } from 'react'
import Loading from './components/Loading';
import Footer from './components/Footer';
import Card from './components/Card';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
import './App.css'
import axios from "axios"

function App() {
  
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${9}&skip=${9 * (pageNumber - 1)}`)
      .then((response) => {
        setData(response.data.products);
        console.log(response.data.products);
      })
  }, [pageNumber]);

  return data.length === 0 ? <Loading/> : (
    <>
      <div className='app'>
        <div className='card-container'>
          {data.map((item, index) => {
            return <Card key = {index} item = {item} />
          })}
        </div>

          <div className='next'>
            <LeftArrow pageNumber = {pageNumber} setPageNumber = {setPageNumber} />
            <div className='page-number'>{pageNumber}</div>
            <RightArrow pageNumber = {pageNumber} setPageNumber = {setPageNumber} length = {data.length} />
          </div>

      </div>

      <Footer />
    </>
  )

}

export default App
