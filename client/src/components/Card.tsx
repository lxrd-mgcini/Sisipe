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
      <button className="h-10 bg-black text-white">Add to cart</button>
      <h3 className="mt-1 font-semibold">{productName}</h3>
      <p className="">${price}</p>
    </div>
  );
}
