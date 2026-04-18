import { FaQuoteLeft } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Frontend Developer at TechCorp",
      quote: "The Web Development course was a game-changer. I landed my first dev job three months after finishing!",
      image: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Rivera",
      role: "Freelance UI/UX Designer",
      quote: "Absolutely loved the UI/UX design path. The instructors are clearly experts and provide amazing feedback.",
      image: "https://i.pravatar.cc/150?u=alex",
      rating: 5,
    },
    {
      id: 3,
      name: "Chloe Chen",
      role: "Data Scientist",
      quote: "The Machine Learning module broke down complex concepts into manageable pieces. Highly recommended!",
      image: "https://i.pravatar.cc/150?u=chloe",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative blurred blob for background interest */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-100/40 rounded-full mix-blend-multiply filter blur-[150px] opacity-70"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold text-pink-400 uppercase tracking-widest mb-2">
            Success Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 pb-2">
            What Our Students Say
          </h3>
          <p className="py-4 text-gray-500 max-w-lg mx-auto font-medium">
            Hear directly from the community about how CourseHub helped them achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="card bg-white border border-pink-50 shadow-2xl shadow-pink-100/30 hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-300 rounded-3xl group"
            >
              <div className="card-body p-10 relative">
                {/* Replaced Icon Here */}
                <FaQuoteLeft className="text-8xl text-pink-500/10 absolute top-6 left-6" />

                {/* Star Rating - DaisyUI rating component with custom stars */}
                <div className="rating rating-sm mb-6 flex gap-0.5 relative z-10">
                  {[...Array(5)].map((_, index) => (
                    <AiFillStar 
                      key={index} 
                      className={`text-xl ${index < t.rating ? 'text-amber-400' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic text-lg leading-relaxed relative z-10 mb-8 flex-grow font-medium">
                  "{t.quote}"
                </p>
                
                {/* Divider Line */}
                <div className="divider my-1 opacity-50"></div>

                {/* Student Info with Image */}
                <div className="flex items-center gap-4 pt-4 mt-auto">
                  <div className="avatar ring ring-pink-100 ring-offset-base-100 ring-offset-2 rounded-full shadow-md group-hover:ring-pink-300 transition-all">
                    <div className="w-16 h-16 rounded-full">
                      <img src={t.image} alt={t.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800 text-lg group-hover:text-pink-600 transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-sm text-pink-400 font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}