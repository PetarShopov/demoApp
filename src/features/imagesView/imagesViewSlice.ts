import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import ImagesService from '../../services/ImagesService';

export interface ImagesViewState {
    images: any[];
    isImagesLoading: boolean;
    currentPage: number;
    totalImages: number;
    searchedString: string;
}

const initialState: ImagesViewState = {
    images: [],
    isImagesLoading: false,
    currentPage: 1,
    totalImages: 0,
    searchedString: '',
};

export const imagesViewSlice = createSlice({
    name: 'imagesView',
    initialState,
    reducers: {
        setImages: (state, action: PayloadAction<any>) => {
            state.images = action.payload.hits;
            state.totalImages = action.payload.totalHits;
            state.isImagesLoading = false;
        },
        setImagesLoading: (state, action: PayloadAction<boolean>) => {
            state.isImagesLoading = action.payload;
        },
        setSearchedString: (state, action: PayloadAction<string>) => {
            state.searchedString = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setImages, setImagesLoading, setSearchedString, setCurrentPage } = imagesViewSlice.actions;

export const selectImages = (state: RootState) => state.imagesView.images;
export const selectIsImagesLoading = (state: RootState) => state.imagesView.isImagesLoading;
export const selectSearchedString = (state: RootState) => state.imagesView.searchedString;
export const selectCurrentPage = (state: RootState) => state.imagesView.currentPage;

export const getImages = (): AppThunk => async (dispatch, getState) => {
    const currentState = getState();
    const imagesService = new ImagesService();
    dispatch((setImagesLoading(true)));
    const result: any[] = await imagesService.getImages({
        searchedString: currentState.imagesView.searchedString || '',
        currentPage: currentState.imagesView.currentPage || 1,
    });
    dispatch((setImages(result)));
};

export default imagesViewSlice.reducer;
