
import "./ordercounter.css"
import { useState } from "react"
import left from "../../assets/angle-circle-left.svg"
import right from "../../assets/angle-circle-right.svg"

export function OrderCounter() {

  const [count, setCount] = useState(0)

  return (
    <div className="orderCounterContainer">
      <img src={left} onClick={() => {
        setCount(count > 0 ? count - 1 : 0)
      }} />
      <span className="ordercounterContainer"><span className="ordercounter">{count}</span><span className="ordercounterSmallText">of 27</span></span>
      <img src={right} onClick={() => {
        setCount(count < 27 ? count + 1 : 27)
      }} />
    </div>
  )
}