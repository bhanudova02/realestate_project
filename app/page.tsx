import { HeaderComponent } from "./components/HeaderComponent";
import HeroComponent from "./components/home/HeroComponent";
import { CloubHouse } from "./components/home/CloubHouse";
import { ContactForm } from "./components/home/ContactForm";
import { Footer } from "./components/Footer";
import GalleryComponent from "./components/home/GalleryComponent";
import { SmallOverView } from "./components/home/SmallOverView";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <SmallOverView />
      <CloubHouse />
      <GalleryComponent />
      <ContactForm />
      <Footer />
    </div>
  );
}
