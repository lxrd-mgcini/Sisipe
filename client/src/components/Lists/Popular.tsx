import Card from "../Card";

export default function PopularProducts() {
  const cardData = [
    {
      id: 1,
      productName: "Skin Care",
      price: 100,
    },
    {
      id: 2,
      productName: "Skin Care",
      price: 100,
    },
    {
      id: 3,
      productName: "Skin Care",
      price: 100,
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-8 text-center">
      <h1 className="text-4xl font-semibold text-black">Most Popular</h1>
      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-3">
        {cardData.map((card) => (
          <Card productName={card.productName} price={card.price} />
        ))}
      </div>
      <button className="bg-background ml-auto mr-auto flex w-[200px] cursor-pointer items-center justify-center justify-self-center pb-3 pl-3 pr-3 pt-3 font-semibold text-black">
        More Products
      </button>
    </div>
  );
}
