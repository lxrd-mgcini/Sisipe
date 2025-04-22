import Announcement from "../components/Announcement";
import Catagories from "../components/Catagories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <div className="max-w-full">
      <Announcement />
      <Navbar />
      <MainLayout>
        <Hero />
        <Catagories />
      </MainLayout>
    </div>
  );
}
