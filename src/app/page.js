import Image from "next/image";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import Features from "./components/homepage/Features";
import Courses from "./components/homepage/Courses";
import Testimonials from "./components/homepage/Testimonials";
import Footer from "./components/homepage/Footer";

export default function Home() {
  return (
<div>
  <Navbar></Navbar>
  <Hero></Hero>
  <Features></Features>
  <Courses></Courses>
  <Testimonials></Testimonials>
  <Footer></Footer>
</div>
  );
}
