import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { DataList } from "../data";
import { useState } from "react";

const FAQComponent = () => {
  const [isShow, setIsShow] = useState(false);
  const ToggleFAQ = (index) => {
    setIsShow((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="">
      <h1 className=" text-center my-8 text-7xl font-extrabold">
        Frequently Asked Questions
      </h1>
      {DataList.map((item, index) => (
        <div key={index}>
          <div className=" w-[800px] py-4 bg-gray-300  mx-auto border ">
            <div
              className="flex items-center pl-5 gap-3 cursor-pointer "
              onClick={() => ToggleFAQ(index)}
            >
              {!isShow[index] ? (
                <IoIosArrowForward className="font-bold text-xl" />
              ) : (
                <IoIosArrowDown className="font-bold text-xl" />
              )}
              <p className="font-bold text-xl ">{item.question}</p>
            </div>
            {isShow[index] && (
              <p className="text-lg pl-14 py-3  ">{item.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
