import { ShoppingBag } from "lucide-react";

type Props = {
  productName: string;
  price: number;
};

export default function Card({ productName, price }: Props) {
  return (
    <div className="flex flex-1 flex-col text-center">
      <div className="relative aspect-square overflow-hidden">
        <img
          src="/images/body-care.jpg"
          alt=""
          className="aspect-square object-cover object-center transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
      {/* <button className="h-10 bg-black text-white">Add to cart</button> */}
      <button className="group relative inline-flex items-center justify-center overflow-hidden bg-black p-4 px-6 py-1 font-medium text-black transition duration-500 ease-out">
        <span className="ease bg-brand/[200] absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-black duration-300 group-hover:translate-x-0">
          <ShoppingBag size={20} />
        </span>
        <span className="ease absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full">
          View Product
        </span>
        <span className="invisible relative">View Product</span>
      </button>

      <h3 className="mt-1 font-semibold">{productName}</h3>
      <p className="">${price}</p>
    </div>
  );
}
