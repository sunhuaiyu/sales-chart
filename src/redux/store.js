import { configureStore } from '@reduxjs/toolkit';
import { salesDataReducer } from './salesDataSlice';

export const store = configureStore({
    reducer: salesDataReducer
});


