import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

import baseApi from './api/baseApi';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        user: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
