// File: src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.company) errs.company = "Company is required";
    if (!form.licenseType) errs.licenseType = "Select a license type";
    if (!form.message) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", company: "", licenseType: "", message: "" });
    }
  };

  return (
    <section className="bg-blue-50 p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

        <select
          name="licenseType"
          value={form.licenseType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Office">Office</option>
          <option value="Adobe">Adobe</option>
        </select>
        {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}