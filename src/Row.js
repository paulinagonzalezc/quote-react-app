import React, { useState } from "react";

export default function Row(props) {
  const [ancho, setAncho] = useState("");
  const [largo, setLargo] = useState("");
  const [result, setResult] = useState("Precio");
  function handleSubmit(event) {
    event.preventDefault();
    let resultado = (
      (ancho * 0.001 * largo * props.ribbon.factor) /
      0.65
    ).toFixed(2);
    setResult(resultado);
  }

  function updateAncho(event) {
    setAncho(event.target.value);
  }

  function updateLargo(event) {
    setLargo(event.target.value);
  }

  return (
    <div className="Row" onSubmit={handleSubmit}>
      <form className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <label className={props.ribbon.color}>{props.ribbon.nombre}</label>
        </div>
        <div className="col-3">
          <input
            className="form-control border border-1 shadow-sm p-2 mb-3 bg-white rounded"
            id="ancho"
            placeholder="Ancho (mm)"
            onChange={updateAncho}
          />
        </div>
        <div className="col-3">
          <input
            className="form-control border border-1 shadow-sm p-2 mb-3 bg-white rounded"
            id="largo"
            placeholder="Largo (m)"
            onChange={updateLargo}
          />
        </div>
        <div className="col-1">
          <button
            type="submit"
            className="btn btn-light mb-3 shadow-sm p-2 mb-3 bg-white rounded"
          >
            <span role="img" aria-label="check">
              ☑️
            </span>
          </button>
        </div>
        <div className="col-1">
          <label className="col-form-label" id="answer">
            {result}
          </label>
        </div>
        <div className="col-1"></div>
      </form>
    </div>
  );
}
