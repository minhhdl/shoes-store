import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.scss';

const Pagination = ({ pageCount, handlePageClick }) => (
  <ReactPaginate 
    previousLabel={<i className="material-icons">chevron_left</i>}
    nextLabel={<i className="material-icons">chevron_right</i>}
    breakLabel={"..."}
    breakClassName={s["break-me"]}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={s["pagination"]}
    pageLinkClassName={s["page"]}
    previousClassName={s["arrow"]}
    nextClassName={s["arrow"]}
    activeClassName={s["active"]} 
  />
)

export default Pagination;