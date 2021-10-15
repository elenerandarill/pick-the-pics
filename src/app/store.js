import { configureStore } from '@reduxjs/toolkit';
import foldersReducer from '../features/foldersSlice';

export const store = configureStore({
  reducer: {
    folders: foldersReducer,
  },
});

// for TypeScript!
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;