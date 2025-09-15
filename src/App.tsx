import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  CustomCursor,
  Loader,
} from "./components";
import AllPrograms from "./components/AllPrograms";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <div className="App min-h-screen bg-white" style={{ cursor: "none" }}>
          <CustomCursor />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <LogoTicker />
                  <Mission />
                  <Services />
                  <Stories />
                  <Activities />
                  <Donation />
                </>
              }
            />
            <Route path="/all-programs" element={<AllPrograms />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
