import "./Footer.css"

function Footer () {
    return(
        <>
       
         <footer class="footer-container">
  <div class="footer-top">
    <div class="footer-logo-section">
      <h2 class="footer-logo">Webkul</h2>
      <p class="footer-tagline">An open source initiative by Webkul</p>
    </div>

    <div class="footer-social">
      <a href="#" class="footer-social-icon">F</a>
      <a href="#" class="footer-social-icon">X</a>
      <a href="#" class="footer-social-icon">in</a>
      <a href="#" class="footer-social-icon">I</a>
      <a href="#" class="footer-social-icon">Y</a>
    </div>
  </div>

  <hr class="footer-divider">

  <div class="footer-links">

    <div class="footer-column">
      <h3 class="footer-heading">Company</h3>
      <ul class="footer-list">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Bagisto Features</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">CSR</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3 class="footer-heading">Quick Links</h3>
      <ul class="footer-list">
        <li><a href="#">Blog</a></li>
        <li><a href="#">Download</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">User Documentation</a></li>
        <li><a href="#">Releases</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3 class="footer-heading">Extensions</h3>
      <ul class="footer-list">
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Headless eCommerce</a></li>
        <li><a href="#">Progressive Web App</a></li>
        <li><a href="#">B2B</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3 class="footer-heading">eCommerce Stores</h3>
      <ul class="footer-list">
        <li><a href="#">Fashion Commerce</a></li>
        <li><a href="#">Quick Commerce</a></li>
        <li><a href="#">Vape Commerce</a></li>
        <li><a href="#">Jewellery Platform</a></li>
        <li><a href="#">View All Industries</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3 class="footer-heading">Services</h3>
      <ul class="footer-list">
        <li><a href="#">Bagisto Services</a></li>
        <li><a href="#">Laravel Development</a></li>
        <li><a href="#">Virtual Try-On</a></li>
        <li><a href="#">Conversational Commerce</a></li>
        <li><a href="#">Vape Development</a></li>
      </ul>
    </div>

  </div>
  </hr>
</footer>

        </>
    )
}

export default Footer;