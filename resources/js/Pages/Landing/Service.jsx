import "../../../../public/Landing_Assets/css/tiny-slider.css";
import "../../../../public/Landing_Assets/css/style.css";
import useDynamicLink from "@/Utils/Utils";
import HeroSection from "@/Components/Services/Hero";
import WhyChooseSection from "@/Components/Landing/WhyChooseAs";
import ProductSection from "@/Components/Landing/ProductSection";
import TestimonialSection from "@/Components/Landing/Testimonial";
import MainLayout from "@/Layouts/LandingLayout";


 function Services(){
    useDynamicLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    return(
        <>
    
        <HeroSection/>
        <WhyChooseSection/>
        <ProductSection/>
        <TestimonialSection/>

        </>
    );
}
Services.layout = (pages) => <MainLayout>{pages}</MainLayout>

export default Services;