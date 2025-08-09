import "../../../../public/Landing_Assets/css/tiny-slider.css";
import "../../../../public/Landing_Assets/css/style.css";
import useDynamicLink from "@/Utils/Utils";
import MyNavbar from "@/Components/Landing/Nav";
import Footer from "@/Components/Landing/Footer";
import ContactHero from "@/Components/Contact/Hero";
import ContactSection from "@/Components/Contact/ContactSection";
import MainLayout from "@/Layouts/LandingLayout";


 function Contact(){
    useDynamicLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    return(
        <>
  
        <ContactHero/>
        <ContactSection/>

        </>
    );
}

Contact.layout = (pages) => <MainLayout>{pages}</MainLayout>

export default Contact;