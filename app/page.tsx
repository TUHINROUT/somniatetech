import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import IndustriesBlock from "@/components/Industries";
import MethodTech from "@/components/MethodTech";
import Projects from "@/components/Projects";
import WhyValues from "@/components/WhyValues";
import TeamInsights from "@/components/TeamInsights";
import PartnersTestimonial from "@/components/PartnersTestimonial";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import GroupCompanies from "@/components/GroupCompanies";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <About />
        <GroupCompanies />
        <Services />
        <IndustriesBlock />
        <MethodTech />
        <Projects />
        <WhyValues />
        <TeamInsights />
        <PartnersTestimonial />
        <CtaBand />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
