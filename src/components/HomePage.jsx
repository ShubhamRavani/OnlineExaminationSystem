import { Radio } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomePage = ({ setValue, color }) => {
  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 w-10/12 bg-slate-50">
        <Navbar />
      </div> */}
      <div className="fixed bg-white h-[638px]">
        <div className="w-[80%]">
          <div className="flex gap-1 ml-4">
            <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md">
              All Sections
            </button>
            <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md">
              PHYSICS
            </button>
            <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md">
              CHEMISTRY
            </button>
            <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md">
              MATHS
            </button>
          </div>
          <div className="inline-block font-semibold justify-between w-full p-1 text-white mt-2 ml-4 bg-blue-700">
            <div className="flex">
              <span>Q No.: 1</span>

              <label id="language" className="ml-auto inline-block">
                View in:{" "}
              </label>
              <select
                name="language"
                id="language"
                className="px-3 flex border-2 border-black bg-white text-black ml-2"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>

          <div className="flex border-[1px] shadow-xl ml-2 mt-2 w-full h-[500px]">
            <div className="w-1/2 h-full pl-2 pr-6 border-r-[1px]">
              <h2 className="text-blue-700 border-b-[1px] font-semibold text-md">
                QUESTIONS INSTRUCTIONS
              </h2>
              <p className="text-justify  mt-2">
                Passage you want to hit smallbox on the floor with a marble
                fired from a spring-loaded gun that is mounted on a table. The
                target box is distance R horzontally from the edge of the table;
                see the figure to thr right. You compress the spring a distance
                d, but the centre of the marble falls short by a distace e of
                the center of the box. How far should you compress the spring to
                score a direct hit (negelct friction)?
              </p>
            </div>

            <div className="w-1/2 pl-6">
              <h2 className="text-blue-700 border-b-[1px] font-semibold text-md">
                QUESTION
              </h2>
              <p className="text-justify mt-2">
                A block of mass m is projected with velocity Vo as shown fig.
                The distance between free ends is lo. Maximum displacement of
                the block during the motion.
              </p>
              <div>
                <div className="flex">
                  <input type="radio" name="answerOption" id="optionA" />
                  <label htmlFor="optionA">Option A</label>
                </div>
                <div className="flex">
                  <input type="radio" name="answerOption" id="optionB" />
                  <label htmlFor="optionB">Option B</label>
                </div>
                <div className="flex">
                  <input type="radio" name="answerOption" id="optionC" />
                  <label htmlFor="optionC">Option C</label>
                </div>
                <div className="flex">
                  <input type="radio" name="answerOption" id="optionD" />
                  <label htmlFor="optionD">Option D</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 ml-2 mt-2">
            <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md">
              CLEAR RESPONSE
            </button>
            <button
              onClick={() => setValue("bg-yellow-400")}
              className={`px-12 py-2 font-serif text-white ${
                color === "bg-yellow-400" ? "bg-blue-700" : "bg-blue-500"
              }  rounded-md`}
            >
              REVIEW
            </button>
            <button
              onClick={() => setValue("bg-white")}
              className={`px-12 py-2 font-serif text-white ${
                color === "bg-white" ? "bg-blue-700" : "bg-blue-500"
              }  rounded-md`}
            >
              DUMP
            </button>
            <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md focus:bg-blue-700">
              PREVIOUS
            </button>
            <button
              onClick={() => setValue("bg-gray-600")}
              className={`px-12 py-2 font-serif text-white ${
                color === "bg-gray-600" ? "bg-blue-700" : "bg-blue-500"
              }  rounded-md`}
            >
              NEXT
            </button>
          </div>
        </div>
        <div className="w-[18%] absolute right-0 top-0">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
