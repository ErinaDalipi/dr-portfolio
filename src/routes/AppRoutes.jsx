import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Experience from "../pages/Experience";
import Testimonials from "../pages/Testimonials";
import Footer from "../components/Footer";

function AppRoutes() {
    return (
        <div className="min-h-screen bg-white text-slate-800">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Experience />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default AppRoutes;