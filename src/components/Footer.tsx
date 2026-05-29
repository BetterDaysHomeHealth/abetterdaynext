import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/logo.jpg"
              alt="Better Days Home Health"
              width={160}
              height={64}
              className="footer-logo-img"
            />
            <p>
              A Virginia Department of Health-licensed home care agency committed to delivering
              compassionate personal care throughout Hampton Roads.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Personal Care Aides (PCA)</Link></li>
              <li><Link href="/services">Certified Nursing Assistants (CNA)</Link></li>
              <li><Link href="/services">Home Health Aides (HHA)</Link></li>
              <li><Link href="/services">Meal Preparation</Link></li>
              <li><Link href="/services">Companionship &amp; Support</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/insurance">Insurance &amp; Coverage</Link></li>
              <li><Link href="/careers">Careers &mdash; Apply Now</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="tel:7577157829">(757) 715-7829</Link></li>
              <li><Link href="mailto:admin@abetterdayforyou.com">admin@abetterdayforyou.com</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>For Agencies</h4>
            <ul>
              <li>
                <a href="https://homehealthhub.care" target="_blank" rel="noopener">
                  Home Health Hub
                </a>
              </li>
              <li>
                <a href="https://homehealthhub.care" target="_blank" rel="noopener">
                  Agency Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Better Days Home Health. All rights reserved.
            &nbsp;&middot;&nbsp; Virginia DOH Licensed Home Health Agency
          </span>
        </div>
      </div>
    </footer>
  );
}
