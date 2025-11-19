import { HeaderComponent } from "./components/HeaderComponent";
import HeroComponent from "./components/home/HeroComponent";
import { SmallOverViewNew } from "./components/home/SmallOverViewNew";
import { ContactForm } from "./components/home/ContactForm";
import { Footer } from "./components/Footer";
import GalleryComponent from "./components/home/GalleryComponent";
import { ClubHouse } from "./components/home/ClubHouse";
import { Highlights } from "./components/home/Highlights";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeaderComponent />
      <HeroComponent />
      <SmallOverViewNew />
      <GalleryComponent />
      <ClubHouse />
      <div className="overflow-hidden">
    <Highlights />
</div>
      <ContactForm />
      <Footer />
    </div>
  );
}
