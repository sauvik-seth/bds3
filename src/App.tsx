import React from "react";
import { Activities, Header, Hero, Mission, Services, Stories, Footer } from "./components";

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <Stories />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
