// // File: src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="font-sans">
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>SoftSell - Resell Your Unused Software Licenses</title>
        <meta
          name="description"
          content="SoftSell helps you turn unused software licenses into cash. Quick, secure, and hassle-free resale with free valuation."
        />
        <meta
          name="keywords"
          content="software resale, license selling, sell software, SoftSell"
        />
      </Helmet>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
