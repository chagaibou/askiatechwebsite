"use client"; // Nécessaire pour l'état du menu mobile
import Image from "next/image";
import Link from "next/link"; // Importez Link pour la navigation interne
import { useState } from "react";
import { Inter, Roboto } from "next/font/google";
import { Menu, X } from "lucide-react"; // Pensez à faire : pnpm add lucide-react
import "./globals.css";
import ContactModal from '@/components/ContactModal';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="fr" className={`${inter.variable} ${roboto.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans">
        
        {/* HEADER RESPONSIVE */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity">
              <div className="relative w-32 h-32 md:w-42 md:h-42">
                <Image
                  src="/logo.png" // Remplacez par votre vrai nom de fichier dans /public
                  alt="Logo ASKIA-Tech"
                  fill
                  className="object-contain"
                  priority // Charge le logo immédiatement (LCP optimization)
                />
              </div>
              <span className="hidden xs:block font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
                ASKIA<span className="text-accent">-Tech</span>
              </span>
        </Link>

            {/* LINKS DESKTOP (Cachés sur mobile) */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <a href="/" className="hover:text-accent transition-colors text-sm lg:text-base">Accueil</a>
              <a href="/services" className="hover:text-accent transition-colors text-sm lg:text-base">Services</a>
              <a href="/about" className="hover:text-accent transition-colors text-sm lg:text-base">À propos</a>
              <a href="/formations" className="hover:text-accent transition-colors text-sm lg:text-base">Formations</a>
              <a href="/realisations" className="hover:text-accent transition-colors text-sm lg:text-base">Réalisations</a>
            </nav>

            {/* BOUTON CONTACT (Caché sur petit mobile, visible dès 'sm') */}
            <button className="hidden sm:block bg-accent text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-lg shadow-accent/20">
              Contact
            </button>

            {/* BOUTON BURGER (Visible uniquement sur mobile) */}
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MENU MOBILE (Overlay) */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-xl animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col p-6 gap-4 font-heading font-bold text-lg">
                <a href="/" onClick={() => setIsMenuOpen(false)}>Accueil</a>
                <a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="/about" onClick={() => setIsMenuOpen(false)}>À propos</a>
                <a href="/realisations" onClick={() => setIsMenuOpen(false)}>Réalisations</a>
                <button className="bg-accent text-white w-full py-3 rounded-xl mt-2">
                  Contactez-nous
                </button>
              </nav>
            </div>
          )}
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-primary text-white pt-16 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      
      {/* Colonne 1 : Identité */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-primary font-bold">
            A
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">
            ASKIA<span className="text-accent">-Tech</span>
          </span>
        </div>
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          L'intelligence d'hier, la technologie d'aujourd'hui. 
          Expertise en transformation digitale et formation à Bamako.
        </p>
      </div>

      {/* Colonne 2 : Liens de Navigation */}
      <div>
        <h4 className="font-heading font-bold text-lg mb-6 text-accent">Navigation</h4>
        <nav className="flex flex-col gap-4">
          <a href="/" className="text-white/80 hover:text-white transition-colors text-sm">Accueil</a>
          <a href="/services" className="text-white/80 hover:text-white transition-colors text-sm">Services</a>
          <a href="/about" className="text-white/80 hover:text-white transition-colors text-sm">À propos</a>
          <a href="/realisations" className="text-white/80 hover:text-white transition-colors text-sm">Réalisations</a>
        </nav>
      </div>

      {/* Colonne 3 : Contact */}
      <div>
        <h4 className="font-heading font-bold text-lg mb-6 text-accent">Contact</h4>
        <ul className="space-y-4 text-sm text-white/80">
          <li className="flex items-center gap-3">
            <span className="text-accent font-bold">Tél:</span> 
            <a href="tel:+22399640404" className="hover:text-white transition-colors underline decoration-accent/30 underline-offset-4">
              +223 99 64 04 04
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-accent font-bold">Mail:</span> 
            <a href="mailto:contact@askia-tech.com" className="hover:text-white transition-colors underline decoration-accent/30 underline-offset-4">
              contact@askia-tech.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold shrink-0">Adresse:</span> 
            <span>Faladiè Rue du Gouverneur, Bamako, Mali</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Ligne de copyright finale */}
    <div className="pt-8 border-t border-white/10 text-center text-xs text-white/40">
      <p>© {new Date().getFullYear()} ASKIA-Tech. Tous droits réservés.</p>
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}