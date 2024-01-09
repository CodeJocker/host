import { useState } from "react"

export const Count = () => {
    const [ counter , setCounter ] = useState(0)
    const [show , setShow] = useState(true)
      
      const decrement =() => {
        setCounter(
          counter -1
        )
      }
    return(
        <>
    <div className="all flex">

    <div className="desc px-10 mt-32 text-center translate-x-28 shadow-xl w-1/2">
                <h1 className="font-sans leading-relaxed text-xl ">
                    This is making two actions and render them using the usestate hook making two actions
                </h1>
            </div>

    <div className="middle -ml-28 px-1">
    <button className="border w-48 py-3 text-xl font-sans bg-blue-500 rounded-md text-gray-200 ml-96 mt-20 hover:animate-none hover:bg-blue-600 hover:text-white  duration-200" onClick={() => {
        setCounter(counter +1)
        setShow(!show)
    }}>increment</button>

<div className="para">
  <p className="ml-[460px] mt-20 font-bold text-4xl font-mono">
    {counter}
  </p>
</div>

<button className="border w-48 py-3 text-xl font-sans bg-blue-500 rounded-md text-gray-200 ml-[390px] mt-20 hover:animate-none hover:bg-blue-600 hover:text-white  duration-200" onClick={() => {
    setCounter(counter -1)
    setShow(!show)
}}>decrement</button>
    </div>

    <div className="rigth w-auto ml-[200px] mt-[200px]">
        <div className="text">
          {show &&  <p className="text-4xl font-bold font-mono">this text will show or not</p>}
        </div>
    </div>
    </div>
        </>
    )
}
export default Count;