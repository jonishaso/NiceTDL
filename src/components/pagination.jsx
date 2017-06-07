import React from 'react';
import Proptypes from 'prop-types';

const PaginationList = ({ pageTotalNumber, click, pageNow }) => {
  let nextPage = ((pageNow + 1)>=pageTotalNumber)?pageTotalNumber:(pageNow+1);
  let previousPage = ((pageNow-1)<=0)?1:(pageNow-1);
  return (
    <nav className="row">
      <ul className="pagination col-lg-4 offset-lg-5 my-2">
        <li className="page-item" key="Previous">
          <a
            className="page-link"
            children="Previous"
            onClick={() => click(previousPage)}
          />
        </li>
        <li className="page-item" key="currentPage">
          <a
            className="page-link"
            children={pageNow}
          />
        </li>
        <li className="page-item" key="Next">
          <a
            className="page-link"
            children="Next"
            onClick={() => click(nextPage)}
          />
        </li>
      </ul>
    </nav>
  )
}

PaginationList.prototype={
  pageTotalNumber:Proptypes.number.isRequired,
  click:Proptypes.func.isRequired,
  pageNow:Proptypes.number.isRequired, 
}

export default PaginationList;