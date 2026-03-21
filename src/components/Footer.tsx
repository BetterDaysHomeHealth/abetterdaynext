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
              A Virginia Department of Health-licensed home health agency committed to delivering
              compassionate, skilled, and personal care throughout Hampton Roads.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Skilled Nursing (RN / LPN)</Link></li>
              <li><Link href="/services">Physical Therapy (PT)</Link></li>
              <li><Link href="/services">Occupational Therapy (OT)</Link></li>
              <li><Link href="/services">Personal Care (PCA / CNA / HHA)</Link></li>
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
