import React from "react";
import {
    PagNums,
    PagDots,
    PaginationContainer,
    PaginationContent,
    PrevPage,
    NextPage,
} from "./styled";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Pagination = () => {
    return (
        <PaginationContainer>
            <PaginationContent>
                <PrevPage>
                    <FcPrevious />
                </PrevPage>
                <PagNums>1</PagNums>
                <PagNums>2</PagNums>
                <PagDots>...</PagDots>
                <PagNums>4</PagNums>
                <PagNums>5</PagNums>
                <PagDots>...</PagDots>
                <PagNums>7</PagNums>
                <NextPage>
                    <FcNext />
                </NextPage>
            </PaginationContent>
        </PaginationContainer>
    );
};

export default Pagination;
