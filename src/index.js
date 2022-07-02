import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Ribbons from "./Ribbons";

function App() {
  let ribbons = [
    {
      nombre: "AWR1",
      factor: 0.069,
      color:
        "col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start",
    },
    {
      nombre: "AWR8",
      factor: 0.085,
      color:
        "col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start",
    },
    {
      nombre: "AWX FH",
      factor: 0.17,
      color:
        "col-form-label p-2 bg-warning bg-opacity-25 border border-warning border rounded-end rounded-start",
    },
    {
      nombre: "APR6",
      factor: 0.25,
      color:
        "col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start",
    },
    {
      nombre: "APR1",
      factor: 0.21,
      color:
        "col-form-label p-2 bg-info bg-opacity-25 border border-info border rounded-end rounded-start",
    },
    {
      nombre: "AXR7",
      factor: 0.42,
      color:
        "col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start",
    },
    {
      nombre: "AXR1",
      factor: 0.33,
      color:
        "col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start",
    },
    {
      nombre: "AXR TX",
      factor: 0.48,
      color:
        "col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start",
    },
    {
      nombre: "AXR E",
      factor: 0.48,
      color:
        "col-form-label p-2 bg-danger bg-opacity-25 border border-danger border rounded-end rounded-start",
    },
  ];
  return (
    <div className="App">
      <h1>Cotizador Ribbons</h1>
      <Ribbons ribbons={ribbons} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
