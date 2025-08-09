import "../../../../public/Landing_Assets/css/tiny-slider.css";
import "../../../../public/Landing_Assets/css/style.css";
import useDynamicLink from "@/Utils/Utils";
import Hero from "@/Components/Landing/Hero";
import ProductSection from "@/Components/Landing/ProductSection";
import WhyChooseSection from "@/Components/Landing/WhyChooseAs";
import WeHelpSection from "@/Components/Landing/HelpSection";
import PopularProduct from "@/Components/Landing/PopularProducts";
import TestimonialSection from "@/Components/Landing/Testimonial";
import BlogSection from "@/Components/Landing/BlogSection";
import MainLayout from "@/Layouts/LandingLayout";

function LandingPage() {
  useDynamicLink(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  );

  return (
    <>
      <Hero />
      <ProductSection />
      <WhyChooseSection />
      <WeHelpSection />
      <PopularProduct />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}

// Assign the layout
LandingPage.layout = (page) => <MainLayout>{page}</MainLayout>;

export default LandingPage;
