import React from "react";
import "./style.css";

const MAX_FLOOR = 56;

export default function App() {
  const [floor, setFloor] = React.useState(0)
  const [isReadOnly, setIsReadOnly] = React.useState(true)

  function changeFloor(value) {
    if(value < 0 || value > MAX_FLOOR) {
      return;
    }
    setFloor(value)
  }

  function onChange(e) {
    const { value } = e.target;
    if(value === "") {
      changeFloor(0)
      return;
    }
    changeFloor(parseInt(value, 10))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <button onClick={() => changeFloor(floor + 1)}>Up</button>
      <input type="number" readOnly={isReadOnly} value={floor} onChange={onChange} />
      <button onClick={() => changeFloor(floor - 1)}>Down</button>
      <div>
      <input type="checkbox" checked={isReadOnly} id="read-only-setter" onChange={(e) => setIsReadOnly(e.target.checked)} />
      <label htmlFor="read-only-setter">Read only</label>
      </div>

    </div>
  );
}
