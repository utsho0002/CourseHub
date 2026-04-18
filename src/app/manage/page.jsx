"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaEye, FaTrash, FaInbox, FaCube } from "react-icons/fa";

export default function ManageItems() {
  const [items, setItems] = useState([]);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
  };

  // Authentication Checking
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Premium Loading State
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
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-500 font-bold text-sm tracking-wide uppercase mb-4 shadow-sm">
              Admin Dashboard
            </div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2">
              Manage Courses
            </h1>
            <p className="text-gray-500 font-medium mt-1">
              View, edit, and organize your course inventory.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-pink-50">
            <FaCube className="text-pink-400 text-xl" />
            <span className="font-bold text-gray-700">Total Items:</span>
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-black text-sm">
              {items.length}
            </span>
          </div>
        </div>

        {/* 📋 Data Table Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-pink-100/40 border border-pink-50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-gradient-to-r from-pink-50/50 to-rose-50/50 border-b border-pink-100">
                  <th className="py-5 px-6 font-bold text-pink-600 uppercase tracking-wider text-sm w-16">#</th>
                  <th className="py-5 px-6 font-bold text-pink-600 uppercase tracking-wider text-sm">Course Details</th>
                  <th className="py-5 px-6 font-bold text-pink-600 uppercase tracking-wider text-sm w-32">Price</th>
                  <th className="py-5 px-6 font-bold text-pink-600 uppercase tracking-wider text-sm text-center w-48">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {items.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className="hover:bg-pink-50/30 transition-colors border-b border-pink-50/50 last:border-none group"
                  >
                    <td className="py-4 px-6 text-gray-400 font-semibold">
                      {(index + 1).toString().padStart(2, '0')}
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-pink-100 border-2 border-white shadow-sm flex-shrink-0">
                          <img 
                            src={item.img || "https://placehold.co/100x100/ffe4e6/be185d?text=C"} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg group-hover:text-pink-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-400 font-medium mt-0.5">
                            ID: {item.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="font-black text-gray-700 bg-gray-50 inline-block px-3 py-1.5 rounded-lg border border-gray-100">
                        ${item.price}
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex gap-2 justify-center">
                        <Link
                          href={`/courses/${item.id}`}
                          className="btn btn-sm h-10 px-4 bg-pink-50 hover:bg-pink-500 text-pink-600 hover:text-white border-none rounded-xl shadow-sm transition-all"
                          title="View Course"
                        >
                          <FaEye className="text-lg" />
                        </Link>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-sm h-10 px-4 bg-rose-50 hover:bg-rose-500 text-rose-500 hover:text-white border-none rounded-xl shadow-sm transition-all"
                          title="Delete Course"
                        >
                          <FaTrash className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {items.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                  <FaInbox className="text-4xl text-pink-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
                <p className="text-gray-500 font-medium max-w-sm">
                  Your inventory is currently empty. Add some new courses to see them listed here.
                </p>
                <Link href="/add-course" className="btn mt-6 bg-pink-100 text-pink-600 hover:bg-pink-200 border-none rounded-full px-8">
                  Add New Course
                </Link>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
}