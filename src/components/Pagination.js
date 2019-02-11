import React from 'react';
import _ from 'lodash';
import '../styles/Pagination.css';
import Left from '../img/left-button.svg';
import Rigth from '../img/right-button.svg';

const Pagination = (props) => {
  const {itemsCount,pageSize,onPageChange,currentPage} = props;
  const pagesCount = Math.ceil(itemsCount/pageSize);
  if(pagesCount === 1) return null;
  const pages = _.range(1,pagesCount + 1);
  const nextPage = currentPage <= pagesCount-1 && currentPage + 1;
  const prevPage = currentPage > 1 && currentPage -1;
  return (
    <div className="pagination">
      {prevPage !== false && <img src={Left} alt="left" onClick={()=>onPageChange(prevPage)}/>}
        <ul>
          {pages.map(page=>(  
            <li key={page} className={page === currentPage ?  "page-active" : "" } onClick={()=>onPageChange(page)}>
              {page}
            </li>
          ))}
        </ul>
      {nextPage !== false && <img src={Rigth} alt="rigth" onClick={()=>onPageChange(nextPage)}/>}
    </div>
  );
};

export default Pagination;