import dynamic from "next/dynamic";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { recipes } from "@/app/lib/data";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";

// Dynamically import the Hero component (client component)
const Hero = dynamic(() => import("@/app/components/Hero"), { ssr: false });

export default function HomePage() {
    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <Header />
            <Hero recipes={recipes} /> {/* Pass the recipes array directly */}
            <Testimonial />
            <Gallery />
            <Footer />
        </div>
    );
}