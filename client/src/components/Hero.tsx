export default function Hero() {
  return (
    <div className="relative flex h-[60vh] w-full flex-col items-center justify-center bg-[url('../images/hero.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[center_bottom_0.2rem] md:bg-[center] lg:bg-[center_left] xl:bg-[center_left] 2xl:bg-[center_left]">
      {/* Dark Background */}
      <div className="absolute z-0 h-full w-full bg-black/50"></div>

      <div className="z-10 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-semibold text-white sm:text-white md:text-4xl lg:text-5xl">
          Your Firming Body Care Routine
        </h1>
        <p className="text-white">
          Transform your skincare routine with our Almond Supple Skin Oil.
        </p>
        <div className="hidden sm:flex">
          <button className="w-[180px] cursor-pointer bg-white pb-6 pl-12 pr-12 pt-6 text-black">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
