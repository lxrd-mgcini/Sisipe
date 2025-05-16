import { MapPin, Menu, Search, ShoppingBag, UserRound } from "lucide-react";

export default function Navbar() {
  const links = [
    {
      name: "Skin",
      path: "/",
    },
    {
      name: "Body",
      path: "/",
    },
    {
      name: "Hair",
      path: "/",
    },
    {
      name: "Hand",
      path: "/",
    },
    {
      name: "Gifting",
      path: "/",
    },
    {
      name: "Trending",
      path: "/",
    },
    {
      name: "Collections",
      path: "/",
    },
    {
      name: "Men's",
      path: "/",
    },
    {
      name: "Fragrances",
      path: "/",
    },
  ];

  return (
    <>
      <div className="ml-4 mr-4 flex h-[72px] items-center justify-between text-black">
        <div className="flex gap-4">
          <Search
            className="hidden cursor-pointer gap-4 sm:flex"
            size={24}
            color="#4a463f"
          />
          <MapPin
            className="hidden cursor-pointer gap-4 sm:flex"
            size={24}
            color="#4a463f"
          />
        </div>
        <h1 className="ml-auto mr-auto flex cursor-pointer text-4xl font-semibold text-black">
          Sisipe
        </h1>
        <div className="flex gap-4">
          <ShoppingBag
            className="hidden cursor-pointer gap-4 sm:flex"
            size={24}
            color="#4a463f"
          />
          <UserRound
            className="hidden cursor-pointer gap-4 sm:flex"
            size={24}
            color="#4a463f"
          />
          <Menu className="flex sm:hidden" size={24} color="#4a463f" />
        </div>
      </div>
      <div className="mb-4 mt-4 flex w-full justify-center font-light text-black">
        <ul className="md:text-md hidden gap-8 md:ml-4 md:mr-4 md:flex">
          {links.map((link) => (
            <li className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
