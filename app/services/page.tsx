"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ContactModal from '@/components/ContactModal';
const ServicesPage = () => {
  const services = [
    {
      title: "Développement Sur-Mesure",
      subtitle: "Des logiciels adaptés à vos réalités",
      description: "Conception d'applications web et mobiles robustes, adaptés à vos besoins",
      features: ["Sites Web","App Mobiles", "Plateformes Web", "Site-Ecommerce","ERP"],
      icon: "💻"
    }
    ,
    {
      title: "Académie Numérique",
      subtitle: "Former les talents de demain",
      description: "Des programmes intensifs (Bootcamps) orientés pratique pour maîtriser les métiers du futur : Informatique, Designe Graphique ,Data et IA",
      features: ["Formations certifiantes", "Mentorat expert", "Projets réels"],
      icon: "🎓"
    },
    {
      title: "Data Science & IA",
      subtitle: "L'intelligence au service de vos décisions",
      description: "Nous développons des modèles prédictifs et des solutions d'IA sur mesure pour analyser vos données complexes (réfugiés, agriculture, finance).",
      features: ["Collecte et Analyse de données", "Data Visualisation", "Machine Learning","Automatisation"],
      icon: "📊"
    },
    {
      title: "Transformation Digitale",
      subtitle: "Moderniser votre organisation",
      description: "Accompagnement complet des entreprises et ONG dans la migration vers des outils numériques performants et sécurisés.",
      features: ["Logiciels de Gestion", "Audit de Systèmes", "Automatisation"],
      icon: "🚀"
    },
    
    {
      title: "Design Graphique et Imprimerie",
      subtitle: "De l'identité graphique de votre entreprise à l'impression",
      description: "Impression de support de communication des documents professionnels,cartes de vistes , flyers etc.",
      features: ["Logo Professionnel", "Affiches", "Cartes de Visite","Depliants","Banderole etc."],
      icon: "💻"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HERO SERVICES */}
      <section className="bg-askia-blue py-24 lg:py-40 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-askia-teal/10 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nos <span className="text-askia-teal">Expertises</span>
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
            ASKIA-Tech combine excellence académique et savoir-faire technique pour propulser votre transformation numérique au Mali et en Afrique.
          </p>
        </div>
      </section>

      {/* GRILLE DE SERVICES DÉTAILLÉE */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3rem] bg-askia-gray/10 border border-transparent hover:border-askia-teal/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-askia-teal font-bold text-xs uppercase tracking-widest mb-2">
                  {service.subtitle}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-askia-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-askia-blue/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-askia-teal" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-8 mb-20">
        <div className="bg-askia-teal rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Un projet spécifique en tête ?</h2>
          <p className="mb-8 text-white/80 max-w-xl mx-auto">
            Nos experts sont prêts à concevoir une solution adaptée à vos défis technologiques.
          </p>
          <ContactModal />
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;