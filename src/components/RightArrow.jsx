
function RightArrow ({pageNumber, setPageNumber, length})
{
    return (
        <div>
            {length === 10 ? <img src="/right-arrow.png" alt="right-arrow" onClick={() => {
                setPageNumber(pageNumber+1);
            }}/> : <div></div>}            
        </div>
    )
}

export default RightArrow