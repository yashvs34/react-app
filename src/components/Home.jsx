import Card from './Card';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function Home ({data, pageNumber, setPageNumber})
{

    return (
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
    )
}

export default Home
