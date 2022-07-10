import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useAppDispatch } from "../../app/hooks";
import { getImages, setSearchedString, setCurrentPage } from "../../features/imagesView/imagesViewSlice";

interface IProps {
}

export function CustomSearch(props: IProps) {
    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        dispatch(setSearchedString(e.target.value));
    }

    const handleSearch = (e: any) => {
        dispatch(setCurrentPage(1));
        dispatch(getImages());
    }

    return (
        <div>
            <input
                type="search"
                placeholder="Search text"
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}