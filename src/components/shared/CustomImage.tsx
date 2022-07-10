import { useEffect, useState } from "react";
import styled from 'styled-components';

const StyledImageWrap = styled.div`
    position: relative;
`;

const StyledImage = styled.img`
    width: 100%;
    cursor: pointer;
`;

const StyledIcon = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
`;

interface IProps {
    src?: string;
}

const DEFAULT_IMAGE = 'https://icon-library.com/images/no-image-icon/no-image-icon-5.jpg';

export function CustomImage({ src }: IProps) {
    const [currentSource, setCurrentSource] = useState(src);

    useEffect(() => {
        setCurrentSource(src);
    }, [src]);

    const handleOnError = () => {
        setCurrentSource(DEFAULT_IMAGE);
    }

    const handleOnClick = () => {
        //TODO: Use bigger image from endpoint and make it popup
        const element: any = document.querySelector(`[class*='${currentSource}']`);
        if (element?.requestFullscreen) {
            element.requestFullscreen();
        }
    }

    const copyToClipBoard = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(src || '');
    }

    return (
        <StyledImageWrap className={currentSource}>
            <StyledImage
                src={currentSource}
                onError={handleOnError}
                onClick={handleOnClick}
            ></StyledImage>
            <StyledIcon onClick={copyToClipBoard}>X</StyledIcon>
        </StyledImageWrap>
    )
}