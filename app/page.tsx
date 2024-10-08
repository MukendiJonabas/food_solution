import DetailSection from "@/components/detailSection";
import Footer from "../components/footer";
import HeroSection from "@/components/heroSection";
import DetailSection2 from "@/components/detailsection2";
import DetailSection3 from "@/components/detailsection3";
import DetailSection4 from "@/components/detailsection4";
import "./globals.css";

export default function Page() {
  return (
    <div>
      <HeroSection />
      {/* <DetailSection /> */}
    <DetailSection2/>
    <DetailSection3/>
    <DetailSection4/>
    </div>
  );
}
