import Data from "../Data/Data"

function Qoutes() {
  return (
    <section className="flex flex-col gap-5 justify-center m-5 md:m-10 lg:m-20">
      {Data.map((data, index) => (
        <div key={index} className="bg-slate-900 flex flex-col rounded-lg items-center p-5 md:p-8 lg:p-10">
          <p className="font-mono font-bold text-lg md:text-xl lg:text-2xl text-white text-center">{data.Para}</p>
          <h1 className="pt-4 text-base md:text-lg lg:text-xl font-serif text-slate-50 opacity-80 text-center">- {data.aurthor} -</h1>
        </div>
      ))}
    </section>
  )
}

export default Qoutes
