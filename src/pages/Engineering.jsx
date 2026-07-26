import "../styles/engineering.css";

import EngineeringHero from "../components/EngineeringHero";
import EngineeringPhilosophy from "../components/EngineeringPhilosophy";
import EngineeringPrinciples from "../components/EngineeringPrinciples";
import EngineeringProcess from "../components/EngineeringProcess";
import ADRSection from "../components/ADRSection";
import ClientBenefits from "../components/ClientBenefits";
import CallToAction from "../components/CallToAction";

export default function Engineering() {
  return (
    <main className="engineering-page">

      <EngineeringHero />

      <EngineeringPhilosophy />

      <EngineeringPrinciples />

      <EngineeringProcess />

      <ADRSection />

      <ClientBenefits />

      <CallToAction />

    </main>
  );
}