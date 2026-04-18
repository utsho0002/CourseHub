"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
// ✅ Highly stable import
import { FaArrowLeft, FaStar, FaCheckCircle, FaTag, FaInfinity, FaCertificate, FaHeadset } from "react-icons/fa";

export default function ItemDetails() {
  const params = useParams();
  const courseID = params?.id;
  const router = useRouter();

  const [item, setItem] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.find((i) => i.id == courseID);
        setItem(foundItem);

        if (foundItem) {
          const relatedItems = data.filter(
            (i) =>
              i.category === foundItem.category &&
              i.id != courseID
          );
          setRelated(relatedItems);
        }
        setLoading(false);
      });
  }, [courseID]);

  // Premium Loading State
  if (loading || !item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <span className="loading loading-ring loading-lg text-pink-500 mb-4"></span>
        <p className="text-pink-400 font-bold animate-pulse tracking-widest uppercase">Loading Course...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* 🧾 Main Details Card */}
        <div className="bg-white rounded-[2.5rem] p-4 md:p-7 shadow-2xl shadow-pink-100/40 border border-pink-50 flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-200/50 border-4 border-white group">
              <img
                src={item.img || "https://placehold.co/800x600/ffe4e6/be185d?text=Course+Image"}
                alt={item.title}
                className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-black text-pink-600 shadow-sm flex items-center gap-2">
                <FaTag /> {item.category}
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                <FaStar className="text-amber-400 text-lg" />
                <span className="font-extrabold text-amber-700">{item.rating || "4.8"}</span>
              </div>
              <span className="text-sm text-gray-400 font-medium">(1.2k+ Reviews)</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-4 leading-tight">
              {item.title}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {item.desc}
            </p>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-pink-50/50 p-6 rounded-3xl border border-pink-100 mb-8 gap-4">
              <div>
                <p className="text-sm text-pink-400 font-bold uppercase tracking-wider mb-1">One-time payment</p>
                <div className="text-5xl font-black text-gray-800 tracking-tight">
                  ${item.price}
                </div>
              </div>
              <button className="btn w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-none rounded-2xl px-10 h-14 text-lg shadow-xl shadow-pink-300/40 hover:scale-105 transition-all">
                Enroll Now
              </button>
            </div>

            {/* 📦 Specifications List */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-pink-400" /> What's Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50 p-3 rounded-xl">
                  <FaInfinity className="text-pink-400 text-xl" /> Full lifetime access
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50 p-3 rounded-xl">
                  <FaCertificate className="text-pink-400 text-xl" /> Certificate of completion
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50 p-3 rounded-xl">
                  <FaHeadset className="text-pink-400 text-xl" /> Expert instructor support
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 🔗 Related Items */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-lg">✨</span>
              Related Courses
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.slice(0, 3).map((r) => (
                <div 
                  key={r.id} 
                  className="card bg-white border border-pink-50 shadow-lg shadow-pink-100/40 hover:shadow-2xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden group flex flex-col h-full"
                >
                  <figure className="relative h-48 overflow-hidden bg-pink-50">
                    <img 
                      src={r.img || "https://placehold.co/600x400/ffe4e6/be185d?text=Course"} 
                      alt={r.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-pink-600 shadow-sm border border-pink-100">
                      {r.category || "Course"}
                    </div>
                  </figure>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium line-clamp-2 mb-6 flex-grow">
                      {r.desc}
                    </p>

                    <Link href={`/courses/${r.id}`} className="w-full mt-auto">
                      <button className="btn w-full bg-pink-50 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white border-none rounded-xl font-bold shadow-sm transition-all duration-300">
                        View Course
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}