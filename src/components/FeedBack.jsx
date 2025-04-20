import img1 from "../assets/feedbackImg/p1.jpg";
import img2 from "../assets/feedbackImg/p2.jpg";
import img3 from "../assets/feedbackImg/p3.jpg";

const FeedBack = () => {
  return (
    <div className="flex flex-col justify-center gap-10 items-center">
      <div className=" space-y-2 mb-5">
        <h1
          className="text-3xl md:text-4xl text-[#d9662c] border-l-[#d9662c] border-l-4 font-semibold pl-2"
          data-aos="fade-right"
        >
          Feedbacks
        </h1>
        <p data-aos="fade-left">A Reliable source for people</p>
      </div>
      <div className="flex justify-between gap-30">
        <div className="flex gap-3 w-1/2">
          <img src={img1} className="w-40 h-40 rounded-xl object-cover" />
          <img src={img2} className="w-40 h-40 rounded-xl object-cover" />
          <img src={img3} className="w-40 h-40 rounded-xl object-cover" />
        </div>
        <div className="w-1/2">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              dfjsldfolsd
            </div>
            <div id="item2" className="carousel-item w-full">
              ddsldfls
            </div>
            <div id="item3" className="carousel-item w-full">
              dhfksdh
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </div>
      <h3>Give Us Your Feedback</h3>
      <form className="fieldset w-1/3">
        <textarea
          name="feedback"
          id=""
          className="border border-black"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FeedBack;
