import "../../../../public/Landing_Assets/css/tiny-slider.css";
import "../../../../public/Landing_Assets/css/style.css";


import Hero from "@/Components/AboutPage/Hero";
import WhyChooseSection from "@/Components/Landing/WhyChooseAs";
import TestimonialSection from "@/Components/Landing/Testimonial";
import OurTeam from "@/Components/AboutPage/OurTeam";
import useDynamicLink from "@/Utils/Utils";
import MainLayout from "@/Layouts/LandingLayout";



function About(){
      useDynamicLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    return(
    <>
   
        <Hero/>
        <WhyChooseSection/>
        <OurTeam/>
        <TestimonialSection/>
   
     </>
    );
}

About.layout = (pages) => <MainLayout>{pages}</MainLayout>

export default About;