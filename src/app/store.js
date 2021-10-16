import { configureStore } from '@reduxjs/toolkit';
import foldersReducer from '../features/folders/foldersSlice';
import photosReducer from '../features/photos/photosSlice';
import { unsplashApiSlice } from "../features/unsplash/unsplashApiSlice";


export const store = configureStore({
  reducer: {
    folders: foldersReducer,
    photos: photosReducer,
    [unsplashApiSlice.reducerPath]: unsplashApiSlice.reducer
    // unsplashApi: unsplashApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(unsplashApiSlice.middleware);
  }
});

// for TypeScript!
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
