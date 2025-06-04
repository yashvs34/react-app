

function Card ({key, item})
{
    return (
        <div className="card">
            <div>
               { item.title}
            </div>
        </div>
    )
}

export default Card