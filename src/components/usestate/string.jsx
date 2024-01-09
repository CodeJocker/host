import { useState } from "react"

export const Change = () => {
    const [change , setChange] = useState("default")
    const changee = (event) => {
       const value = event.target.value
       setChange(value)
    }
    return(
        <>\
        <div className="head">
            <h1 className="text-center text-3xl font-sans font-bold translate-y-10">
                this is the ochanging event using react usestate hook
            </h1>
        </div>
        <div className="all flex space-x-5 ml-48">

        <div className="ml-[340px] mt-28 ">
            <input type="text" name="" id="" className="w-[300px] py-3 px-3 rounded-md border border-slate-400 outline-none text-md font-mono hover:focus:w-96 duration-300" placeholder="enter string to change ........" onChange={changee} />
        </div>
        <button id="ped" className="font-mono text-xl mt-[110px] w-auto px-16 bg-slate-400 h-[55px] rounded-md hover:bg-blue-600 hover:text-white duration-300">
            {change}
            </button>
        </div>
        </>
    )
}
export default Change;