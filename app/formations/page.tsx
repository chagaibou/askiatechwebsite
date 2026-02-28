"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ContactModal from '@/components/ContactModal';

const formations = [
  {
    title: "Bases de la Programmation Python",
    duration: "4 semaines",
    price: "50.000 FCFA",
    level: "Débutant",
    tags: ["Algorithmie", "Python 3", "Logique"],
    description: "Le point de départ idéal pour les non-développeurs. Maîtrisez la logique de programmation et construisez vos premiers scripts automatisés avec le langage le plus populaire au monde.",
    icon: "🐍"
  },
  {
    title: "Développement Web Fullstack (Django)",
    duration: "3 mois",
    price: "150 000 FCFA", 
    level: "Avancé",
    tags: ["Python", "Django", "PostgreSQL", "HTML","CSS"],
    description: "Passez de la théorie à la pratique. Apprenez à concevoir des plateformes web robustes, sécurisées et scalables en utilisant le framework Django, le choix privilégié des géants de la tech.",
    icon: "🌐"
  },
  {
    title: "Python pour l'analyse de données",
    duration: "4 semaines",
    price: "100 000 FCFA",
    level: "Expert",
    tags: ["Pandas", "Scikit-Learn", "Nettoyage de données", "ML"],
    description: "Transformez des données brutes en décisions stratégiques. Apprenez à manipuler des volumes de données complexes, créer des visualisations percutantes et déployer vos premiers modèles de Machine Learning.",
    icon: "📊"
  }
];
const testimonials = [
  {
  name: "Dr. Camara",
  role: "Enseignant-Chercheur",
  text: "Durant ce mois de formation, j'ai repris les bases de la programmation pour les appliquer aux calculs mathématiques complexes. Savoir automatiser des formules que je faisais à la main a radicalement transformé ma rigueur scientifique.",
  promo: "Python pour débutant"
},
  {
  name: "Mr Diarra",
  role: "Ingénieur Géologue",
  text: "Dans mon métier, l'interprétation des données de forage nécessite une grande précision. avec une formation spécialisée j'ai acquis les bases de Python qui me permettent aujourd'hui de manipuler des matrices complexes avec NumPy pour mes calculs géostastiques. Pouvoir générer mes propres graphiques d'analyse minéralogique au lieu de dépendre de logiciels rigides a totalement boosté mon efficacité sur le terrain.",
  promo: "Promotion Python pour l'analyse de données"
}
];

const FormationsPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-askia-blue pt-32 pb-20 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Propulsez votre <span className="text-askia-teal">Carrière</span>
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10">
            Rejoignez l'élite technologique du Mali avec nos formations intensives guidées par des experts du secteur.
          </p>
        </div>
      </section>

      {/* CATALOGUE DE FORMATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-askia-teal font-bold text-sm uppercase tracking-widest mb-2">Catalogue</h2>
              <h3 className="text-3xl font-bold text-askia-blue">Nos Programmes</h3>
            </div>
            <div className="flex gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-slate-200">Tous les niveaux</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl">{f.icon}</div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-askia-blue">{f.title}</h4>
                    <span className="text-[10px] font-black bg-askia-teal/10 text-askia-teal px-2 py-1 rounded uppercase">{f.level}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {f.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {f.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8 bg-askia-blue text-white mt-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">Durée</p>
                      <p className="font-bold">{f.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">Investissement</p>
                      <p className="font-bold text-askia-teal">{f.price}</p>
                    </div>
                  </div>
                  <ContactModal />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES ÉTUDIANTS */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-askia-blue mb-4">Ils ont sauté le pas</h2>
            <div className="h-1 w-20 bg-askia-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border-l-4 border-askia-teal shadow-lg italic text-slate-600 relative">
                <span className="absolute top-4 right-8 text-6xl text-slate-100 font-serif">“</span>
                <p className="mb-6 relative z-10">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-askia-blue rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-askia-blue font-bold text-sm">{t.name}</p>
                    <p className="text-askia-teal text-[10px] font-bold uppercase">{t.promo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormationsPage;