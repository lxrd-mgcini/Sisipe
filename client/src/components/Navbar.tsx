import { MapPin, Menu, Search, ShoppingBag, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between ml-4 mr-4 text-black h-[72px]">
        <div className="flex gap-4">
          <Search
            className="hidden sm:flex gap-4 cursor-pointer"
            size={24}
            color="#4a463f"
          />
          <MapPin
            className="hidden sm:flex gap-4 cursor-pointer"
            size={24}
            color="#4a463f"
          />
        </div>
        <h1 className="flex text-4xl text-black font-semibold mr-auto ml-auto cursor-pointer">
          Sisipe
        </h1>
        <div className="flex gap-4">
          <ShoppingBag
            className="hidden sm:flex gap-4 cursor-pointer"
            size={24}
            color="#4a463f"
          />
          <UserRound
            className="hidden sm:flex gap-4 cursor-pointer"
            size={24}
            color="#4a463f"
          />
          <Menu className="flex sm:hidden" size={24} color="#4a463f" />
        </div>
      </div>
      <div className="w-full flex justify-center text-black font-light mt-4 mb-4">
        <ul className="hidden md:flex gap-8 md:ml-4 md:mr-4 md:text-md">
          <li className="cursor-pointer">Skin</li>
          <li className="cursor-pointer">Body</li>
          <li className="cursor-pointer">Hair</li>
          <li className="cursor-pointer">Hand</li>
          <li className="cursor-pointer">Gifting</li>
          <li className="cursor-pointer">Trending</li>
          <li className="cursor-pointer">Collections</li>
          <li className="cursor-pointer">Men's</li>
          <li className="cursor-pointer">Fragrances</li>
        </ul>
      </div>
    </>
  );
}
