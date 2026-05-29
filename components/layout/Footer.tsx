import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/connect", label: "Connect" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Church Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-2">Restoration Church</h3>
            <p className="text-blue-300 text-sm mb-6 italic">Come Home. Find Life.</p>
            <address className="not-italic text-sm text-blue-200 space-y-1">
              <p>425 Church Street NW</p>
              <p>Huntsville, AL 35801</p>
              <p className="pt-2">
                <a href="tel:+12565550143" className="hover:text-white transition-colors">
                  (256) 555-0143
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@restorationchurchhsv.org"
                  className="hover:text-white transition-colors break-all"
                >
                  info@restorationchurchhsv.org
                </a>
              </p>
            </address>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.55 12 19.55 12 19.55s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />
                  <polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Service Times</h3>
            <ul className="space-y-5 text-sm text-blue-200">
              <li>
                <p className="text-white font-semibold mb-1">Sunday Mornings</p>
                <p>9:00 AM — Traditional Service</p>
                <p>11:00 AM — Contemporary Service</p>
              </li>
              <li>
                <p className="text-white font-semibold mb-1">Wednesday Evenings</p>
                <p>6:30 PM — Midweek Gathering</p>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-blue-800">
              <p className="text-blue-200 text-sm">
                <span className="text-white font-semibold">Location</span>
                <br />
                425 Church Street NW<br />
                Huntsville, AL 35801
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} Restoration Church Huntsville. All rights reserved.
          </p>
          <p className="text-xs text-blue-300">
            Site by <span className="text-white">Yellowhammer Studios</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
