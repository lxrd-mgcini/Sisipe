import { Search, ShoppingBag, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between m-4 text-black">
      <h6 className="font-bold text-base">Sisepe</h6>
      <div>
        <ul className="flex gap-4 text-base font-medium">
          <li className="cursor-pointer hover:font-semibold hover:transition-all">
            SKINCARE
          </li>
          <li className="cursor-pointer hover:font-semibold">BODY</li>
          <li className="cursor-pointer hover:font-semibold">HAIR</li>
          <li className="cursor-pointer hover:font-semibold">FRAGRANCE</li>
          <li className="cursor-pointer hover:font-semibold">MAKEUP</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Search size={20} className="cursor-pointer" />
        <ShoppingBag size={20} className="cursor-pointer" />
        <UserRound size={20} className="cursor-pointer" />
      </div>
    </div>
  );
}
