import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SalesChart from './components/SalesChart';
import SalesDataForm from './components/SalesDataForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Data Visualization Dashboard</h1>
        <SalesDataForm />
        <SalesChart />
      </div>
    </Provider>
  );
}

export default App;


