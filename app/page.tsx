import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseCategories from "./components/CoursesCategories";
import Achievements from "./components/Achievements";
import Courses from "./components/Courses";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Hero></Hero>
      <CourseCategories></CourseCategories>
      <Achievements></Achievements>
      <Courses></Courses>
      <Team></Team>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}
