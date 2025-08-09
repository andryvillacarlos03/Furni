
import "../../../../public/Landing_Assets/css/tiny-slider.css";
import "../../../../public/Landing_Assets/css/style.css";
import BlogSection from "@/Components/Landing/BlogSection";

import useDynamicLink from "@/Utils/Utils";
import TestimonialSection from "@/Components/Landing/Testimonial";
import MainLayout from "@/Layouts/LandingLayout";

function Blog(){
  useDynamicLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    return(
        <>
 
        <BlogSection/>
        <TestimonialSection/>
  
        </>
    );
}
Blog.layout = (pages) => <MainLayout>{pages}</MainLayout>

export default Blog;