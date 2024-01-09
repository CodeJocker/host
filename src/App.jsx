import Count from "./components/usestate/add";
import Change from "./components/usestate/string";

function App() {
  return (
    <>
   <div className="all">
    <div className="usestate">
      <div className="head">
        <h1 className="text-4xl text-center font-bold font-serif py-5 shadow-xl">
          This is the usestate hook section
        </h1>
      </div>
    <section id="add" className=" -translate-x-[100px] px-5">
    <Count />
    </section>

    <section id="space" className="max-w-full h-1/4 bg-slate-500"></section>

    <section id="string" className="-ml-28 px-5">
      <Change />
    </section>
    </div>
   </div>
    </>
  )
}

export default App
