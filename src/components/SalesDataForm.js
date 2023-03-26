import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSalesData, addProduct } from '../redux/salesDataSlice';

const SalesDataForm = () => {
  const dispatch = useDispatch();
  const salesData = useSelector((state) => state);
  const [product, setProduct] = useState('');
  const [sales, setSales] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProduct = salesData.find((item) => item.product === product);

    if (existingProduct) {
      dispatch(updateSalesData({product, sales: Number(sales)}));
    } else {
      dispatch(addProduct({product, sales: Number(sales)}));
    }

    setProduct('');
    setSales('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sales"
        value={sales}
        onChange={(e) => setSales(e.target.value)}
      />
      <button type="submit">Add/Update Sales Data</button>
    </form>
  );
};

export default SalesDataForm;
