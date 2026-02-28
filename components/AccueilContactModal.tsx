"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccueilContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (status === 'success') setStatus('idle'); // Réinitialise après un succès
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        // Ferme la modal automatiquement après 3 secondes en cas de succès
        setTimeout(() => {
          setIsOpen(false);
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* BOUTON DÉCLENCHEUR */}
      <button 
        onClick={toggleModal}
        className="bg-accent text-white w-full py-3 rounded-xl mt-2"
      >
        Contact
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            
            {/* Overlay (Flou d'arrière-plan) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-askia-blue/60 backdrop-blur-sm"
            />

            {/* Contenu de la Modal */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header Fixe */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <div>
                  <h3 className="text-xl font-bold text-askia-blue">Nouveau Projet</h3>
                  <p className="text-slate-500 text-xs">L'expertise ASKIA-Tech à votre écoute.</p>
                </div>
                <button 
                  onClick={toggleModal}
                  className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-askia-teal transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Zone de contenu / Formulaire */}
              <div className="p-6 md:p-8 overflow-y-auto">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-2xl font-bold text-askia-blue mb-2">Message envoyé !</h4>
                    <p className="text-slate-500 text-sm">Merci, nos experts vous recontacteront sous 24h.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-askia-blue uppercase tracking-wider">Nom complet</label>
                      <input 
                        name="name"
                        required
                        type="text" 
                        placeholder="Ex: Moussa Diarra" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-askia-teal focus:bg-white outline-none transition-all text-askia-blue" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-askia-blue uppercase tracking-wider">Email professionnel</label>
                      <input 
                        name="email"
                        required
                        type="email" 
                        placeholder="contact@entreprise.com" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-askia-teal focus:bg-white outline-none transition-all text-askia-blue" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-askia-blue uppercase tracking-wider">Service souhaité</label>
                      <select 
                        name="service"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-askia-teal outline-none text-askia-blue appearance-none"
                      >
                        <option>Data Science / IA</option>
                        <option>Académie Numérique</option>
                        <option>Transformation Digitale</option>
                        <option>Autre Projet</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-askia-blue uppercase tracking-wider">Détails du besoin</label>
                      <textarea 
                        name="message"
                        required
                        rows={3} 
                        placeholder="Comment pouvons-nous vous aider ?" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-askia-teal focus:bg-white outline-none resize-none transition-all text-askia-blue"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-askia-teal text-white py-4 rounded-xl font-bold hover:bg-askia-blue transition-all shadow-lg shadow-askia-teal/20 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs text-center font-medium">
                        Une erreur est survenue. Veuillez réessayer.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccueilContactModal;