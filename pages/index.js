import React, { useState } from "react";
import About from "./component/Home/About";
import Contact from "./component/Home/Contact";
import Hero from "./component/Home/Hero";
import Program from "./component/Home/Program";
import Layout from "./component/Layout";
import Navbar from "./component/Navbar";
import Footer from "./component/Home/Footer";

function Home() {
  const [heightNavbar, setHeightNavbar] = useState(0);
  return (
    <>
      <Navbar setHeightNavbar={setHeightNavbar} />
      {heightNavbar > 0 && (
        <Layout heightNavbar={heightNavbar}>
          <Hero />
          <About />
          <Program />
          <Contact/>
          <Footer/>
        </Layout>
      )}
    </>
  );
}

export default Home;
