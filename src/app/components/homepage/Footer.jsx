import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 border-t border-pink-100 pt-16 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 inline-block w-max">
              ✨ CourseHub
            </Link>
            <p className="text-gray-500 font-medium leading-relaxed">
              Empowering learners worldwide to master new skills with top-tier instructors. Learn without limits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-800 uppercase tracking-wider mb-2">Explore</h3>
            <Link href="/" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">Home</Link>
            <Link href="/courses" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">All Courses</Link>
            <Link href="/about" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">About Us</Link>
            <Link href="/mentors" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">Mentors</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-800 uppercase tracking-wider mb-2">Legal</h3>
            <Link href="/privacy" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">Terms of Service</Link>
            <Link href="/contact" className="text-gray-500 hover:text-pink-500 transition-colors font-medium">Contact Support</Link>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800 uppercase tracking-wider">Stay Updated</h3>
            <p className="text-gray-500 font-medium text-sm">
              Subscribe to our newsletter for the latest courses and offers.
            </p>
            <div className="relative mt-1">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full pr-12 rounded-full border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all bg-white"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white w-9 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-200 to-transparent mb-6"></div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm">
            © {new Date().getFullYear()} CourseHub. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-500 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-300 transition-all shadow-sm">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-500 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-300 transition-all shadow-sm">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-500 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-300 transition-all shadow-sm">
              <FaGithub className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-gray-500 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-300 transition-all shadow-sm">
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}