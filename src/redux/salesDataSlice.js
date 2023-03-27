import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { product: 'Product A', sales: 50 },
  { product: 'Product B', sales: 75 },
  { product: 'Product C', sales: 100 },
  { product: 'Product D', sales: 120 },
];

const salesDataSlice = createSlice({
  name: 'salesData',
  initialState,
  reducers: {
    updateSalesData: (state, action) => {
      const index = state.findIndex((item) => item.product === action.payload.product);
      if (index !== -1) {
        state[index].sales = action.payload.sales;
      }
    },
    addProduct: (state, action) => {
      state.push({ product: action.payload.product, sales: action.payload.sales });
    },
  },
});

export const { updateSalesData, addProduct } = salesDataSlice.actions;
export const salesDataReducer = salesDataSlice.reducer;
