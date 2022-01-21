import styled from "styled-components";

export const StyledPaginateContainer = styled.div`
    .pagination {
        background-color: #808080;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding-left: 0;
    }

    .active {
        background-color: #f8f8f8;
    }

    .li {
        background-color: #5979cf;
        cursor: pointer;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1em 1em;
    }
`;
