"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { 
  FaHeading, 
  FaAlignLeft, 
  FaAlignJustify, 
  FaDollarSign, 
  FaCalendarAlt, 
  FaExclamationCircle, 
  FaImage, 
  FaPlusCircle,
  FaCheckCircle
} from "react-icons/fa";

export default function AddItemPage() {
  const [message, setMessage] = useState("");
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // 📝 Form State
  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    date: "",
    priority: "",
    img: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 📦 Create new item
    const newItem = {
      id: Date.now(),
      title: form.title,
      category: "Custom",
      price: form.price,
      rating: 0,
      desc: form.shortDesc,
      fullDesc: form.fullDesc,
      date: form.date,
      priority: form.priority,
      img: form.img || "https://placehold.co/600x400/ffe4e6/be185d?text=Course"
    };

    // 💾 Save to localStorage
    const existing = JSON.parse(localStorage.getItem("items") || "[]");
    localStorage.setItem("items", JSON.stringify([...existing, newItem]));

    // ✅ Success message
    setMessage("Item added successfully!");
    
    // Auto-hide message after 3 seconds for better UX
    setTimeout(() => setMessage(""), 3000);

    // reset form
    setForm({
      title: "",
      shortDesc: "",
      fullDesc: "",
      price: "",
      date: "",
      priority: "",
      img: ""
    });
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <span className="loading loading-ring loading-lg text-pink-500 mb-4"></span>
        <p className="text-pink-400 font-bold animate-pulse tracking-widest uppercase">Checking Auth...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/50 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-500 font-bold text-sm tracking-wide uppercase mb-4 shadow-sm">
            Admin Dashboard
          </div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2">
            Add New Course
          </h1>
          <p className="text-gray-500 font-medium mt-2">
            Create a new listing to display in the course catalog.
          </p>
        </div>

        {/* ✅ Success Message */}
        {message && (
          <div className="mb-8 flex items-center justify-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-600 px-6 py-4 rounded-2xl shadow-lg shadow-emerald-100/50 animate-fade-in-down">
            <FaCheckCircle className="text-xl" />
            <span className="font-bold">{message}</span>
          </div>
        )}

        {/* 🧾 Form Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-pink-100/40 border border-pink-50">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 mb-2 block">Course Title</label>
              <div className="relative">
                <FaHeading className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                  placeholder="e.g. Advanced React Patterns"
                  required
                />
              </div>
            </div>

            {/* Short Description */}
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 mb-2 block">Short Description</label>
              <div className="relative">
                <FaAlignLeft className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
                <input
                  name="shortDesc"
                  value={form.shortDesc}
                  onChange={handleChange}
                  className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                  placeholder="A brief summary for the course card"
                  required
                />
              </div>
            </div>

            {/* Full Description */}
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 mb-2 block">Full Description</label>
              <div className="relative">
                <FaAlignJustify className="absolute left-4 top-5 text-pink-300" />
                <textarea
                  name="fullDesc"
                  value={form.fullDesc}
                  onChange={handleChange}
                  className="textarea w-full pl-11 pt-4 min-h-[120px] bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                  placeholder="Detailed course curriculum and benefits..."
                  required
                />
              </div>
            </div>

            {/* Price & Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-sm font-bold text-gray-700 mb-2 block">Price ($)</label>
                <div className="relative">
                  <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
                  <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                    placeholder="49.99"
                    type="number"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-bold text-gray-700 mb-2 block">Launch Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 z-10 pointer-events-none" />
                  <input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium appearance-none"
                    type="date"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Priority & Image Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-sm font-bold text-gray-700 mb-2 block">Priority Level</label>
                <div className="relative">
                  <FaExclamationCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="select w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium appearance-none"
                    required
                  >
                    <option value="" disabled>Select Priority...</option>
                    <option value="High">High (Featured)</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-bold text-gray-700 mb-2 block">Cover Image URL</label>
                <div className="relative">
                  <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
                  <input
                    name="img"
                    value={form.img}
                    onChange={handleChange}
                    className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 mt-8 border-t border-pink-50">
              <button 
                type="submit" 
                className="btn w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-none rounded-xl h-14 text-lg font-bold shadow-xl shadow-pink-200/50 hover:scale-[1.02] transition-transform flex items-center gap-2"
              >
                <FaPlusCircle className="text-xl" /> Publish Course
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </div>
  );
}