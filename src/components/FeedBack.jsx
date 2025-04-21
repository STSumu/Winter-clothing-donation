import { useState } from "react";
import img1 from "../assets/feedbackImg/p1.jpg";
import img2 from "../assets/feedbackImg/p2.jpg";
import img3 from "../assets/feedbackImg/p3.jpg";
import bg from "../assets/detail.png";

const FeedBack = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const feedbacks = [
    {
      img: img1,
      text: "“Thanks to this platform, I was able to donate extra jackets lying around at home. Knowing they reached families in need made my winter warmer too.”",
    },
    {
      img: img2,
      text: "“I never knew helping could be this easy. Just a few clicks and someone picked up the clothes right from my home. Beautiful initiative!”",
    },
    {
      img: img3,
      text: "“As a volunteer, it’s amazing to see how united people can be in times of need. This site bridges the gap between donors and those who truly need warmth.”",
    },
  ];
  const handleSlide = (idx) => {
    setSelectedIdx(idx);
    console.log(idx);
  };
  return (
    <div className=" items-center flex flex-col justify-center gap-10">
      <div className=" space-y-2 mb-5">
        <h1
          className="text-3xl md:text-4xl text-[#d9662c] border-l-[#d9662c] border-l-4 font-semibold pl-2"
          data-aos="fade-right"
        >
          Feedbacks
        </h1>
        <p data-aos="fade-left">A Reliable source for people</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 h-[100px]">
        <div className="flex justify-center gap-3 w-1/2">
          {feedbacks.map((feedback, idx) => (
            <img
              key={idx}
              className={`w-20 rounded-lg object-cover ${
                idx === selectedIdx
                  ? "ring-2 ring-[#d9662c] scale-105 shadow-lg"
                  : "opacity-60 hover:opacity-100"
              } `}
              src={feedback.img}
              onClick={() => handleSlide(idx)}
            ></img>
          ))}
        </div>
        <div className="w-full md:w-1/2 ">
          <p className="w-3/4 opacity-80 shadow-xl p-5 rounded-lg">{feedbacks[selectedIdx].text}</p>
        </div>
      </div>
      <div className="w-full md:w-2/3 my-10">
        <h3 className="text-xl mb-2 md:mb-4 font-semibold text-center opacity-80">Give Us Your Feedback</h3>
        <form className="flex flex-col gap-4">
          <textarea
            name="feedback"
            className="border border-gray-300 rounded-md p-3 h-32"
            placeholder="Write your feedback..."
          ></textarea>
          <button
            type="submit"
            className="self-center px-6 py-2 bg-[#d9662c] text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
