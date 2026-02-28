import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Lightbulb } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION HERO */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
            L'intelligence d'hier, <br />
            <span className="text-accent italic">la technologie d'aujourd'hui</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            ASKIA-Tech est une entreprise de services numériques basée à Bamako, 
            dédiée à l'accélération de la transformation digitale au Mali et en Afrique.
          </p>
        </div>
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* SECTION NOTRE HISTOIRE / MISSION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/about.png" // Ajoute une image de ton équipe ou de Bamako tech
                alt="Équipe ASKIA-Tech"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Qui sommes-nous ?</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Un pont entre tradition et innovation</h3>
                <p className="text-slate-600 leading-relaxed text-lg italic">
                  "Inspirés par la sagesse et la vision des grands bâtisseurs de l'histoire, nous construisons les infrastructures numériques de demain."
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <Rocket className="text-accent" />, title: "Innovation", desc: "Toujours à la pointe des nouvelles technologies." },
                  { icon: <Users className="text-accent" />, title: "Proximité", desc: "Un accompagnement sur mesure pour nos clients maliens." },
                  { icon: <CheckCircle2 className="text-accent" />, title: "Excellence", desc: "La qualité aux standards internationaux." },
                  { icon: <Lightbulb className="text-accent" />, title: "Vision", desc: "Former la prochaine génération de leaders tech." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CHIFFRES CLÉS */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projets livrés", value: "50+" },
              { label: "Experts Tech", value: "5" },
              { label: "Apprenants formés", value: "200+" },
              { label: "Satisfaction Client", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION NOS SERVICES (RAPPEL) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Ce que nous faisons de mieux</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">01</div>
                <h4 className="text-xl font-bold text-primary">Développement Logiciel</h4>
                <p className="text-slate-500 text-sm">Applications web et mobiles sur mesure pour répondre à vos besoins spécifiques.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">02</div>
                <h4 className="text-xl font-bold text-primary">Data Science & IA</h4>
                <p className="text-slate-500 text-sm">Analyse de données et solutions intelligentes pour booster votre productivité.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">03</div>
                <h4 className="text-xl font-bold text-primary">Formation & Académie</h4>
                <p className="text-slate-500 text-sm">Montée en compétences de vos équipes sur les outils digitaux modernes.</p>
              </CardContent>
            </Card>
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
    </div>
  );
}