import { Link, usePage } from "@inertiajs/react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { route } from "ziggy-js";

export default function MyNavbar() {
  const { url } = usePage();

  const isActive = (path) => url.startsWith(path);

  return (
    <Navbar expand="md" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Furni<span>.</span>
        </Navbar.Brand>

        {/* Collapse button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Collapsible navigation links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto mb-2 mb-md-0">
            <Nav.Link as={Link} href={route("page.home")} active={isActive("/home")}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href={route("page.about")} active={isActive("/about")}>
              About us
            </Nav.Link>
            <Nav.Link as={Link} href={route("page.service")} active={isActive("/services")}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} href={route("page.blog")} active={isActive("/blog")}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href={route("page.contact")} active={isActive("/contact")}>
              Contact us
            </Nav.Link>
          </Nav>

          <Nav className="ms-md-5">
            <Nav.Link as={Link} href={route("login")}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
