import ClientWarmup from "@/components/ClientWarmup/ClientWarmup";
import Consultation from "@/components/Consultation/Consultation";
import EmailForm from "@/components/EmailForm/EmailForm";
import Footer from "@/components/Footer/Footer";
import Functions from "@/components/Functions/Functions";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import IntegratedWith from "@/components/IntegratedWith/IntegratedWith";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import ServicesSection from "@/components/Services/ServicesSection";
import TeamSection from "@/components/Team/TeamSection";
import TestimonialsSection from "@/components/Testimonial/TestimonialsSection";
import UseCases from "@/components/UseCases/UseCases";
import WhyAI from "@/components/WhyAi/WhyAI";

export default function HomePage() {
  return (
    <main>
      <Header/>
      <Hero/>
      <IntegratedWith/>
      <WhyAI/>
      <Consultation/>
      <Functions/>
      <ClientWarmup/>
      <PricingPlans/>
      <UseCases/>
      <ServicesSection/>
      <Consultation/>
      <TestimonialsSection/>
      <TeamSection/>
      <EmailForm/>
      <Footer/>
    </main>
  )
}
