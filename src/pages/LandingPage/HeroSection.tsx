import NavBar from "./NavBar";
import InfoSection from "./InfoSection";
function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col min-h-lvh">
      <NavBar />
      <InfoSection />
    </div>
  );
}

export default HeroSection;
