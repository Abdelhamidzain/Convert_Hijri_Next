'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTodayDates } from '@/lib/hijriConverter';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(1446); // Default static year
  const pathname = usePathname();
  
  // Set the actual year only on client side to avoid hydration mismatch
  useEffect(() => {
    const { hijri } = getTodayDates();
    setCurrentYear(hijri.year);
  }, []);
  
  const isActive = (path: string) => pathname === path;
  
  const navLinks = [
    { href: '/', label: 'تحويل التاريخ', title: 'محول التاريخ الهجري والميلادي' },
    { href: '/date/today', label: 'تاريخ اليوم', title: 'تاريخ اليوم هجري وميلادي' },
    { href: `/calendar/${currentYear}`, label: `التقويم ${currentYear}`, title: `التقويم الهجري ${currentYear}` },
    { href: '/how-old-am-i/hijri', label: 'حساب العمر', title: 'حساب العمر بالهجري والميلادي' },
  ];
  
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-bold text-lg text-primary hover:text-primary/80 transition-colors"
            title="محول التاريخ الهجري - الصفحة الرئيسية"
          >
            محول التاريخ
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.title}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="القائمة"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
