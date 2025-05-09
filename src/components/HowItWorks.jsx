// File: src/components/HowItWorks.jsx
import React from "react";

const steps = [
  { icon: "📤", title: "Upload License" },
  { icon: "💰", title: "Get Valuation" },
  { icon: "🏦", title: "Get Paid" },
];

export default function HowItWorks() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl mb-2">{step.icon}</div>
            <p className="text-lg font-semibold">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}