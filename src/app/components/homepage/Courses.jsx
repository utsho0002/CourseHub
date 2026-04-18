import { FaCode, FaBrain, FaPaintRoller } from "react-icons/fa6";

export default function Courses() {
  const courses = [
    { title: "Web Development", price: "$49" },
    { title: "Machine Learning", price: "$79" },
    { title: "UI/UX Design", price: "$39" },
  ];

  // Array of React Icons to match the courses visually
  const icons = [
    <FaCode key="web" />,
    <FaBrain key="ml" />,
    <FaPaintRoller key="ui" />
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-sm font-extrabold text-pink-400 uppercase tracking-widest mb-2">
            Unlock Your Potential
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2">
            Popular Courses
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div 
              key={i} 
              className="card bg-white border border-pink-100 shadow-xl shadow-pink-100/40 hover:shadow-2xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-300 rounded-3xl group flex flex-col"
            >
              <div className="card-body p-8 flex flex-col h-full">
                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-2xl text-pink-500 group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:to-rose-500 group-hover:text-white transition-all duration-300 shadow-sm border border-pink-100">
                    {icons[i]}
                  </div>
                  <span className="bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Bestseller
                  </span>
                </div>

                {/* Course Details */}
                <h3 className="card-title text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                  {c.title}
                </h3>
                
                <div className="flex items-baseline gap-1 mt-auto pt-4">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 drop-shadow-sm">
                    {c.price}
                  </span>
                </div>

                {/* Call to Action */}
                <button className="btn w-full mt-6 bg-pink-50 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white border-none rounded-full font-bold shadow-sm transition-all duration-300 text-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}