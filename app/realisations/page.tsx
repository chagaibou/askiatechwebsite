"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ContactModal from '@/components/ContactModal';

const projects = [
  {
    cat: "Developpement Web",
    title: "Serere Voyage",
    image: "/appreservation.jpeg",
    desc: "Application Web pour la réservation des voyages et visa pour l'agence serereVoyage.",
    stat: "Efficiency +40%"
  },
  {
    cat: "Developpement Web",
    title: "Portfolio Graphiste",
    image: "/graphiste.png",
    desc: "Site vitrine élégant présentant une galerie de réalisations et facilitant la collaboration client.",
    stat: "50+ Diplômés"
  },
  {
    cat: "Data",
    title: "Analyse Réfugiés Mali",
    image: "/refugie.jpg",
    desc: "Analyse des données humanitaires (HCR) pour optimiser l'aide aux déplacés.",
    stat: "Sécurité 100%"
  }
];

const RealisationsPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-askia-blue pt-24 pb-16 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-askia-teal font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Portfolio
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Nos <span className="text-askia-teal">Réalisations</span>.
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              ASKIA-Tech transforme des idées complexes en solutions numériques tangibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRILLE DES RÉALISATIONS */}
      <section className="py-12 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500">
                  
                  {/* Image réduite */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-bold text-askia-blue uppercase tracking-wider bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {project.cat}
                      </span>
                    </div>
                  </div>

                  {/* Contenu compact */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-askia-blue mb-2 group-hover:text-askia-teal transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                      {project.desc}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                      
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-askia-blue flex items-center justify-center group-hover:bg-askia-blue group-hover:text-white transition-all">
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION COMPACTE */}
      <section className="py-16">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-2xl font-bold text-askia-blue mb-4">Un projet en tête ?</h3>
          <ContactModal />
        </div>
      </section>
    </main>
  );
};

export default RealisationsPage;