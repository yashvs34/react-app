
function LeftArrow ({pageNumber, setPageNumber})
{
    return (
        <div>
            {pageNumber > 1 ? <img src="/left-arrow.svg" alt="left-arrow" className="img" onClick={() => {
                setPageNumber(pageNumber-1);
            }}/> : <div></div>}            
        </div>
    )
}

export default LeftArrow