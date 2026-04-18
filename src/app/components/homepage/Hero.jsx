export default function Hero() {
  return (
    <div className="hero min-h-[80vh] bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      
      {/* Decorative blurred background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      <div className="hero-content text-center relative z-10 px-4">
        <div className="max-w-2xl">
          
          {/* Optional decorative badge */}
          <div className="inline-block mb-6">
            <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm border border-pink-200">
              🚀 Welcome to CourseHub
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2 drop-shadow-sm">
            Learn Without Limits
          </h1>
          
          <p className="py-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl mx-auto">
            Master skills with top instructors worldwide. Start your journey today and unlock your full potential. ✨
          </p>
          
          <button className="btn bg-gradient-to-r from-pink-500 to-rose-500 text-white border-none rounded-full px-12 h-14 text-lg font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all transform hover:-translate-y-1 hover:scale-105">
            Explore Courses
          </button>
          
        </div>
      </div>
    </div>
  );
}