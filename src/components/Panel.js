import { create, all, matrix } from "mathjs";
import React from "react";
import { useState } from "react";

const config = {}
const math = create(all, config)

function Panel() {
  const expression = "3+5*6-2/4"
  const vec1 = math.matrix([1, 2, 3])
  const vec2 = math.matrix([1, 2, 1])
  const mat1 = math.matrix([[1, 2], [3, 4]])
  const mat2 = math.matrix([[5, 6], [1, 2]])
  const mat3 = math.matrix([[5, 6, 4], [3, 1, 2]])
  const mat4 = math.matrix([[5, 6], [1, 2], [4, 3]])
  const [total, setTotal] = useState("0")
  const [dotVec, setDotVec] = useState(0)
  const [dotMat, setDotMat] = useState(0)
  const [matMultiply, setMatMultiply] = useState(0)


  const handleCalc = () => {
    const total = math.compile(expression)
    console.log(total, typeof total)
    const result = total.evaluate()
    console.log(result, typeof result)
    setTotal(result)
  }


  const calculateDotVec = () => {
    const total = math.dot(vec1, vec2)
    console.log(total)
    console.log(typeof total)
    setDotVec(total)
  }

  const calculateDotMat = () => {
    const total = math.dotMultiply(mat1, mat2)
    // console.log(mat1)
    // console.log(total, typeof total)
    // console.log(total._data[0], typeof total._data[0])
    const result = total.toArray()
    console.table(result)
    console.log("Row: ", math.row(total, 1))
    console.log("---")
    setDotMat(result)
  }
  const calculateMatMul = () => {
    // const total = math.multiply(mat4, mat3)
    const total = math.multiply(mat3, mat4)
    // console.log(mat1)
    // console.log(total, typeof total)
    // console.log(total._data[0], typeof total._data[0])
    const result = total.toArray()
    console.table(result)
    console.log("Row: ", math.row(total, 1))
    console.log("---")
    setMatMultiply(result)
  }

  return <div>
    <h1>Calculator</h1>
    {/* <button onClick={handleCalc}>Calculate vectors</button> */}
    <button onClick={calculateDotVec}>Calculate vectors</button>
    <h1>{dotVec}</h1>
    {/* <button onClick={calculateDotMat}>Calculate Matrices</button> */}
    <button onClick={calculateMatMul}>multiply Matrices</button>
    <div>{matMultiply.toString()}</div>
    {/* <div>
      {Object.keys(dotMat).map((row) => {
        console.log(dotMat[row], typeof dotMat[row]);
        return (
          < div >
            {dotMat[row].map((elem) => <div>{elem}</div>)}
          </div>
        )
      })}
    </div> */}
  </div >
}

export default Panel;
