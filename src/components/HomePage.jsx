import { Radio } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz/5")
      .then((res) => res.json())
      .then((data) => setData(data.data.questions))
      .catch((err) => console.log(err));
  }, []);
  const notify = (ans) => toast(ans);
  const handleAns = (correctAnswer, option) => {
    if (correctAnswer == option) {
      toast.success("Congratulation");
    } else {
      toast.error("Oh");
    }
  };
  return (
    <div className="rounded mt-2">
      <div className="flex justify-between items-center bg-blue-600 text-white p-2 font-bold">
        <span>Q No.: 1</span>

        <div>
          <label id="language">View in: </label>
          <select name="language" id="language">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="w-6/12">
          <p>QUESTION INSTRUCTION</p>
          <div className="p-12">
            <p className="text-xs leading-none font-semibold text-justify">
              Passage You want to hit a small box on the floor with a marble
              fired from a spring-loaded gun that is mounted on a table. The
              target box is a distance R horizontally from the edge of the
              table; see the figure to the right. You compress the spring a
              distance d, but the center of the marble falls short by a distance
              r of the center of the box. How far should you compress the spring
              to score a direct hit (neglect friction)?
            </p>
          </div>
        </div>
        <div className="w-6/12">
          <p>QUESTION</p>
          <div className="text-xs leading-none font-semibold text-justify">
            <p>
              A block of mass m is projected with velocity Vo as shown fig. The
              distance between free ends is lo. Maximum displacement of the
              block during the motion.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <input type="radio" name="answerOption" id="optionA" />
                <label htmlFor="optionA">Option A</label>
              </div>
              <div>
                <input type="radio" name="answerOption" id="optionB" />
                <label htmlFor="optionB">Option B</label>
              </div>
              <div>
                <input type="radio" name="answerOption" id="optionC" />
                <label htmlFor="optionC">Option C</label>
              </div>
              <div>
                <input type="radio" name="answerOption" id="optionD" />
                <label htmlFor="optionD">Option D</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
