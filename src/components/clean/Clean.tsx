import cleanImg from "../../images/cleanImg.png";
import React from "react";
import cleanMark from "../../images/cleanMark.svg"

const Clean: React.FC = () => {
  return (
      <section className="py-[100px] bg-[#f7f8fa]">
        <div className="flex items-center justify-center">
          <div className="flex w-1/2 max-w-[540px] flex-col items-start">
            <h2 className="font-['Poppins'] text-[40px] font-medium leading-[46.60px] text-[#1d252c]">
              Clean and <br/> fragrant soy wax
            </h2>
            <p className="mt-4 font-['Poppins'] text-base font-normal leading-snug text-[#56b280]">
              Made for your home and for your wellness
            </p>
            <ul className="mt-9 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <img src={cleanMark as string} alt="Mark"/>
                <div className="flex items-center gap-2">
                  <span className="font-['Poppins'] text-base font-medium leading-7 text-black">
                    Eco-sustainable:
                  </span>
                  <span className="font-['Poppins'] text-base font-normal leading-7 text-black">
                    All recyclable materials, 0% CO2 emissions
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src={cleanMark as string} alt="Mark"/>
                <div className="flex items-center gap-2">
                  <span className="font-['Poppins'] text-base font-medium leading-7 text-black">
                    Hyphoallergenic:
                  </span>
                  <span className="font-['Poppins'] text-base font-normal leading-7 text-black">
                    100% natural, human friendly ingredients
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src={cleanMark as string} alt="Mark"/>
                <div className="flex items-center gap-2">
                  <span className="font-['Poppins'] text-base font-medium leading-7 text-black">
                    Handmade:
                  </span>
                  <span className="font-['Poppins'] text-base font-normal leading-7 text-black">
                    All candles are craftly made with love.
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src={cleanMark as string} alt="Mark"/>
                <div className="flex items-center gap-2">
                  <span className="font-['Poppins'] text-base font-medium leading-7 text-black">
                    Long burning:
                  </span>
                  <span className="font-['Poppins'] text-base font-normal leading-7 text-black">
                    No more waste. Created for last long.
                  </span>
                </div>
              </li>

            </ul>
            <button className="mt-16 flex items-start justify-start gap-2.5 rounded bg-[#56b280] px-11 py-2">
            <span className="text-center font-['Roboto'] text-xl font-medium text-white">
              Learn more
            </span>
            </button>
          </div>

          <div className="max-w-[540px] ">
            <img src={cleanImg as string} alt="Clean" className="rounded-xl shadow-2xl"/>
          </div>
        </div>
      </section>
  );
};

export default Clean;
