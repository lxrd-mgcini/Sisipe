import ShopNowButton from "./ui/ShopNowButton";

export default function Catagories() {
  const cardData = [
    {
      id: 1,
      name: "Skin Care",
      description: "Remove spots and blemishes easily.",
    },
    {
      id: 2,
      name: "Body Care",
      description: "Keep your skin young and protected",
    },

    {
      id: 3,
      name: "Hand Care",
      description: "Acts as an antioxidant, helping protect cells.",
    },
    {
      id: 4,
      name: "Hair Care",
      description: "Acts as an antioxidant, helping protect cells.",
    },
    {
      id: 5,
      name: "Fragrances",
      description: "No harsh chemicals, only natural cleanser.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 pt-4 pb-4">
      {cardData.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col-reverse h-[400px] border  p-8 bg-tertiary text-black "
            // w-1/5
          >
            <div className="flex flex-col gap-4 text-center">
              <h3 className="font-bold ">{card.name}</h3>
              <p className="font-light">{card.description}</p>
              <div className="flex justify-center">
                <ShopNowButton />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
