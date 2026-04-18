import { FiClock, FiAward } from "react-icons/fi";
import { FaUserGraduate, FaTags } from "react-icons/fa6";

export default function Features() {
  const features = [
    { title: "Expert Mentors", desc: "Learn from industry experts" },
    { title: "Flexible Learning", desc: "Study anytime" },
    { title: "Certification", desc: "Get certified" },
    { title: "Affordable", desc: "Best pricing" },
  ];

  // Array of React Icons matching the features
  const icons = [
    <FaUserGraduate key="mentors" />,
    <FiClock key="flexible" />,
    <FiAward key="certification" />,
    <FaTags key="affordable" />
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-sm font-extrabold text-pink-400 uppercase tracking-widest mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2">
            Awesome Features
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="card bg-white border border-pink-50 shadow-lg shadow-pink-100/40 hover:shadow-2xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-300 ease-out group rounded-3xl"
            >
              <div className="card-body items-center text-center p-8">
                {/* Floating React Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center text-3xl text-pink-500 mb-4 group-hover:scale-110 group-hover:text-rose-600 transition-all duration-300 group-hover:-rotate-3 shadow-sm border border-white">
                  {icons[i]}
                </div>
                
                <h3 className="card-title text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  {f.title}
                </h3>
                
                <p className="text-gray-500 font-medium mt-1 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}