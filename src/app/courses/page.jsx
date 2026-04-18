"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaMagnifyingGlass, FaFilter, FaStar } from "react-icons/fa6";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || item.category === category;
    const matchPrice =
      price === "All" ||
      (price === "low" && item.price < 50) ||
      (price === "high" && item.price >= 50);

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2">
            Explore Our Courses
          </h1>
          <p className="text-gray-500 mt-3 font-medium text-lg">
            Find the perfect course to level up your skills today.
          </p>
        </div>

        {/* 🔍 Search + Filters (Floating Bar) */}
        <div className="bg-white p-4 rounded-2xl shadow-xl shadow-pink-100/50 border border-pink-50 flex flex-col md:flex-row gap-4 mb-12 relative z-10">
          
          {/* Search Input */}
          <div className="relative w-full md:w-1/2 flex-grow">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
            <input
              type="text"
              placeholder="Search for courses..."
              className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-700 placeholder-gray-400"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full md:w-1/4">
            <select
              className="select w-full bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-700 font-medium appearance-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Web">Web Development</option>
              <option value="AI">AI & Machine Learning</option>
              <option value="Design">UI/UX Design</option>
            </select>
          </div>

          {/* Price Dropdown */}
          <div className="relative w-full md:w-1/4">
            <select
              className="select w-full bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-700 font-medium appearance-none"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="All">All Prices</option>
              <option value="low">Budget (Below $50)</option>
              <option value="high">Premium (Above $50)</option>
            </select>
          </div>
        </div>

        {/* 📦 Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="card bg-white border border-pink-50 shadow-lg shadow-pink-100/40 hover:shadow-2xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              {/* Image Container with Hover Zoom */}
              <figure className="relative h-48 overflow-hidden bg-pink-50">
                <img 
                  src={item.img || "https://placehold.co/600x400/ffe4e6/be185d?text=Course"} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Floating Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-pink-600 shadow-sm border border-pink-100">
                  {item.category || "Course"}
                </div>
              </figure>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 font-medium line-clamp-2 mb-4 flex-grow">
                  {item.desc}
                </p>

                {/* Rating & Price Row */}
                <div className="flex justify-between items-center text-sm mb-6 border-t border-pink-50 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-lg">
                    <FaStar className="text-amber-400" />
                    <span className="font-bold text-amber-700">{item.rating || "4.5"}</span>
                  </div>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                    ${item.price}
                  </span>
                </div>

                {/* Call to Action Button */}
                <Link href={`/courses/${item.id}`} className="w-full">
                  <button className="btn w-full bg-pink-50 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white border-none rounded-xl font-bold shadow-sm transition-all duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State / No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-pink-50 shadow-lg shadow-pink-100/30">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-500 font-medium">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button 
              onClick={() => { setSearch(""); setCategory("All"); setPrice("All"); }}
              className="btn mt-6 bg-pink-100 text-pink-600 border-none rounded-full px-8 hover:bg-pink-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}