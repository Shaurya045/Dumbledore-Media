import ServiceHeader from "../Components/ServiceHeader";
import ServicesPackages from "../Components/ServicesPackages";
import ServicesScroll from "../Components/ServicesScroll";
import ServicesSection from "../Components/ServicesSection";

function Services() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <ServiceHeader />
      <ServicesSection />
      <ServicesPackages />
      <ServicesScroll />
    </main>
  );
}

export default Services;
