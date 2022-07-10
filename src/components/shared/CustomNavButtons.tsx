import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentPage, selectCurrentPage, getImages } from "../../features/imagesView/imagesViewSlice";

interface IProps {
}

export function CustomNavButtons(props: IProps) {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(selectCurrentPage);

    const handlePrevious = (e: any) => {
        if (currentPage !== 1) {
            dispatch(setCurrentPage(currentPage - 1));
            dispatch(getImages());
        }
    }

    const handleNext = (e: any) => {
        //TODO: Add handling max items
        dispatch(setCurrentPage(currentPage + 1));
        dispatch(getImages());
    }

    return (
        <div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}