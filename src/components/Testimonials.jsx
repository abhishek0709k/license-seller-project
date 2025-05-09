// File: src/components/Testimonials.jsx
import React from "react";

const reviews = [
  {
    name: "Alice Johnson",
    role: "IT Manager",
    company: "TechCorp",
    text: "SoftSell helped us recover value from unused software—we couldn’t be happier!",
  },
  {
    name: "Mark Lee",
    role: "Procurement Head",
    company: "InnoSoft",
    text: "Simple and fast. The best resale platform I’ve used so far!",
  },
];

export default function Testimonials() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <p className="mb-2 italic">"{r.text}"</p>
            <p className="font-semibold">{r.name}, {r.role} at {r.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}