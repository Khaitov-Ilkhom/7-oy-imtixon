import footerLogo from "../../images/footerLogo.svg";

const Footer = () => {
  return (
      <footer className="flex w-full flex-col">
        <div className="flex w-full items-center bg-[#272727] pb-[115px] pt-14">
          <div className="container flex items-center justify-around">
            <div className="flex w-full max-w-[275px] flex-col gap-2">
              <img src={footerLogo as string} alt="Logo" />
              <p className="font-['Poppins'] text-base font-normal leading-snug text-white">
                Your natural candle made for your home and for your wellness.
              </p>
            </div>

            <div className="flex items-center gap-14">
              <div className="flex flex-col gap-6">
              <span className="font-['Poppins'] text-base font-medium leading-7 text-[#56b280]">
                Discovery
              </span>
                <ul className="flex flex-col gap-5">
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    New season
                  </li>
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Most searched
                  </li>
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Most selled
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
              <span className="font-['Poppins'] text-base font-medium leading-7 text-[#56b280]">
                About
              </span>
                <ul className="flex flex-col gap-5">
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Help
                  </li>
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Shipping
                  </li>
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Affiliate
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
              <span className="font-['Poppins'] text-base font-medium leading-7 text-[#56b280]">
                Info
              </span>
                <ul className="flex flex-col gap-5">
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Contact us
                  </li>
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Privacy Policies
                  </li>
                  <li className="font-['Poppins'] text-base font-medium leading-7 text-[#e1e1e1]">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-6">
          <div className="container flex items-center justify-around">
          <span className="font-['Poppins'] text-base font-normal leading-7 text-[#5e6e89]">
            ©Candleaf All Rights Reserved.
          </span>
            <div className="flex items-center justify-end gap-2">
            <span className="font-['Poppins'] text-base font-normal leading-7 text-[#5e6e89]">
              Designed with ❤️ by
            </span>
              <span className="font-['Poppins'] text-base font-medium leading-7 text-[#5e6e89]">
              uxbly
            </span>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
