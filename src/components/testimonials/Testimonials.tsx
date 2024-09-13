import RenderRating from "../render-rating/RenderRating.tsx";

const Testimonials = () => {

  return (
      <div className="bg-[#56B2801A] py-[90px]">
        <div className="">
          <div className=" text-center text-[#0b254b] text-[40px] font-medium  leading-[57.60px]">
            Testimonials
          </div>
          <div className=" text-center text-[#5e6e89] text-lg font-medium  leading-7 tracking-tight">
            Some quotes from our happy customers
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-3 gap-8 ">
              <div
                  className="flex flex-col  items-center my-[40px] w-full max-w-[400px] p-6 bg-white shadow-md rounded-xl transition-transform hover:scale-105"
              >
                <img
                    width={80}
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                    alt="avatar"
                />
                <span className="mt-4">
                      <RenderRating rate={5}/>
                    </span>
                <div className="w-full flex flex-col flex-1">
                  <p className="mt-5 mb-2 text-center text-[#1c283f] text-[22px] font-medium  leading-7 flex-1">
                    “I love it! No more air fresheners”
                  </p>
                  <h3 className=" text-center text-[#7b7f87] text-lg font-normal ">
                    Luisa
                  </h3>
                </div>
              </div>
              <div
                  className="flex flex-col  items-center my-[40px] w-full max-w-[400px] p-6 bg-white shadow-md rounded-xl transition-transform hover:scale-105"
              >
                <img
                    width={80}
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                    alt="avatar"
                />
                <span className="mt-4">
                      <RenderRating rate={4.7}/>
                    </span>
                <div className="w-full flex flex-col flex-1">
                  <p className="mt-5 mb-2 text-center text-[#1c283f] text-[22px] font-medium  leading-7 flex-1">
                    “Raccomended for everyone”
                  </p>
                  <h3 className=" text-center text-[#7b7f87] text-lg font-normal ">
                    Edoardo
                  </h3>
                </div>
              </div>
              <div
                  className="flex flex-col  items-center my-[40px] w-full max-w-[400px] p-6 bg-white shadow-md rounded-xl transition-transform hover:scale-105"
              >
                <img
                    width={80}
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                    alt="avatar"
                />
                <span className="mt-4">
                      <RenderRating rate={4}/>
                    </span>
                <div className="w-full flex flex-col flex-1">
                  <p className="mt-5 mb-2 text-center text-[#1c283f] text-[22px] font-medium  leading-7 flex-1">
                    “Looks very natural, the smell is awesome”
                  </p>
                  <h3 className=" text-center text-[#7b7f87] text-lg font-normal ">
                    Mart
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Testimonials
