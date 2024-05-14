import Header from "@/components/Header/page";
import SectionFour from "@/components/SectionFour/page";
import SectionOne from "@/components/SectionOne/page";
import SectionThree from "@/components/SectionThree/page";
import SectionTwo from "@/components/SectionTwo/page";
import Reviews from "@/components/Review/page";
import SectionFive from "@/components/SectionFive/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="px-5 md:px-20">
        <SectionOne />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Reviews />
      <SectionFive />
      <Footer />
    </div>
  );
}
