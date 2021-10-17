import foldersReducer from '../features/folders/foldersSlice'
import photosReducer from '../features/photos/photosSlice'
import searchReducer from "../features/unsplash/unsplashSearchSlice"
import { configureStore } from '@reduxjs/toolkit'
import { unsplashApiSlice } from "../features/api/unsplashApiSlice"


export const store = configureStore({
  reducer: {
    folders: foldersReducer,
    photos: photosReducer,
    search: searchReducer,
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
