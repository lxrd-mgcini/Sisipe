import ShopNowButton from "./ui/ShopNowButton";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[60vh] bg-tertiary">
      <div className="flex flex-col text-center items-center gap-4 justify-center">
        <h1 className="text-2xl text-black font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
          Your Firming Body Care Routine
        </h1>
        <p className="text-black">
          Transform your skincare routine with our Almond Supple Skin Oil.
        </p>
        <ShopNowButton />
      </div>
    </div>
  );
}
