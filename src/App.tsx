import { useState } from "react";
import { ChakraProvider, defaultSystem, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleScrollTo = (elementId: string) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectEstimate = (estimateText: string) => {
    setPrefilledMessage(estimateText);
    // Smooth scroll down to contact form container immediately
    const contactBlock = document.getElementById("contact");
    if (contactBlock) {
      contactBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Box className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col justify-between selection:bg-cyan-500/25 selection:text-cyan-400">
        
        {/* Navigation Core */}
        <Navbar onScrollTo={handleScrollTo} />

        {/* Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Services & Capabilities Grid */}
        <Services />

        {/* Filterable Portfolio Case Studies */}
        <CaseStudies />

        {/* Interactive Estimator & SLA Configurator */}
        <Calculator onSelectEstimate={handleSelectEstimate} />

        {/* Dynamic Contact Alignment Ticker */}
        <ContactForm prefilledMessage={prefilledMessage} />

        {/* Detailed Professional Footer */}
        <Footer onScrollTo={handleScrollTo} />

      </Box>
    </ChakraProvider>
  );
}
