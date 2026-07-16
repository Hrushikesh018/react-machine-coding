import { useState } from 'react';
import './index.css'
const ClientSidePagination = () => {
 const[pageNumber,setPageNumber] = useState(0)
  const List = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));
  const totalLength = Math.ceil(List.length / 10);
  const startIndex = pageNumber*10 
  const endIndex = startIndex+10 

  const elements = List.slice(startIndex,endIndex)

  return (
    <div>
      <div className="main-list">
        {elements.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div className="pagination-list">
        {Array.from({ length: totalLength }, (_, index) => (
          <div className='page'  onClick={()=>setPageNumber(index)}>{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default ClientSidePagination;

//start index , end index , items to show ,total length
