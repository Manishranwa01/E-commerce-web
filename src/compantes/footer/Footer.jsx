import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://bagisto.com/wp-content/themes/bagisto/images/webp/webkul-logo.webp"
            alt="Webkul"
            className="footer-logo"
          />
          <p className="footer-tagline">
            An open source <br />
            initiative by <a href="#">Webkul</a>
          </p>
        </div>

        <div className="footer-social">
          <a href="#"><TiSocialFacebook /></a>
          <a href="#"><TiSocialTwitter /></a>
          <a href="#"><TiSocialInstagram /></a>
          <a href="#"><CiLinkedin /></a>
          <a href="#"><TiSocialYoutube /></a>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Bagisto Features</li>
            <li>Partners</li>
            <li>Events</li>
            <li>CSR</li>
            <li>Press</li>
            <li>Case Studies</li>
            <li>Customer Showcase</li>
            <li>Testimonials</li>
            <li>Podcast</li>
            <li>Brand Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li>Blog</li>
            <li>Download</li>
            <li>Documentation</li>
            <li>User Documentation</li>
            <li>Releases</li>
            <li>Benchmarking Report</li>
            <li>Security Report</li>
            <li>Support Forum</li>
            <li>Roadmap</li>
            <li>FB Community</li>
            <li>SaaSHub Status</li>
            <li>Open Source CRM</li>
            <li>Open Source PIM</li>
            <li>Open Source ERP</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Extensions</h4>
          <ul>
            <li>Marketplace</li>
            <li>Headless eCommerce</li>
            <li>Progressive Web App</li>
            <li>B2B</li>
            <li>Point of Sale</li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Live Stream Commerce</li>
            <li>Open Source Mobile App</li>
            <li>Multi Tenant SaaS</li>
            <li>View All Extensions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">eCommerce Stores</h4>
          <ul>
            <li>Fashion Commerce</li>
            <li>Quick Commerce</li>
            <li>Vape Commerce</li>
            <li>Jewellery Platform</li>
            <li>View All Industries</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Services</h4>
          <ul>
            <li>Bagisto Services</li>
            <li>Laravel Development</li>
            <li>Virtual Try-On</li>
            <li>Conversational Commerce</li>
            <li>Vape Commerce Dev</li>
            <li>Bookstore Website Development</li>
            <li>Migration Services</li>
            <li>Jewellery Website Development</li>
            <li>Speed Optimization Services</li>
            <li>Integration Services</li>
            <li>Theme Development Services</li>
            <li>Support and Maintenance Services</li>
            <li>Consulting Services</li>
            <li>Custom Extension Development Services</li>
            <li>Mobile App Development Services</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;