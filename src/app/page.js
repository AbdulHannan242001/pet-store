import Banner from "@/components/Home/Banner";
import Category from "@/components/Home/Category";
import SearchBar from "@/components/Home/SearchBar";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FeaturedPets from "@/components/Home/FeaturedPets";
import Services from "@/components/Home/Services";
import About from "@/components/Home/About";
import VisitUs from "@/components/Home/VisitUs";

export default function Home() {
  return (
      <div>
        <Banner />
        <SearchBar />
        <Category />
        <FeaturedPets />
        <FeaturedProducts />
        <Services />
        <About />
        <VisitUs />
      </div>
  );
}
