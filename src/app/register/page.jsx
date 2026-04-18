"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
      alert("User registered!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-pink-50/40 flex items-center justify-center p-4">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -translate-x-1/3 translate-y-1/3"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-pink-100/50 border border-pink-50 p-8 sm:p-10">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <FaUserPlus className="text-3xl text-pink-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Join us today to start your learning journey!
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          
          {/* Email Input */}
          <div>
            <label className="text-sm font-bold text-gray-700 mb-2 block">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="hello@example.com"
                className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-sm font-bold text-gray-700 mb-2 block">Password</label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="input w-full pl-11 bg-pink-50/30 border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all rounded-xl text-gray-800 font-medium"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-none rounded-xl h-14 text-lg font-bold shadow-xl shadow-pink-200/50 hover:scale-[1.02] transition-transform mt-2"
          >
            Register Now
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 font-medium mt-8 border-t border-pink-50 pt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-600 font-bold hover:text-rose-500 hover:underline transition-colors">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}