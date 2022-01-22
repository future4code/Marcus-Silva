import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/urls";

const Pagination = () => {
    const [page, setPage] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(`${BASE_URL}/movie/popular/lists${API_KEY}`)
    //         .then((response) => {
    //             setItems(response.data.results);
    //         })
    //         .catch((error) => {
    //             console.error(error.message);
    //         });
    // }, []);

    const handlePageClick = (data) => {
        console.log(data.selected);
    };

    const changePage = ({ selected }) => {
        setPage(selected);
    };

    const arrows = {
        cursor: "pointer",
    };

    return (
        <div aria-label="Page navigation example">
            <ReactPaginate
                previousLabel={"Previous"}
                breakLabel="..."
                nextLabel={"Next"}
                onPageChange={handlePageClick}
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
