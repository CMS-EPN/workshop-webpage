import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ScheduleSection from "./components/ScheduleSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ActivitiesSection />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
