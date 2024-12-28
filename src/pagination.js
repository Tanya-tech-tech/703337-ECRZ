import cn from "classnames";
import { useState } from "react";


function Pagination({onChangePage, sumPages}) {
  const [activeItem, setActive]= useState(1);
  if(sumPages < activeItem){
    setActive(1);
  }

  const handleListItemClick = (e) => {
    const page = e.target.textContent;
    setActive(Number(page));
    onChangePage(Number(page));
  };

  return (
    <div className="pagination-cover">
      <ul className="pagination">
        {Array.from({length: sumPages}).map((item, index) => 
        <li key={`${index+2}`} className={cn("pagination-item", {'active-item': (index+1) === activeItem})} onClick={handleListItemClick}>{index + 1}</li>
        )}
          
      </ul>
    </div>
  )
}


export default Pagination;


