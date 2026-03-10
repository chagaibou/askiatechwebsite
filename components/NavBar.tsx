"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Logo ASKIA-Tech"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden xs:block font-bold text-xl md:text-2xl text-primary tracking-tight">
            ASKIA<span className="text-accent">-Tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/about" className="hover:text-accent transition-colors">À propos</Link>
          <Link href="/formations" className="hover:text-accent transition-colors">Formations</Link>
          <Link href="/realisations" className="hover:text-accent transition-colors">Réalisations</Link>
        </nav>

        <button className="hidden sm:block bg-accent text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform">
          Contact
        </button>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b p-6 flex flex-col gap-4 shadow-xl">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>À propos</Link>
          <button className="bg-accent text-white w-full py-3 rounded-xl">Contactez-nous</button>
        </div>
      )}
    </header>
  );
}