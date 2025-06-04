import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function CardDetail ()
{
    let link = window.location.href;
    let index = link.length - 1;

    while (index >= 0 && link[index-1] != '/')
    {
        index--;
    }

    let id = 0;
    
    while (index < link.length)
    {
        id = (id * 10 + (link[index] - '0'));
        index++;
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=1&skip=${id-1}`)
          .then((response) => {
            setData(response.data.products[0]);
          })
    }, []);

    return (
        <>
            {data.length === 0 ? <Loading/> : 
                <div>
                    hi
                </div>
            }
        </>
    )
}

export default CardDetail