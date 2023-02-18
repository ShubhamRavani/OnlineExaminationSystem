import Image from "next/image";

function Sidebar({ value }) {
  return (
    <div className="inline-block font-semibold rounded-lg w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-blue-100 border border-gray-500 rounded-md">
        <Image
          className="ml-1 mt-1 mb-1 rounded-lg"
          src="/user.svg"
          width={100}
          height={100}
          alt="User Image"
        />
        <div className="text-sm">
          <p>
            Time
            <br /> Left:{" "}
          </p>
          <p className="ml-2"> 02:39:29</p>

          <div className="mt-4 italic">Shubham Ravani</div>
        </div>
      </div>

      <div className="my-2 mt-2 bg-blue-200 border border-gray-500 rounded-md h-[240px]">
        <p className="py-1 pl-2 text-lg text-white bg-blue-400 rounded-t-md">
          Question Pallete
        </p>
        <div className="grid grid-cols-5">
          <button className="py-1 bg-green-500 border border-white">1</button>
          <button className="py-1 bg-red-600 border border-white">2</button>
          <button className="py-1 bg-green-500 border border-white">3</button>
          <button className="py-1 bg-green-500 border border-white">4</button>
          <button className="py-1 bg-red-600 border border-white">5</button>
          <button className="py-1 bg-yellow-400 border border-white">6</button>
          <button className="py-1 bg-green-500 border border-white">7</button>
          <button className="py-1 bg-white border border-white">8</button>
          <button className="py-1 border border-white bg-slate-500">9</button>
          <button className="py-1 border border-white bg-slate-300">10</button>
        </div>
      </div>
      <div className="my-2 mt-2 bg-blue-200 border border-gray-500 rounded-md h-[270px]">
        <p className="py-1 pl-2 text-lg text-white bg-blue-400 rounded-t-md">
          Legend (Click to View)
        </p>
        <div className="grid grid-cols-2">
          <button className="py-1 bg-green-500 border border-white">
            4 Answer
          </button>
          <button className="py-1 bg-red-600 border border-white">
            2 No Answer
          </button>
          <button className="py-1 border border-white bg-slate-500">
            1 Review+Ans
          </button>
          <button className="py-1 bg-yellow-400 border border-white">
            1 Review-Ans
          </button>
          <button className="py-1 border border-white bg-slate-300">
            1 Dump
          </button>
          <button className="py-1 bg-white border border-white">
            1 No Visit
          </button>
          <button className="col-span-2 py-1 bg-blue-500">
            10 All Questions
          </button>
        </div>
        <div className="grid grid-cols-2 gap-1 pt-2 mx-2 mt-2 border-t-2 border-white">
          <button
            className={`py-1   ${value ? value : "bg-blue-500"} rounded-md`}
          >
            Profile
          </button>
          <button
            className={`py-1 ${value ? value : "bg-blue-500"} rounded-md`}
          >
            Instr
          </button>
          <button
            className={`py-1 ${value ? value : "bg-blue-500"} rounded-md`}
          >
            Questions
          </button>
          <button
            className={`py-1 ${value ? value : "bg-blue-500"}  rounded-md`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
