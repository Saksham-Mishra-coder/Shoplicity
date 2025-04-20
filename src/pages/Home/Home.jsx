import React from "react";
import Layout from "../../commponets/Layout";
import HeroSection from "../../commponets/Herosection/HeroSection";
import Service from "../../commponets/Service/Service";
import Gallery from "../../commponets/Gallery/Gallery";

function Home() {
  return (
    <Layout>
      <div className="home">
        <HeroSection />
        <Service/>
        <Gallery/>
      </div>
    </Layout>
  );
}

export default Home;
