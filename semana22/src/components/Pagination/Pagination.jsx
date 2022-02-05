import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPage }) => {
    const changePage = ({ selected }) => {
        setPage(selected);
    };

    return (
        <div aria-label="Page navigation example">
            <ReactPaginate
                previousLabel={"Previous"}
                breakLabel="..."
                nextLabel={"Next"}
                pageCount={25}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={changePage}
                containerClassName="pagination justify-content-center pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
            />
        </div>
    );
};

export default Pagination;
