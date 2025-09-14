import React from "react";
import {
  Activities,
  Header,
  Hero,
  Mission,
  Services,
  Stories,
  Footer,
  LogoTicker,
  Donation,
} from "./components";

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <Hero />
      <LogoTicker />
      <Mission />
      <Services />
      <Stories />
      <Activities />
      <Donation />
      <Footer />
    </div>
  );
}

export default App;
