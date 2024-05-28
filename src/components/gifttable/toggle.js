
import { useState } from "react"
import './toggle.css';
export function Toggle() {

  const [toggle, setToggle] = useState(false);
  return (
    <div className="toggleContainer">
      <span className={`toggleButton ${toggle ? "toggleTrue" : "toggleFalse"}`} onClick={() => {
        setToggle(!toggle);
      }}></span>
    </div>
  )
}
