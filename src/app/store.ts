import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imagesViewReducer from '../features/imagesView/imagesViewSlice';

export const store = configureStore({
  reducer: {
    imagesView: imagesViewReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
