import React from 'react';
import Plot from 'react-plotly.js'
import { useSelector } from 'react-redux';

const SalesChart = () => {
    const data = useSelector(state =>
    ([
        {
            x: state.map(d => d.sales),
            y: state.map(d => d.product),
            type: 'bar',
            opacity: 0.8,
            orientation: 'h',
            name: 'sales'
        },
        {
            x: state.map(d => d.sales * 0.4),
            y: state.map(d => d.product),
            mode: 'markers',
            type: 'scatter',
            marker: {size: 12, symbol: 'triangle-right'},
            showlegend: false        
        }
    ]))

    const layout = {
        title: 'Product Sales',
        xaxis: { title: 'Sales' },
        yaxis: { title: 'Product' },
        bargap: 0.15,
    }

    return (
        <Plot
            data={data}
            layout={layout}
            useResideHander
            style={{ width: '100%', height: '100%' }}
        />
    );
};


export default SalesChart;
