import Announcement from "@/components/Announcement";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tags from "@/components/Tags";
import MainLayout from "@/layout/MainLayout";
import { Link } from "react-router";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Serum Le Duo",
      price: "36.00",
      imgUrl: "/images/fragrances.jpg",
    },
    {
      id: 2,
      name: "Vitamin C Glow Moisturizer",
      price: "24.00",
      imgUrl: "/images/skin-care.jpg",
    },
    {
      id: 3,
      name: "Revitalift Triple Power Age-Defying",
      price: "24.00",
      imgUrl: "/images/make-up-img-1-768x960.jpg",
    },
    {
      id: 4,
      name: "pH Hyaluron Lip Oil",
      price: "14.00",
      imgUrl: "/images/make-up-img-1-768x960.jpg",
    },
    {
      id: 5,
      name: "Glycolic + Gloss High Shine",
      price: "9.00",
      imgUrl: "/images/Lip gloss.jpg",
    },
    {
      id: 6,
      name: "Lacque Resistance Liquid Lipstick",
      price: "14.00",
      imgUrl: "/images/make-up-img-2.jpg",
    },
    {
      id: 7,
      name: "Triple Power Moisturizer With SPF 30 ",
      price: "30.00",
      imgUrl: "/images/make-up-img-4-768x960.jpg",
    },
    {
      id: 8,
      name: "pH Hyaluron Lip Oil",
      price: "14.00",
      imgUrl: "/images/make-up-img-1-768x960.jpg",
    },
    {
      id: 9,
      name: "Glycolic + Gloss High Shine Leave-in Serum",
      price: "9.00",
      imgUrl: "/images/Lip gloss.jpg",
    },
    {
      id: 10,
      name: "Lacque Resistance Liquid Lipstick",
      price: "14.00",
      imgUrl: "/images/make-up-img-2.jpg",
    },
  ];
  return (
    <div className="relative max-w-full">
      <Announcement />
      <Navbar />
      <Tags />
      <MainLayout>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return (
              <Link to={`/products/${product.id}`}>
                <Card
                  productName={product.name}
                  price={product.price}
                  imgUrl={product.imgUrl}
                />
              </Link>
            );
          })}
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
};
