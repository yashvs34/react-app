
function LeftArrow ({pageNumber, setPageNumber})
{
    return (
        <div>
            {pageNumber > 1 ? <img src="/left-arrow.png" alt="left-arrow" onClick={() => {
                setPageNumber(pageNumber-1);
            }}/> : <div></div>}            
        </div>
    )
}

export default LeftArrow