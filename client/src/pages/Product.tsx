import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MainLayout from "@/layout/MainLayout";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Product() {
  //   const params = useParams();
  const tags = ["nailcare", "cosmetic"];
  const product = {
    name: "Anti Wrinkle Firming Cream",
    price: "20.00",
    description:
      "Floral print dress mid length with a wrap over v neckline. This gorgeous piece is made from a woven poly-blend fabric that is tastefully decorated with a pink, green, and white floral print.",
    images: [
      "/images/make-up-img-4-768x960.jpg",
      "/images/fragrances.jpg",
      "/images/body-care.jpg",
    ],
  };
  const [count, setCount] = useState(1);
  return (
    <div className="relative max-w-full">
      <Announcement />
      <Navbar />
      <MainLayout>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-4">
            <div className="h-[60vh]">
              <img
                className="h-full w-full object-cover"
                src={product.images[0]}
                alt=""
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-[30vh]">
                <img
                  className="h-full w-full object-cover object-center"
                  src={product.images[1]}
                  alt=""
                />
              </div>
              <div className="h-[30vh]">
                <img
                  className="h-full w-full object-cover object-center"
                  src={product.images[2]}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-black">
            <div>
              <p className="underline">Product Details</p>
              <div className="text-center">
                <h3 className="mt-8 text-4xl font-medium">{product.name}</h3>
                <h4 className="mt-8 text-4xl font-light">${product.price}</h4>
                <p className="mt-4">{product.description}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <p>
                    <strong>Category</strong>: Cosmetics
                  </p>
                  <p>
                    <strong className="no-underline">Tags</strong>:
                    {tags.map((tag) => {
                      return (
                        <Link to={`/products/${tag}`}>
                          {" "}
                          <span className="underline">{tag},</span>
                        </Link>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="underline">Quantity Details</p>
              <div className="flex h-[64px] gap-4 pt-4">
                <div className="flex w-fit bg-brand">
                  <button
                    className="px-6 py-3"
                    onClick={() => {
                      count > 1 && setCount(count - 1);
                    }}
                  >
                    <Minus />
                  </button>
                  <span className="px-6 py-1 text-3xl font-normal">
                    {count}
                  </span>
                  <button
                    className="px-6 py-3"
                    onClick={() => setCount(count + 1)}
                  >
                    <Plus />
                  </button>
                </div>
                <button className="flex w-full items-center justify-center gap-2 bg-black text-white transition duration-300 hover:scale-105">
                  <ShoppingBag size={20} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
}
