import Footer from "@/Components/Landing/Footer";
import MyNavbar from "@/Components/Landing/Nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <MyNavbar />
      <main>
        {typeof children === "function" ? children() : children}
      </main>
      <Footer />
    </div>
  );
}
