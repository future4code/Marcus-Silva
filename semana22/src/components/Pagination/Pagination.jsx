import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/urls";

const Pagination = () => {
    const [page, setPage] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(page.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = page.slice(startIndex, endIndex);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movie/popular${API_KEY}`)
            .then((response) => {
                console.log(response.data.results);
                setPage(response.data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handlePageClick = (data) => {
        console.log(data.selected);
    };

    const changePage = ({ selected }) => {
        setPage(selected);
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
                onClick={setCurrentPage}
            />
        </div>
    );
};

export default Pagination;
