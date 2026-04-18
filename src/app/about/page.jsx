import Link from "next/link";
import { FaRocket, FaHeart, FaGlobe, FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-pink-50/40 py-20 px-4 md:px-8 flex items-center justify-center">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* 📝 Text Section */}
        <div className="flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-500 font-bold text-sm tracking-wide uppercase mb-6 w-max">
            Our Story
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Learning designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">the future.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
            CourseHub is a modern course management platform built to help students learn new skills efficiently. We provide structured, high-quality courses with real-world projects and seamless navigation.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
            Our goal is to make learning simple, accessible, and affordable for everyone around the world. Whether you're starting from scratch or leveling up your career, we're here to guide you.
          </p>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 border-t border-b border-pink-100 py-8">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-xl text-pink-500 mb-3 group-hover:scale-110 transition-transform">
                <FaRocket />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Fast Learning</h4>
              <p className="text-sm text-gray-400">Structured for speed</p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-xl text-pink-500 mb-3 group-hover:scale-110 transition-transform">
                <FaHeart />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Passionate</h4>
              <p className="text-sm text-gray-400">Built by educators</p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-xl text-pink-500 mb-3 group-hover:scale-110 transition-transform">
                <FaGlobe />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Accessible</h4>
              <p className="text-sm text-gray-400">Available worldwide</p>
            </div>
          </div>

          <div>
            <Link href="/courses" className="btn bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-none rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-pink-200/50 hover:scale-105 transition-all flex items-center gap-2 w-max">
              Explore Courses <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>

        {/* 🖼️ Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Decorative frame behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-rose-100 rounded-[3rem] transform rotate-3 scale-105 -z-10 shadow-xl shadow-pink-100"></div>
          
          <div className="relative group rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
              alt="Students learning together"
              className="w-full max-w-md object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-pink-50 flex items-center gap-4 animate-bounce hover:animate-none">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                10k+
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Active</p>
                <p className="text-lg font-black text-gray-800 leading-none">Students</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}