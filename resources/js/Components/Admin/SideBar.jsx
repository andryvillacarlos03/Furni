import React, { useState } from "react";

const Sidebar = ({ isOpen }) => {
  const [collapseTwoOpen, setCollapseTwoOpen] = useState(false);
  const [collapseUtilitiesOpen, setCollapseUtilitiesOpen] = useState(false);
  const [collapsePagesOpen, setCollapsePagesOpen] = useState(false);

  const toggleCollapseTwo = () => setCollapseTwoOpen(!collapseTwoOpen);
  const toggleCollapseUtilities = () => setCollapseUtilitiesOpen(!collapseUtilitiesOpen);
  const toggleCollapsePages = () => setCollapsePagesOpen(!collapsePagesOpen);

  return (
     <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        isOpen ? "" : "toggled"
      }`}
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      {/* Components */}
      <li className="nav-item">
        <a
          href="#!"
          className="nav-link collapsed"
          onClick={e => {
            e.preventDefault();
            toggleCollapseTwo();
          }}
          aria-expanded={collapseTwoOpen}
        >
            <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div className={`collapse ${collapseTwoOpen ? "show" : ""}`}>
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
          </div>
        </div>
      </li>

      {/* Utilities */}
      <li className="nav-item">
        <a
          href="#!"
          className="nav-link collapsed"
          onClick={e => {
            e.preventDefault();
            toggleCollapseUtilities();
          }}
          aria-expanded={collapseUtilitiesOpen}
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div className={`collapse ${collapseUtilitiesOpen ? "show" : ""}`}>
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">Colors</a>
            <a className="collapse-item" href="utilities-border.html">Borders</a>
            <a className="collapse-item" href="utilities-animation.html">Animations</a>
            <a className="collapse-item" href="utilities-other.html">Other</a>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Addons</div>

      {/* Pages */}
      <li className="nav-item">
        <a
          href="#!"
          className="nav-link collapsed"
          onClick={e => {
            e.preventDefault();
            toggleCollapsePages();
          }}
          aria-expanded={collapsePagesOpen}
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div className={`collapse ${collapsePagesOpen ? "show" : ""}`}>
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-card d-none d-lg-flex">
        <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features, components, and more!
        </p>
        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
};

export default Sidebar;
