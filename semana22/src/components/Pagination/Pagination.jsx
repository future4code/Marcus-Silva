import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { StyledPaginateContainer } from "./styled";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/urls";

const Pagination = () => {
    const [items, setItems] = useState([]);

    console.log(items);

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

    const arrows = {
        cursor: "pointer",
    };

    return (
        <StyledPaginateContainer>
            <ReactPaginate
                previousLabel={<GrPrevious style={arrows} />}
                breakLabel="..."
                nextLabel={<GrNext style={arrows} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={15}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="li"
            />
        </StyledPaginateContainer>
    );
};

export default Pagination;
