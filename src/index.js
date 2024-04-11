import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Ribbons from './Ribbons';
import Ribbons2 from './Ribbons2';

function App() {
  let ribbons = [
    {
      nombre: 'AWR 1',
      factor: 0.068,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWR 470',
      factor: 0.165,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWR 8',
      factor: 0.091,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWR Colors',
      factor: 0.437,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWX FH',
      factor: 0.177,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'APR 1',
      factor: 0.214,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'APR 6',
      factor: 0.238,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'APX FH+',
      factor: 0.318,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'APR FH Colors',
      factor: 0.681,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'AXR 1',
      factor: 0.33,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'AXR 7+',
      factor: 0.437,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'AXR 8',
      factor: 0.545,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'AXR 9',
      factor: 0.545,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'AXR Colors',
      factor: 0.772,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'ATX 1',
      factor: 0.515,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'AXR E',
      factor: 0.48,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
  ];
  let ribbons2 = [
    {
      nombre: 'AWR 1',
      factor: 0.142,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWR 8',
      factor: 0.125,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWR Colors',
      factor: 0.502,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'AWX FH',
      factor: 0.261,
      color:
        'col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start',
    },
    {
      nombre: 'APR 1',
      factor: 0.246,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'APR 6',
      factor: 0.261,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'APR FH Colors',
      factor: 0.579,
      color:
        'col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start',
    },
    {
      nombre: 'AXR 1',
      factor: 0.364,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
    {
      nombre: 'AXR 7+',
      factor: 0.477,
      color:
        'col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start',
    },
  ];
  return (
    <div className="App">
      <h1>Cotizador Ribbons</h1>
      <Ribbons ribbons={ribbons} />
      <Ribbons2 ribbons2={ribbons2} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
