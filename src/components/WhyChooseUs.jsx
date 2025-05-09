// File: src/components/WhyChooseUs.jsx
import React from "react";

const points = [
  { icon: "⚡", text: "Fast & Easy Process" },
  { icon: "🔒", text: "Secure Transactions" },
  { icon: "💼", text: "Trusted by Businesses" },
  { icon: "📈", text: "Best Market Rates" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {points.map((item, i) => (
          <div key={i} className="p-4 bg-white shadow rounded">
            <div className="text-3xl mb-2">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}