import { MapPin, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { SetStateAction, useState } from "react";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const Hair = function () {
    return (
      <div className="absolute left-0 z-20 mt-4 h-[60vh] w-full border-t-[1px] border-t-black50 bg-white px-8 py-4 text-black">
        <div className="grid grid-cols-4 text-black">
          <div>
            <h3 className="font-semibold uppercase">HAIR COLOUR PRODUCTS</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  All Skin Products Eye Care
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Exfoliant
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Face Serum
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Facial Cleanser
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Face Moisturizer
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Night Cream
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Self-Tanner
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Sunscreen for Face
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Men’s Skin Care
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase">HAIR COLOUR</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Brown/Brunette
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Blonde
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Red
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Black
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Bold
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Platinum Blonde
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Gray Hair Coverage
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase">HAIR CONCERNS</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Gray Hair Coverage
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Ammonia-Free
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase">MEN'S PRODUCTS</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Men's Expert Hair Colour
                </p>
              </li>
              <li>
                <p className="w-max cursor-pointer transition duration-300 hover:font-semibold hover:text-[#e8d1af] hover:underline hover:decoration-dotted">
                  Men's Expert Hair Beard
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const handleTabClick = (tab: SetStateAction<number>) => {
    console.log(tab);

    if (tab === activeTab) {
      setActiveTab(0);
      document.body.style.overflow = "auto";
      return;
    } else {
      setActiveTab(tab);
      document.body.style.overflow = "hidden";
    }
  };

  const MobileNav = function () {
    return (
      <div className="fixed right-[0px] top-0 z-30 flex w-full flex-col bg-black/35 pl-32">
        <div className="flex h-screen items-start gap-2 bg-white px-4 pt-14">
          <MobileMenu />
          <button
            className="flex h-6 w-6 flex-[1] bg-inherit"
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen);
              if (mobileNavOpen === true) {
                document.body.style.overflow = "auto";
                return;
              } else {
                document.body.style.overflow = "hidden";
              }
            }}
          >
            <X color="#4a463f" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="ml-4 mr-4 flex h-[72px] items-center justify-between overflow-hidden">
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
        <Link to="/">
          <h1 className="ml-auto mr-auto flex cursor-pointer text-4xl font-semibold text-black">
            Sisipe
          </h1>
        </Link>
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
          <Menu
            onClick={() => {
              console.log(mobileNavOpen);
              setMobileNavOpen(!mobileNavOpen);
            }}
            className="flex sm:hidden"
            size={24}
            color="#4a463f"
          />
          {mobileNavOpen && <MobileNav />}
        </div>
      </div>
      <div className="mb-2 mt-2 flex w-full justify-center font-light text-black">
        <ul className="md:text-md mb-2 hidden gap-8 md:ml-4 md:mr-4 md:flex">
          <div>
            <li
              onClick={() => handleTabClick(1)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 1
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Skin
            </li>
            {activeTab === 1 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(2)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 2
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Body
            </li>
            {activeTab === 2 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(3)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 3
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Hair
            </li>

            {activeTab === 3 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(4)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 4
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Gifting
            </li>

            {activeTab === 4 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(5)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 5
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Trending
            </li>

            {activeTab === 5 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(6)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 6
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Collections
            </li>

            {activeTab === 6 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(7)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 7
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Men's
            </li>

            {activeTab === 7 && <Hair />}
          </div>

          <div>
            <li
              onClick={() => handleTabClick(8)}
              className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
              style={
                activeTab === 8
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "#e8d1af80",
                      color: "#4a463f",
                      borderBottom: "2px solid #4a463f",
                    }
                  : {}
              }
            >
              Fragrances
            </li>

            {activeTab === 8 && <Hair />}
          </div>
        </ul>
      </div>
    </>
  );
}
