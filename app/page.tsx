"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      
      {/* ==========================================
          1. HERO SECTION (Ultra-Slim & Floating)
          ========================================== */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-8 lg:py-12 border-b border-askia-gray/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXTE HERO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4" 
          >
            <div className="inline-block px-3 py-1 rounded-full bg-askia-gray text-askia-blue text-[10px] font-bold uppercase tracking-widest border border-askia-teal/10">
              Expertise Numérique
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-askia-blue leading-tight">
              L'intelligence d'hier, <br />
              <span className="text-askia-teal italic">la technologie</span> d'aujourd'hui.
            </h1>

            <p className="text-sm md:text-base text-slate-500 max-w-sm leading-relaxed font-sans">
              Transformation digitale et formations tech de pointe à Bamako pour propulser votre entreprise.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <button className="bg-askia-blue text-white px-7 py-2.5 rounded-full font-bold hover:shadow-lg transition-all text-xs">
                Nos Services
              </button>
              <button className="text-askia-blue font-bold text-xs hover:text-askia-teal transition-colors flex items-center gap-2">
                En savoir plus <span className="text-lg">→</span>
              </button>
            </div>
          </motion.div>

          {/* IMAGE HERO (Flottante à l'infini) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm aspect-video lg:aspect-[1.4] rounded-xl overflow-hidden shadow-2xl border border-askia-gray bg-white">
              <Image 
                src="/hero.png" 
                alt="ASKIA-Tech"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-3 right-8 bg-white p-2 rounded-lg shadow-md border border-askia-gray flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-askia-teal animate-pulse" />
              <span className="text-[10px] font-bold text-askia-blue uppercase">Live at Bamako</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. SECTION À PROPOS (Clean & Spaced)
          ========================================== */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 lg:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* VISUEL À PROPOS (Apparition au scroll) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-video max-w-md mx-auto">
              {/* Fond décoratif gris */}
              <div className="absolute inset-0 bg-askia-gray rounded-3xl rotate-3 translate-x-3 translate-y-3" />
              {/* Cadre de l'image */}
              <div className="absolute inset-0 bg-white border border-askia-gray rounded-3xl shadow-sm overflow-hidden flex items-center justify-center">
                 <Image 
                src="/apropos_askia.jpg" 
                alt="ASKIA-Tech"
                fill
                className="object-cover"
                priority
              />
              </div>
              {/* Badge flottant */}
              <div className="absolute -top-4 -right-4 bg-askia-teal text-white px-5 py-3 rounded-2xl shadow-xl font-bold">
                <p className="text-2xl leading-none">05+</p>
                <p className="text-[9px] uppercase tracking-tighter">Ans d'expérience</p>
              </div>
            </div>
          </motion.div>

          {/* TEXTE À PROPOS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-3">
              <h2 className="text-askia-teal font-bold text-xs uppercase tracking-[0.2em]">
                Qui sommes-nous ?
              </h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-askia-blue leading-tight">
                Accélérateur de <span className="text-askia-teal">progrès technologique</span> au Mali.
              </h3>
            </div>

            <div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed font-sans">
              <p>
                <strong>ASKIA-Tech </strong>est né d'une volonté forte : former les jeunes et les professionnels 
                aux métiers du numérique en leur offrant des formations de haute qualité, résolument orientées vers la pratique.
                 Nous sommes le partenaire stratégique des entreprises, 
                ONG et institutions dans leur quête de transformation digitale.
              </p>
              <p>
                <strong>Notre Mission </strong>: Façonner la future génération de talents en Informatique et en Intelligence Artificielle en Afrique. 
                Nous nous engageons à fournir des solutions technologiques innovantes,
                 conçues pour être parfaitement adaptées à nos réalités locales.

              </p>
            </div>

            {/* Points clés en grille */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Innovation", text: "Solutions de pointe" },
                { label: "Formation", text: "Maîtrise réelle des outils." },
                { label: "Sur-mesure", text: "Projets personnalisés" },
                { label: "Professionnalisme", text: "Excellence Opérationnelle" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-askia-blue font-bold text-xs">{item.label}</span>
                  <span className="text-slate-400 text-[11px]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      <section className="bg-white py-20 lg:py-32 border-t border-askia-gray/30 overflow-hidden">
  <div className="container mx-auto px-8 md:px-16 lg:px-24">
    
    {/* En-tête de la section */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div className="space-y-4">
        <h2 className="text-askia-teal font-bold text-xs uppercase tracking-[0.3em]">
          Portfolio
        </h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-askia-blue leading-tight">
          Nos<span className="text-askia-teal">Réalisations</span>.
        </h3>
      </div>
      <div className="hidden md:flex gap-2">
        <p className="text-slate-400 text-xs italic">Faites défiler pour explorer →</p>
      </div>
    </div>

    {/* Carousel horizontal */}
    <div className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
      {[
        {
          cat: "Developpement Web",
          title: "Serere Voyage",
          image: "/appreservation.jpeg",
          desc: "Application Web pour la réservation des voyages et visa pour l'agence de voyage serereVoyage",
          stat: "Efficiency +40%"
        },
        {
          cat: "Developpement Web",
          title: "Site Vitrine pour Graphiste",
          image: "/graphiste.png",
          desc: "Site vitrine élegant présentant le graphiste et une galerie de réalisations graphiques et facilitant la collaboration avec ses clients",
          stat: "50+ Diplômés"
        },
        {
          cat: "Data",
          title: "Analyse des données sur les refugiés au Mali",
          image: "/refugie.jpg",
          desc: "Analsye des données humanitaires(HCR) pour aider les ong à optimiser l'aide humanitaire aux déplacés",
          stat: "Sécurité 100%"
        }
      ].map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="min-w-[300px] md:min-w-[400px] snap-start group"
        >
          <div className="bg-askia-gray/20 rounded-[2rem] overflow-hidden border border-transparent hover:border-askia-teal/30 transition-all duration-500 hover:shadow-2xl hover:shadow-askia-blue/10">
            {/* Image descriptive */}
            <div className="h-56 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-askia-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Contenu de la card */}
            <div className="p-8 space-y-4">
              <span className="text-[10px] font-bold text-askia-teal uppercase tracking-widest bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                {project.cat}
              </span>
              <h4 className="text-xl font-bold text-askia-blue group-hover:text-askia-teal transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-sans line-clamp-2">
                {project.desc}
              </p>
              
              <div className="pt-6 border-t border-askia-gray/50 mt-4 flex justify-between items-center">
                <span className="text-xs font-bold text-askia-blue/60 uppercase tracking-tighter">{project.stat}</span>
                <div className="w-10 h-10 rounded-full bg-askia-blue text-white flex items-center justify-center group-hover:bg-askia-teal transition-all duration-300">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* SECTION TÉMOIGNAGES */}
<section className="bg-askia-gray/10 py-20 lg:py-32 overflow-hidden">
  <div className="container mx-auto px-8 md:px-16 lg:px-24">
    
    {/* En-tête de la section */}
    <div className="mb-16">
      <h2 className="text-askia-teal font-bold text-xs uppercase tracking-[0.3em] mb-4">
        Témoignages
      </h2>
      <h3 className="font-heading text-3xl md:text-4xl font-bold text-askia-blue leading-tight">
        Ce que nos partenaires <br /> <span className="text-askia-teal">disent de nous</span>.
      </h3>
    </div>

    {/* Carousel horizontal des témoignages */}
    <div className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
      {[
        {
          name: "Agence SereVoyage",
          role: "Gérant",
          text: "Nous avions besoin d'une solution de réservation moderne pour notre agence de voyage basée à Bamako. ASKIA-Tech a développé une application sur mesure qui a transformé notre façon de travailler",
          initials: "AS"
        },
        {
          name: "Dr Aissata Diallo",
          role: "Doctorante en SST",
          text: "Travailler avec Askiatech a été déterminant pour la réussite de mon mémoire , plus qu'un encadreur, c'est un expert pédagogue qui sait rendre accessible des sujets complexes avec une patience remarquable. ",
          initials: "AD"
        },
       
      ].map((testimonial, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="min-w-[320px] md:min-w-[450px] snap-start"
        >
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-askia-gray/50 h-full flex flex-col justify-between">
            {/* Icône de citation */}
            <div className="text-askia-teal text-5xl font-serif leading-none mb-6">“</div>
            
            <p className="text-slate-600 italic text-lg leading-relaxed mb-8">
              {testimonial.text}
            </p>

            <div className="flex items-center gap-4 border-t border-askia-gray pt-6">
              {/* Avatar stylisé avec initiales */}
              <div className="w-12 h-12 rounded-full bg-askia-blue flex items-center justify-center text-white font-bold text-sm">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="text-askia-blue font-bold text-base">{testimonial.name}</h4>
                <p className="text-askia-teal text-xs font-medium uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Indicateur de défilement (visuel uniquement) */}
    <div className="flex gap-2 mt-4 justify-center md:justify-start">
      <div className="h-1 w-12 bg-askia-teal rounded-full"></div>
      <div className="h-1 w-4 bg-askia-blue/20 rounded-full"></div>
      <div className="h-1 w-4 bg-askia-blue/20 rounded-full"></div>
    </div>
  </div>
</section>

    </main>
  );
}