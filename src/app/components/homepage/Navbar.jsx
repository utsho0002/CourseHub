"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="navbar bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white shadow-xl sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        {/* Mobile Hamburger Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-white text-gray-700 rounded-2xl w-52 border border-pink-100 gap-1">
            <li>
              <Link href="/" className="hover:bg-pink-50 hover:text-pink-600 font-medium py-2 rounded-xl transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:bg-pink-50 hover:text-pink-600 font-medium py-2 rounded-xl transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:bg-pink-50 hover:text-pink-600 font-medium py-2 rounded-xl transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <Link 
          href="/" 
          className="btn btn-ghost text-2xl font-extrabold tracking-wide hover:bg-white/20 rounded-full transition-all px-4"
        >
          ✨ CourseHub
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-base">
          <li>
            <Link href="/" className="hover:bg-white/20 hover:text-white rounded-full px-5 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:bg-white/20 hover:text-white rounded-full px-5 transition-all">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-white/20 hover:text-white rounded-full px-5 transition-all">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <>
            <Link 
              href="/login" 
              className="btn bg-white text-pink-500 hover:bg-pink-50 border-none shadow-md rounded-full px-5 md:px-7 font-bold transition-transform transform hover:scale-105"
            >
             Login
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost btn-circle avatar border-2 border-white/40 hover:border-white transition-all ring-offset-2 hover:ring-2 hover:ring-white/50"
            >
              <div className="w-10 rounded-full bg-white flex items-center justify-center text-xl shadow-inner text-pink-400">
                👤
              </div>
            </div>

            <ul 
              tabIndex={0} 
              className="menu menu-sm dropdown-content mt-4 p-3 shadow-2xl bg-white text-gray-700 rounded-2xl w-64 border border-pink-100"
            >
              <div className="px-4 py-3 mb-2 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100 flex flex-col">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Signed in as</span>
                <span className="font-bold text-pink-600 truncate">
                  {user?.email || "User"}
                </span>
              </div>
              
              <li>
                <Link href="/add-course" className="hover:bg-pink-50 hover:text-pink-600 font-medium py-2.5 rounded-xl transition-colors">
                  ➕ Add Product
                </Link>
              </li>
              <li>
                <Link href="/manage" className="hover:bg-pink-50 hover:text-pink-600 font-medium py-2.5 rounded-xl transition-colors">
                  ⚙️ Manage Products
                </Link>
              </li>
              
              <div className="divider my-1 opacity-50"></div>
              
              <li>
                <button 
                  onClick={handleLogout} 
                  className="text-rose-500 hover:bg-rose-50 hover:text-rose-600 font-bold py-2.5 rounded-xl transition-colors flex items-center"
                >
                  👋 Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}