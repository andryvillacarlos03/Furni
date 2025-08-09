import Footer from "@/Components/Landing/Footer";
import MyNavbar from "@/Components/Landing/Nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <MyNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
