import { useNavigate } from "react-router-dom"

function Card ({item})
{
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => {
            navigate(`/detail/${item.id}`);
        }}>
            <div>
               <img src={`${item.thumbnail}`} alt="thumbnail" className="card-image"/>
            </div>

            <div className = "card-text">
                <div className="card-title">
                    {item.title}
                </div>

                <div className="payment">
                    <div className="price">
                        ${item.price}
                    </div>

                    <div className="discount">
                        <div className="discount-text">
                            {item.discountPercentage}% Off
                        </div>
                    </div>
                </div>

                <div className="more-data">
                    <div className="rating">
                        <div className="rating-text">
                            {item.rating}
                        </div>

                        <div className="star">
                            <img src="/star.jpg" alt="star" className="star-image"/>
                        </div>
                    </div>

                    <div className="stock">
                        Items Left : {item.stock}
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default Card