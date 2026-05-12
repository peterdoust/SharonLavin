'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const serviceLinks = [
  { href: '/services/health', label: 'Health & Wellness' },
  { href: '/services/chronic-illness', label: 'Chronic Illness' },
  { href: '/services/diabetes', label: 'Diabetes Counseling' },
  { href: '/services/children', label: 'Children Psychotherapy' },
  { href: '/services/adolescents', label: 'Adolescent Psychotherapy' },
  { href: '/services/adults', label: 'Adult Psychotherapy' },
  { href: '/services/couples', label: 'Couples Therapy' },
  { href: '/services/parenting', label: 'Parenting' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isServiceActive = () => pathname.startsWith('/services');

  const closeMenu = (isDropdownLink = false) => {
    if (isDropdownLink || !isDropdownLink) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-info">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            21731 Ventura Blvd Ste 160, Woodland Hills, CA 91364
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            speris8809@aol.com
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            (818) 757-7611
          </span>
        </div>
        <Link href="/contact" className="appointment-btn">Request Appointment</Link>
      </div>

      {/* MAIN HEADER */}
      <header>
        <Link href="/" className="logo">
          <div className="logo-icon">S</div>
          <div className="logo-text">
            <h1>Sharon E. Lavin, <span>PSY. D</span></h1>
            <p>Marriage and Family Therapist</p>
          </div>
        </Link>

        <button
          className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''} onClick={() => closeMenu()}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about') ? 'active' : ''} onClick={() => closeMenu()}>
                About Sharon
              </Link>
            </li>
            <li className={`has-dropdown${dropdownOpen ? ' open' : ''}`}>
              <a
                href="#"
                className={isServiceActive() ? 'active' : ''}
                onClick={(e) => {
                  if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    setDropdownOpen((o) => !o);
                  }
                }}
              >
                Specialty Services{' '}
                <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="dropdown-menu">
                {serviceLinks.map((svc) => (
                  <li key={svc.href}>
                    <Link href={svc.href} className={isActive(svc.href) ? 'active' : ''} onClick={() => closeMenu(true)}>
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/blog" className={isActive('/blog') ? 'active' : ''} onClick={() => closeMenu()}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => closeMenu()}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
