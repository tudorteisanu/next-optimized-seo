'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🚀</span>
          <span className={styles.logoText}>Our Platform</span>
        </Link>
        
        <button 
          className={styles.mobileMenuToggle} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span>{isMenuOpen ? '✕' : '☰'}</span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.routerLinkActive : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`${styles.navLink} ${pathname === '/about' ? styles.routerLinkActive : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/pricing" 
            className={`${styles.navLink} ${pathname === '/pricing' ? styles.routerLinkActive : ''}`}
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.navLink} ${pathname === '/contact' ? styles.routerLinkActive : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
