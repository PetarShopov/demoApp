import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getImages, selectImages } from "./imagesViewSlice";
import styled from 'styled-components';
import { CustomImage } from "../../components/shared/CustomImage";

//TODO: Check why media query is not working as expected
const StyledWrapper = styled.div`
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        gap: 0px;
    }
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 5%;
    margin: 40px;
    box-sizing: border-box;
`;

const StyledImageWrapper = styled.div`
    width: 100%;
`;

export function ImagesView() {
    const dispatch = useAppDispatch();
    const images = useAppSelector(selectImages);

    useEffect(() => {
        dispatch(getImages());
    }, []);

    const renderImage = (image: any) => {
        return (
            <StyledImageWrapper key={image.id}>
                <CustomImage src={image?.webformatURL}></CustomImage>
            </StyledImageWrapper>
        )
    }

    const renderImages = () => {
        return (
            <StyledWrapper>
                {images.map((image: any) => renderImage(image))}
            </StyledWrapper>
        )
    }

    return (
        <div>
            {renderImages()}
        </div>
    )
}