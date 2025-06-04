
function RightArrow ({pageNumber, setPageNumber, length})
{
    return (
        <div>
            {length === 9 ? <img src="/right-arrow.svg" alt="right-arrow" className="img" onClick={() => {
                setPageNumber(pageNumber+1);
            }}/> : <div></div>}            
        </div>
    )
}

export default RightArrow