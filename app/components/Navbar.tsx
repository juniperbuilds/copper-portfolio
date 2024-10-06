"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-background'
    }`}>
      <div className="container flex h-14 items-center justify-end">
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}