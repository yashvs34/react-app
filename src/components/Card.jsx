

function Card ({item})
{
    return (
        <div className="card">
            <div>
               <img src={`${item.images[0]}`} alt="" className="card-image"/>
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