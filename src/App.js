import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  function increament() {
    setCounter(counter + 1);
  }

  function decreament() {
    setCounter(counter - 1);
  }

  return (
    <div className="container text-center pt-5">
      <br />

      <button className="btn btn-primary mt-3" onClick={increament}>
        Increament
      </button>
      <br />

      <button className="btn btn-primary mt-3" onClick={decreament}>
        Decreament
      </button>
      <br />
      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
