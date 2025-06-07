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

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=1&skip=${id-1}`)
          .then((response) => {
            setData(response.data.products[0]);
            console.log(response.data.products[0]);
          })
    }, []);

    return (
        <>
            {!data ? <Loading/> : 
                <div className="detail-card">
                    <img src={`${data.thumbnail}`} alt="thumbnail" />
                    <div>
                        {data.title}
                    </div>
                    <div>
                        {data.description}
                    </div>
                    <div>
                        {data.category}
                    </div>
                    <div>
                        {data.price}
                    </div>
                    <div>
                        {data.discountPercentage}
                    </div>
                    <div>
                        {data.rating}
                    </div>
                    <div>
                        {data.stock}
                    </div>
                    <div>
                        {data.tags.map((item) => {
                            return <>{item}</>
                        })}
                    </div>
                    <div>
                        {data.brand}
                    </div>
                    <div>
                        {data.sku}
                    </div>
                    <div>
                        {data.weight}
                    </div>
                    <div>
                        {data.warrantyInformation}
                    </div>
                    <div>
                        {data.shippingInformation}
                    </div>
                    <div>
                        {data.availabilityStatus}
                    </div>
                </div>
            }
        </>
    )
}

export default CardDetail